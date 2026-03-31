@echo off
echo ========================================
echo AI Conversation Image Manager
echo ========================================
echo.

echo Current images in the folder:
dir "frontend\public\images\ai-conversation" /B

echo.
echo To replace images:
echo 1. Place your JPG/PNG images in the folder
echo 2. Use the same filenames:
echo    - main-workflow.jpg
echo    - script-builder.jpg
echo    - analysis-dashboard.jpg
echo    - decision-engine.jpg
echo.

echo To view current images:
echo Open your browser and go to:
echo http://localhost:5173/images/ai-conversation/main-workflow.jpg
echo (replace 5173 with your actual frontend port)
echo.

pause