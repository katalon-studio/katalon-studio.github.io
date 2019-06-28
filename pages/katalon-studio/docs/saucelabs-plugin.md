---
title: "Sauce Labs Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/saucelabs-plugin.html 
description: Guide to use the plugin to integrate Katalon Studio with Sauce Labs.
---

## Sauce Labs for Web testing

### Create a Sauce Labs custom profile

Go to **Project** > **Settings**. Under the **Plugins** section in the left menu, you will see **Sauce Labs Integration** if the plugin has been installed. 

The form on the right allows you to enter your credentials, your desired Sauce Labs operating environments and systems. 

_Note:_
* API Key: use an API Key generated from Sauce Labs **User Settings**.
* Username: your username displayed in Sauce Labs.

Click  **Generate Sauce Labs Custom Profile** to finalize your profile. Now you can use the newly created profile to execute tests.

**It is important to keep in mind that the default custom profile will be named saucelabs_default. Additionally, only profiles with name saucelabs_customProfileName will be recognized as Sauce Labs profile.**

![](../../images/katalon-studio/docs/saucelabs-plugin/1-setting.png)

### Execute a test case with Sauce Labs profile

1. Open a test case

2. Click the Run button (Command + Shift + A)

3. Select Custom capabilities

4. Select your Sauce Labs profile

![](../../images/katalon-studio/docs/saucelabs-plugin/2-execute-test-case.png)

### Execute a test suite with Sauce Labs profile

![](../../images/katalon-studio/docs/saucelabs-plugin/3-execute-test-suite.png)

### Execute a test suite collection with Sauce Labs profile

![](../../images/katalon-studio/docs/saucelabs-plugin/4-execute-test-suite.png)

![](../../images/katalon-studio/docs/saucelabs-plugin/5-environment.png)


### On Sauce Labs Dashboard, under Automated Tests tab the following result is displayed

![](../../images/katalon-studio/docs/saucelabs-plugin/7-result.png)

![](../../images/katalon-studio/docs/saucelabs-plugin/6-result.png)

## Sauce Labs for Mobile testing and Hybrid application testing

The plug-in provides you with an intuitive user interface to create Sauce Labs custom profiles for Web Testing. However you can still manually add properties that will make it possible for mobile and hybrid application testing. The generated custom profiles will be available as below:

![](../../images/katalon-studio/docs/saucelabs-plugin/8-mobile-hybrid-testing.png)

You can access and add capabilities to your profile. You will need to add specific capabilities that follow [Sauce Labs's official document on mobile/hybrid application testing](https://wiki.saucelabs.com/display/DOCS/Examples+of+Test+Configuration+Options+for+Mobile+Native+Application+Tests).
