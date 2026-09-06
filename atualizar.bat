bat
@echo off
cd /d "%~dp0"
echo ===== POFNIR: sincronizando pack =====
packwiz refresh
git add .
git commit -m "Atualizacao %date% %time%"
git push
echo ===== Publicado! Patch no ar. =====
pause