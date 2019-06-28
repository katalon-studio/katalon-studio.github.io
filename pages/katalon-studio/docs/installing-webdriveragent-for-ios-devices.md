---
title: "Installing WebDriverAgent for iOS devices"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/installing-webdriveragent-for-ios-devices.html
redirect_from:
    - "/display/KD/Installing+WebDriverAgent+for+iOS+devices/"
    - "/display/KD/Installing%20WebDriverAgent%20for%20iOS%20devices/"
    - "/x/TwbR/"
    - "/katalon-studio/docs/installing-webdriveragent-for-ios-devices/"
description:
---
> Warning
>
> This setup process is **NOT** required if you use an Android device. Please go straight to this [step](/pages/viewpage.action?pageId=13698548#MobileonmacOS(new)-Android) instead.

[WebDriverAgent](https://github.com/facebook/WebDriverAgent) is a [WebDriver server](https://w3c.github.io/webdriver/webdriver-spec.html) implementation for iOS that can be used to remote control iOS devices. You need to install and setup WebDriverAgent to allow Katalon Studio to automate iOS devices.

*   Open **Xcode > Preferences > Accounts**: Add developer's Apple ID 

![](../../images/katalon-studio/docs/installing-webdriveragent-for-ios-devices/image2016-12-21-153A513A4.png)



*   Open **Terminal** and enter following command to initialize **WebDriverAgent** project:

```groovy
cd /usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent
mkdir -p Resources/WebDriverAgent.bundle
sh ./Scripts/bootstrap.sh -d
```

> Common issues
>
> Error code 13: re-run command with sudo: **sudo ./Scripts/bootstrap.sh -d**
>
> Error _Error StackTrace: Cannot find module 'eslint-config-appium': _missing paramter -d when running **./Scripts/bootstrap.sh**

*   Login to Apple developer account and [register device](https://www.wikihow.com/Add-a-New-Device-to-Your-Apple-Developer-Portal) to developer account.


*   Open project **WebDriverAgent.xcodeproj** within folder **WebDriverAgent** in Xcode.
    ![](../../images/katalon-studio/docs/installing-webdriveragent-for-ios-devices/image2016-12-21-153A513A29.png)


*   Select target **WebDriverAgentLib**, in the Signing section, check **Automatically manage signing** and select the team.
    ![](../../images/katalon-studio/docs/installing-webdriveragent-for-ios-devices/image2016-12-21-153A513A56.png)


*   Then on the menu bar, select **Product > Build**
    **![](../../images/katalon-studio/docs/installing-webdriveragent-for-ios-devices/image2016-12-21-153A523A23.png)**

*   Repeat the last two steps for **WebDriverAgentRunner**

*   Xcode may fail to create a provisioning profile for the `WebDriverAgentRunner` target:

    [![Xcode provisioning fail](../../images/katalon-studio/docs/installing-webdriveragent-for-ios-devices/xcode-facebook-fail.png)](https://github.com/appium/appium/blob/master/docs/en/drivers/ios-xcuitest-img/xcode-facebook-fail.png)

*   This necessitates manually changing the bundle id for the target by going into the "Build Settings" tab, and changing the "Product Bundle Identifier" from `com.facebook.WebDriverAgentRunner` to something that Xcode will accept:

    [![Xcode bundle id](../../images/katalon-studio/docs/installing-webdriveragent-for-ios-devices/xcode-bundle-id.png)](https://github.com/appium/appium/blob/master/docs/en/drivers/ios-xcuitest-img/xcode-bundle-id.png)


*   Build **WebDriverAgent** by executing this command on Terminal in WebdriverAgent folder to verify all above steps worked

    ```groovy
    xcodebuild -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination 'id=<udid>' test
    ```

    _where <udid> is your Device ID_

*   In case this dialog is displayed, select **Always Allow**.
    ![](../../images/katalon-studio/docs/installing-webdriveragent-for-ios-devices/image2016-12-21-153A543A6.png)



*   If this was successful, the output should end with something like:

    ```groovy
        Test Suite 'All tests' started at 2017-01-23 15:49:12.585
        Test Suite 'WebDriverAgentRunner.xctest' started at 2017-01-23 15:49:12.586
        Test Suite 'UITestingUITests' started at 2017-01-23 15:49:12.587
        Test Case '-[UITestingUITests testRunner]' started.
            t =     0.00s     Start Test at 2017-01-23 15:49:12.588
            t =     0.00s     Set Up
    ```

    ![Build-Output](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Build-Output.png)


*   (OPTIONAL) To completely verify , you can try accessing the WebDriverAgent server status (note: you _must_ be on the same network as the device, and know its IP address, from Settings => Wi-Fi => Current Network)

    ```groovy
    export DEVICE_URL='http://<device IP>:8100'
    export JSON_HEADER='-H "Content-Type: application/json;charset=UTF-8, accept:application/json"'
    curl -X GET '$JSON_HEADER' $DEVICE_URL/status
    ```

    ```groovy
    You ought to get back output something like this:
     {
          "value" : {
            "state" : "success",
            "os" : {
              "name" : "iOS",
              "version" : "10.2"
            },
            "ios" : {
              "simulatorVersion" : "10.2",
              "ip" : "192.168.0.7"
            },
            "build" : {
              "time" : "Jan 23 2017 14:59:57"
            }
          },
          "sessionId" : "8951A6DD-F3AD-410E-A5DB-D042F42F68A7",
          "status" : 0
    ```
