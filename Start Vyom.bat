@echo off
echo Starting Vyom n8n Template Library...
echo.
echo Open your browser at: http://localhost:8080
echo Press Ctrl+C in this window to stop the server.
echo.
start "" http://localhost:8080
python -m http.server 8080
pause
