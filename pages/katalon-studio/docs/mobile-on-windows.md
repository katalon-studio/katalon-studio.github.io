---
title: "Mobile on Windows"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-on-windows.html
redirect_from:
    - "/display/KD/Mobile+on+Windows/"
    - "/display/KD/Mobile%20on%20Windows/"
    - "/x/jwbR/"
    - "/katalon-studio/docs/mobile-on-windows/"
description:
---
Katalon Studio Supported Environment on Windows
-----------------------------------------------

> Unfortunately, you can only test an **iOS** application using **macOS**. If you wish to setup your macOS environment for Katalon Studio, please refer to [this guide](/x/9AXR).

|   | Version |
| --- | --- |
| Appium | 1.6, 1.7, 1.8 |
| Android | 6.x, 7.x |

Installing Dependencies
-----------------------

Due to the diifferences in computer environments, the Katalon download package does not include some dependencies needed to test on mobile devices/emulators. Thus, in order to succesfully create and run a test case using Katalon Studio on Windows, you will need [Appium](http://appium.io/docs/en/about-appium/getting-started/#installing-appium).

> Attention
>
> *   Make sure you install Node.js into a location where you have full **Read** and **Write** permissions.
> *   Appium 1.9 is **not** supported, so please kinldy install Appium 1.8. The installation command is:
>     npm install -g appium@1.8.1

Setting Up Your Devices
-----------------------

*   Turn on the phone's developer mode (go to **Settings** > **Developer options**).

*   Connect your Android Phone to your computer via a USB cable. Just confirm if prompted to accept/trust the device. In the Developer Options on Mobile User Interface, please enable:
1. USB debugging – Debug mode when USB is connected 
2. Install via USB – Allow installing apps via USB
3. USB debugging (Security Setting) – Allow granting permissions and simulating input via USB debugging 

*   Install Android SDK: Katalon Studio will detect and ask you to install Android SDK automatically if your current machine doesn't have it. Please allow Katalon Studio to install it in this case.

Verifiying the Setup
--------------------

After completing setting your environment, open a Mobile Testing Sample Project (which is packaged in your Katalon Studio installation) and execute a test suite using an Android device: 

![](../../images/katalon-studio/docs/mobile-on-windows/image2017-6-29-143A483A34.png)
Select your device from the **Android Devices** list. Click **OK**. 

![](../../images/katalon-studio/docs/mobile-on-windows/image2018-1-26-183A393A1.png)

If your test suite runs successfully, you will see the results in the test reports as follow:

![](../../images/katalon-studio/docs/mobile-on-windows/image2018-6-15-173A473A28.png)

For more information on how to run a test suite, check out the documentation [here](/pages/viewpage.action?pageId=786668).

Finishing Steps
---------------

Once setting up successfully, follow the following guides to perform mobile testing in Katalon Studio

*   [Record Mobile Utility](/display/KD/Record+Mobile+Utility)
*   [Spy Mobile Utility](/display/KD/Spy+Mobile+Utility)
*   [Execute a Test Case or a Test Suite](/display/KD/Execute+a+Test+Case+or+a+Test+Suite)

Troubleshooting Common Issues
-----------------------------

_**Please refer to [this](/display/KD/Troubleshooting+automated+mobile+testing) troubleshooting tutorial**_