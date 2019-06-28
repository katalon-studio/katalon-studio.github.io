---
title: "How to integrate with Kobiton"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/integrate_with_kobiton.html
description: "Using Katalon Studio, you can easily execute automated tests on Kobiton’s devices, thanks to the built-in integration feature supported by Katalon Studio."
redirect_from:
    - "/katalon-studio/tutorials/integrate_with_kobiton.html"
---
Mobile app cloud-based devices can be a good option for mobile testing teams that have limited access to real devices. Kobiton is a powerful mobile device platform offers real mobile devices for both testers and developers. Using Katalon Studio, you can easily execute automated tests on Kobiton's devices, thanks to the built-in integration feature supported by Katalon Studio.

This tutorial will walk you through basic steps to setup the integration between Katalon Studio and Kobiton.

Enable Kobiton Integration
--------------------------

1\. Open Kobiton integration settings from the main menu at **Windows > Katalon Studio Preferences > Katalon > Kobiton**. Check **Enable Kobiton Integration**.  
![Enable Kobiton Integration](../../images/katalon-studio/tutorials/integrate_with_kobiton/Enable-Kobiton-Integration.png)

2\. Enter your Kobiton account for authentication and click on  **Connect**. After establishing a successful connection with Kobition, the message "Retrieving Kobiton API Keys successfully" will be displayed. Katalon Studio automatically retrieve the information for Kobiton integration.

![information for Kobiton integration](../../images/katalon-studio/tutorials/integrate_with_kobiton/Connect.png)  
Other fields in the Kobiton configuration dialog include:

| Field | Description |
| --- | --- |
| Kobiton Server | The Kobiton server to be connected and integrated with Katalon Studio. |
| API Key | The token to be used by Katalon Studio for exchanging API messages with Kobiton. You can generate more keys from the [Kobiton API Settings](https://portal.kobiton.com/settings/keys). |

3\. Click **Apply **when you are done with the settings.

Mobile testing with Kobiton devices
-----------------------------------

1\. Navigate to Kobiton Portal: [https://portal.kobiton.com](https://portal.kobiton.com) and login with your username and password.

2\. In Kobiton, upload your app to [Kobiton App Repository](https://docs.kobiton.com/#managing-apps).![Kobiton App Repository](../../images/katalon-studio/tutorials/integrate_with_kobiton/Kobiton-App-Repository.png)

3\. From the Repository view, select 'more actions' and select **_Automation snippet._** Copy the app ID (the one in bold, for example, **_Kobiton-store:184_** as shown below) and save it.  
![Automation snippet](../../images/katalon-studio/tutorials/integrate_with_kobiton/Automation-snippet.png)

4\. Click on **Devices** menu and select your devices by "_Mark as favorite"._![Kobiton Devices menu](../../images/katalon-studio/tutorials/integrate_with_kobiton/Devices.png)

5\. In Katalon Studio, open your mobile test case and switch to Scripts view. Locate this line of code:

```groovy
Mobile.startApplication(appPath,false).

```

Next, replace the

```groovy
"appPath"

```

 with the **Kobiton **app **id **saved in Step 3 as shown below:

![replace the "appPath" with the Kobiton app id](../../images/katalon-studio/tutorials/integrate_with_kobiton/Kobiton-app-id.png)

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCaseMobile.comment('Story: Verify correct alarm message')Mobile.comment('Given that user has started an application')'Get full directory\'s path of android application'
 
//def appPath = PathUtil.relativeToAbsolutePath(GlobalVariable.G_AndroidApp, RunConfiguration.getProjectDir())
 
Mobile.startApplication('kobiton-store:184', false)
 
Mobile.comment('And he navigates the application to Activity form')
 
Mobile.tap(findTestObject('Application/android.widget.TextView - App'), 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.comment('When he taps on the Custom Dialog button')
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)
 
'Get displayed message on the dialog'
 
def message = Mobile.getText(findTestObject('Application/App/Activity/Custom Dialog/android.widget.TextViewCustomDialog'),10)
 
Mobile.comment('Then the correct dialog message should be displayed')
 
Mobile.verifyEqual(message, 'Example of how you can use a custom Theme.Dialog theme to make an activity that looks like a customized dialog, here with an ugly frame.')
 
Mobile.closeApplication()

```

6\. From the main toolbar, click on drop down menu of **Run**, and select the option to run with **Kobiton Device**.  
![run with Kobiton Device](../../images/katalon-studio/tutorials/integrate_with_kobiton/Run.png)

7\. On Kobiton Favorite Devices screen, a list of **Favorite Devices** from _Step 4_ will be displayed in _Device Name_.  

Select preferred device and click Ok.

You can also modify this list by updating your **Favorite Devices **from [https://portal.kobiton.com/devices](https://portal.kobiton.com/devices).  
![Kobiton Favorite Devices](../../images/katalon-studio/tutorials/integrate_with_kobiton/Favorite-Devices.png)

8\. Once Katalon Studio is finished, automation test execution will be uploaded to Kobiton. Navigate to **Sessions **menu to view  
![automation test execution uploaded to Kobiton](../../images/katalon-studio/tutorials/integrate_with_kobiton/Sessions.png)

Congrats! You have just run your Kobiton mobile automation test with Katalon Studio. Kobiton is an innovative mobile device testing platform, through Kobiton developers can save cost and time by directly remote access to the mobile devices to run test before releasing to the market. This will empower mobile developers to build high-quality applications by identifying potential issues faster.