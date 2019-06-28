---
title: "Common Configuration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-configuration.html 
description: This article will show you how to configure a CI/CD plugin.
---
A CI/CD plugin will help download, deploy, and execute Katalon Studio on servers automatically. 

Other advantages are:

*   Being quick and easy - you won’t even have to install Katalon Studio manually
*   Being able to work even on machines without displays.
*   Allocating an isolated virtual display for each Jenkins build increases the stability of execution.

This article will show you how to configure a CI/CD plugin.

### Download Katalon Studio version

E.g. 5.10.1. The list of all releases can be retrieved from here.

### Use pre-installed Katalon Studio

E.g. /var/lib/jenkins/Katalon_Studio_Linux_64-5.10.1. 

Use this field when Katalon Studio cannot be downloaded automatically (often due to network conditions).

### Command arguments


E.g. -browserType="Chrome" -retry=0 -statusDelay=15 -testSuitePath="Test Suites/Regression Tests/All tests".
Please leave out -runMode. If not specified, -projectPath will be set to the current workspace directory.


*Note: Environment variables can be applied in the command arguments to parameterize the configuration with the following syntax:*

* For Windows: `%<var_name>%`
* For Linux/macOS: `$var_name`

### X11 DISPLAY (for Linux)


E.g.: This value will be used as the DISPLAY environment variable. Jenkins must be allowed to connect to the display, see xhost if you encounter access control issues.

### Xvfb-run configuration (for Linux)


E.g.: -a -n 0 -s "-screen 0 1024x768x24".

If specified, xvfb-run will be used. Please make sure Xvfb has been installed.


**Save** the configuration after finishing.