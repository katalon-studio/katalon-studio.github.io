---
title: "Desired Capabilities in Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/desired_capabilities_in_katalon.html
description: "Desired Capabilities was introduced in Selenium to work with various browser capabilities such as handling browser cookies, SSL security popup, etc."
redirect_from:
    - "/katalon-studio/tutorials/desired_capabilities_in_katalon.html"
---
What are Desired Capabilities?
------------------------------

Desired Capabilities was introduced in Selenium to work with various browser capabilities such as handling browser cookies, SSL security popup, and other preferences of users.

Why Utilizing Desired Capabilities?
-----------------------------------

Through using Desired Capabilities, we can communicate with Appium server by sending a POST request. For example, a user would like to run mobile test with a preferred platform, browser, orientation of the app, etc. If the user has already set the desired capability preferences setting, Appium server will start a session with the capabilities that user has set initially.

Desired capabilities is a JSON object (having keys and values pair). Within each desired capability, there are few inbuilt capabilities. We need to set the capability **name** as '**key**' and **capability** value as '**value**'. The capabilities keys are **case-sensitive**.

Setting up Desired Capabilities for Mobile
------------------------------------------

*   From the '**Project**' dropdown of Katalon Studio main toolbar, click on **Settings**

![Desired Capabilities for Mobile](../../images/katalon-studio/tutorials/desired_capabilities_in_katalon/Design-Capabilities-for-Mobile-in-Katalon-Studio.png)

*   In project settings, select **Execution** \> **Default** \> **Mobile** \> **Android**

![Desired Capabilities for Mobile](../../images/katalon-studio/tutorials/desired_capabilities_in_katalon/Design-Capabilities-for-Mobile-in-Katalon-Studio-2.png)

*   After clicking on Android, it will display a screen with a dropdown with **Device Name** and **Add**, **Delete**, **Clear** buttons. Steps to **add** a property for execution are as following:
*   Click **Add** button of command toolbar above the **Desired Capabilities** list.

![Desired Capabilities for Mobile](../../images/katalon-studio/tutorials/desired_capabilities_in_katalon/Design-Capabilities-for-Mobile-in-Katalon-Studio-3.png)

*   A new row will be added to the list.

![Desired Capabilities for Mobile](../../images/katalon-studio/tutorials/desired_capabilities_in_katalon/Design-Capabilities-for-Mobile-in-Katalon-Studio-4.png)

*   Provide the name of the property that you'd like to configure, do the same for **Type** and **Value**.

Example 1
---------

The example below shows the desired capabilities settings for Android to enable Unicode input.

![Desired Capabilities for Mobile](../../images/katalon-studio/tutorials/desired_capabilities_in_katalon/Design-Capabilities-for-Mobile-in-Katalon-Studio-5.png)

Example 2
---------

The example below shows the desired capabilities settings for Android to enable device orientation.

![Desired Capabilities for Mobile](../../images/katalon-studio/tutorials/desired_capabilities_in_katalon/Design-Capabilities-for-Mobile-in-Katalon-Studio-6.png)

Example 3
---------

The example below shows the desired capabilities settings for Android to enable screenshot path.

![Design Capabilities for Mobile](../../images/katalon-studio/tutorials/desired_capabilities_in_katalon/Design-Capabilities-for-Mobile-in-Katalon-Studio-7.png)

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Execution Settings](/display/KD/Execution+Settings) guideline and join us on [Katalon Forum](http://forum.katalon.com/).