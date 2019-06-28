---
title: "Katalium WebDriver" 
sidebar: katalon_studio_docs_sidebar
permalink: katalium-server/docs/katalium-webdriver.html 
description: Information about Katalium WebDriver.
---
## Pre-Installed Microsoft Edge

Microsoft WebDriver for Microsoft Edge version 18 is a Windows Feature on Demand.

To install run the following in an elevated command prompt:
```
DISM.exe /Online /Add-Capability /CapabilityName:Microsoft.WebDriver~~~~0.0.1.0
```

For builds prior to 18, download the appropriate driver for your installed version of Microsoft Edge.

## Automatically update WebDriver

* Automatically detects versions of major browsers (Chrome, Firefox, Internet Explorer, Edge).

* Allows compatible WebDrivers to be automatically updated and installed.

