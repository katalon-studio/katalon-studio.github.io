---
title: "Replace WebDriver binaries and Selenium library" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/update-or-replace-web-browser-drivers-and-selenium.html 
redirect_from:
    - "/display/KD/Update+or+Replace+Web+Browser+Drivers+and+Selenium/"
    - "/display/KD/Update%20or%20Replace%20Web%20Browser%20Drivers%20and%20Selenium/"
    - "/x/1xtO/"
    - "/katalon-studio/docs/update-or-replace-web-browser-drivers-and-selenium/"
description: 
---

## Replace Selenium library

Location:
- Windows: `<Katalon Studio folder>\configuration\resources\lib\selenium-server-standalone-3.x.jar`
- macOS: `/Applications/Katalon Studio.app/Contents/Eclipse/configuration/resources/lib/selenium-server-standalone-3.x.jar`
    
## Replace WebDriver binaries (application-level)

### Windows

**Chrome**

You can use 32-bit Windows Chromedriver for both 32-bit and 64-bit Windows.

Location:
- `<Katalon Studio folder>\configuration\resources\drivers\chromedriver_win32`
- `<Katalon Studio folder>\configuration\resources\drivers\chromedriver_win64`

**Firefox**

Location:
- `<Katalon Studio folder>\configuration\resources\drivers\firefox_win32`
- `<Katalon Studio folder>\configuration\resources\drivers\firefox_win64`

**Internet Explorer**

Location:
- `<Katalon Studio folder>\configuration\resources\drivers\iedriver_win32`
- `<Katalon Studio folder>\configuration\resources\drivers\iedriver_win64`

**Edge**

Location:
- `<Katalon Studio folder>\configuration\resources\drivers\edgedriver`

### macOS

**Chrome**

Location:
- `/Applications/Katalon Studio.app/Contents/Eclipse/configuration/resources/drivers/chromedriver_mac`

**Firefox**

Location:
- `/Applications/Katalon Studio.app/Contents/Eclipse/configuration/resources/drivers/firefox_mac`

## Replace WebDriver binaries (project-level)

WebDriver binaries can be replaced at project-level by copying new files into the `Include` directory inside the project.

Location:
- `Include/drivers/chromedriver_win32/chromedriver.exe`
- `Include/drivers/chromedriver_win64/chromedriver.exe`
- `Include/drivers/chromedriver_mac64/chromedriver`
- `Include/drivers/chromedriver_linux32/chromedriver`
- `Include/drivers/chromedriver_linux64/chromedriver`
- `Include/drivers/geckodriver_win32/geckodriver.exe`
- `Include/drivers/geckodriver_win64/geckodriver.exe`
- `Include/drivers/geckodriver_mac64/geckodriver`
- `Include/drivers/geckodriver_linux32/geckodriver`
- `Include/drivers/geckodriver_linux64/geckodriver`
- `Include/drivers/iedriver_win32/IEDriverServer.exe`
- `Include/drivers/iedriver_win64/IEDriverServer.exe`
- `Include/drivers/edgedriver_win32/MicrosoftWebDriver.exe`
- `Include/drivers/edgedriver_win64/MicrosoftWebDriver.exe`