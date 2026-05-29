import paramiko
import os
import stat

# VPS credentials
HOST = "69.62.82.12"
PORT = 22
USERNAME = "root"
PASSWORD = "Eri404@scale"
REMOTE_PATH = "/var/www/rakshit-portfolio/portfoliolatest/dist"
LOCAL_DIST = r"D:\sir portfolio\portfoliolatest\dist"

def run_cmd(client, cmd, timeout=60):
    print(f"\n> {cmd}")
    stdin, stdout, stderr = client.exec_command(cmd, timeout=timeout)
    out = stdout.read().decode().strip()
    err = stderr.read().decode().strip()
    if out:
        print(f"  OUT: {out}")
    if err:
        print(f"  ERR: {err}")
    return out, err

def upload_dir(sftp, local_dir, remote_dir):
    """Recursively upload a directory."""
    try:
        sftp.stat(remote_dir)
    except FileNotFoundError:
        sftp.mkdir(remote_dir)
    
    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        remote_path = remote_dir + "/" + item
        
        if os.path.isdir(local_path):
            upload_dir(sftp, local_path, remote_path)
        else:
            print(f"  Uploading: {item}")
            sftp.put(local_path, remote_path)

def main():
    print(f"Connecting to {HOST}...")
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, port=PORT, username=USERNAME, password=PASSWORD, timeout=30)
    print("Connected!")

    # Step 1: Backup old dist and clear it
    print("\n--- Preparing remote directory ---")
    run_cmd(client, f"rm -rf {REMOTE_PATH}")
    run_cmd(client, f"mkdir -p {REMOTE_PATH}")

    # Step 2: Upload new dist
    print(f"\n--- Uploading dist from {LOCAL_DIST} ---")
    sftp = client.open_sftp()
    upload_dir(sftp, LOCAL_DIST, REMOTE_PATH)
    sftp.close()
    print("\nUpload complete!")

    # Step 3: Fix permissions
    print("\n--- Setting permissions ---")
    run_cmd(client, f"chown -R www-data:www-data {REMOTE_PATH} 2>/dev/null || chown -R nginx:nginx {REMOTE_PATH} 2>/dev/null || true")
    run_cmd(client, f"chmod -R 755 {REMOTE_PATH}")

    # Step 4: Reload nginx
    print("\n--- Reloading nginx ---")
    run_cmd(client, "nginx -t")
    run_cmd(client, "systemctl reload nginx")

    # Step 5: Verify
    print("\n--- Verifying deployment ---")
    run_cmd(client, f"ls -la {REMOTE_PATH}")
    run_cmd(client, "systemctl status nginx --no-pager | head -5")

    client.close()
    print("\nDeployment complete! Visit: https://founder.errorinfotech.in")

if __name__ == "__main__":
    main()
