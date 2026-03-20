@echo off
echo =========================================
echo    Starting BloodConnect Services...
echo =========================================

echo Starting Backend API Server (Port 5000)...
start /b cmd /c "cd backend && node server.js"

echo Starting Frontend React App (Vite)...
start /b cmd /c "cd frontend && npm run dev"

echo =========================================
echo Services are booting up! Logs from both 
echo the Frontend and Backend will display here.
echo.
echo To stop the servers, just close this window!
echo.
echo Your BloodConnect Frontend will be available at:
echo        http://localhost:5173
echo =========================================
