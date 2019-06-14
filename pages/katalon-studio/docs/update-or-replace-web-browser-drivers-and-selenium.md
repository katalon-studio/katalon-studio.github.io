---
title: "Update or Replace Web Browser Drivers and Selenium" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/update-or-replace-web-browser-drivers-and-selenium.html 
redirect_from:
    - "/display/KD/Update+or+Replace+Web+Browser+Drivers+and+Selenium/"
    - "/display/KD/Update%20or%20Replace%20Web%20Browser%20Drivers%20and%20Selenium/"
    - "/x/1xtO/"
    - "/katalon-studio/docs/update-or-replace-web-browser-drivers-and-selenium/"
description: 
---
For manually replacing and updating other versions of WebDrivers and Selenium, please refer to this [guide](/x/1xtO). 

> Katalon Studio team strongly suggest users **NOT** to manually replace or update any WebDrivers. Any changes in drivers may cause runtime bugs for Katalon Studio application.

## How to Replace 

> For Katalon Studio v5.1.0 and later 

### **WINDOWS**

**Selenium**

-   **Download** the desired Selenium version **[here.](http://selenium-release.storage.googleapis.com/index.html)**
    (Select **only** Selenium 3.0+ and higher version than 3.7.1)
-   **Delete** existing selenium-server-standalone-3.x.jar  
-   **Copy** preferred **driver** into this folder  
    &lt;Katalon Studio folder&gt;\\configuration\\resources\\lib


**Chromedriver**

-   **Download** preferred Chromedriver **[here.](https://sites.google.com/a/chromium.org/chromedriver/downloads)**
-   **Copy** downloaded Chromedriver and **paste** into Katalon Studio
    folder

> You can use 32-bit Windows Chromedriver for both 32-bit and 64-bit
> Windows.

-   -   &lt;Katalon
        Studiofolder&gt;\\configuration\\resources\\drivers\\chromedriver\_win32
    -   &lt;Katalon
        Studiofolder&gt;\\configuration\\resources\\drivers\\chromedriver\_win64


**Firefox (Gecko Driver)**

-   **Download** preferred Gecko Driver **[here.](https://github.com/mozilla/geckodriver/releases)**
    
-   **Copy** downloaded Gecko driver and **paste** into Katalon Studio
    folder
    -   &lt;Katalon Studio
        folder&gt;\\configuration\\resources\\drivers\\firefox\_win32
    -   &lt;Katalon Studio
        folder&gt;\\configuration\\resources\\drivers\\firefox\_win64

**IEDriverServer**

Download preferred IEDriver **[here.](http://selenium-release.storage.googleapis.com/index.html)**

### **MAC OSX**

**[Selenium](http://selenium-release.storage.googleapis.com/index.html)**

-    /Applications/Katalon
    Studio.app/Contents/Eclipse/configuration/resources/lib

**[Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/downloads)**

-   /Applications/Katalon
    Studio.app/Contents/Eclipse/configuration/resources/drivers/chromedriver\_mac

**[Firefox (Gecko Driver)](https://github.com/mozilla/geckodriver/releases)**

-   /Applications/Katalon
    Studio.app/Contents/Eclipse/configuration/resources/drivers/firefox\_mac