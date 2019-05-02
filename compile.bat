@echo off
call tsc >nul
cd resources >nul
for /r starter/server %%i in (*.js) do move /y "%%i" "%%~di%%~pi%%~ni.mjs" >nul
cd ../ >nul
start "" altv-server.exe
echo compile success