@echo off
cd "%~dp0"
git add * && git commit -m "push" && git push https://gitee.com/deltarunecn/deltarunecn.git master -f
pause>nul