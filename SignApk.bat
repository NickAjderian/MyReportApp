echo Signing FlikkReportPOC. pwd = B55

call cordova build android --release

del C:\Projects\MyHub\MyReportApp.apk

del C:\Projects\MyHub\MyReportApp_signed.apk

call jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\Projects\MyReportApp\myhub.keystore C:\Projects\MyReportApp\platforms\android\build\outputs\apk\android-release-unsigned.apk MyHub -signedjar C:\Projects\MyReportApp\MyReportApp_signed.apk

call C:\Users\Nick\AppData\Local\Android\sdk\build-tools\23.0.1\zipalign -v 4 C:\Projects\MyReportApp\MyReportApp_signed.apk C:\Projects\MyReportApp\MyReportApp.apk


rem jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore c:\projects\myhub\myhub.keystore C:\Projects\MyHub\platforms\android\build\outputs\apk\android-release-unsigned.apk myhub
rem call C:\Android\sdk\build-tools\android-4.4W\zipalign.exe -v 4 C:\Projects\MyHub\platforms\android\build\outputs\apk\android-release-unsigned.apk C:\Projects\MyHub\platforms\android\build\outputs\apk\myhub.apk
rem copy C:\Projects\MyHub\platforms\android\build\outputs\apk\myhub.apk C:\Projects\MyHub\myhub.apk
pause
