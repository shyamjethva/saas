const fs = require('fs');
const path = require('path');

const dir = 'd:/saas_6_5_26/Saas_website/error_infotech_saas/frontend/public/images/portfolio/achievements';

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.includes(' ')) {
            const newName = file.replace(/\s+/g, '_').replace(/[()]/g, '');
            fs.rename(path.join(dir, file), path.join(dir, newName), err => {
                if (err) throw err;
                console.log(`Renamed: ${file} -> ${newName}`);
            });
        }
    });
});
