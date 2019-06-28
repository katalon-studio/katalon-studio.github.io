---
title: "Execution Profile (v5.4+)"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execution-profile-v54.html
redirect_from:
    - "/x/xAHR/"
    - "/katalon-studio/docs/execution-profile-v54/"
description:
---
> Available since Katalon Studio v5.4!
>
> Since Katalon Studio v5.9, Execution Profile is enhanced with a Scripting Editor.

Katalon Studio v5.4 introduces another flexible way to extend your current automation test scripts to cover multiple and different environments with ease. We call it **Execution Profile**. You can find below the changes related to this improvement:

*   The current [Global Variables](/display/KD/Variable+Types#VariableTypes-Globalvariables) list now become the **Default Profile**. There will be **NO** 'Global Variables' interface. You will need to create _Global Variables_ in the new **Execution Profile**. 
*   By **default**, Katalon Studio will use a **default profile** as indicated on the top right of Katalon Studio's interface. There is also a drop-down menu that allows you to select any available execution profile.
    

Execution Profile interfaces are provided with a Manual View and a Script View where an XML editor is available for adding variables via script. You can create as many profiles as you want to depend on the needs of the project. The Script View allows Profiles can be easily synced with each other when there is the same list of Global Variables required for testing different types of environment. Just copy and paste the variables list from one Profile to another.
![](../../images/katalon-studio/docs/execution-profile-v54/profile-script-view.png)

Just like any other test artifacts, you can quickly _create_, _rename_, _copy_, _cut_ **Execution Profile** directly from _Test Explorers_. 
![](../../images/katalon-studio/docs/execution-profile-v54/Untitled3.png)


There are many ways to use your profile. In the example below, there are 3 profiles: **local**, **staging**, **production** based on testing environments:

**For test cases/ test suites**: Select your desired profile from top right. After your profile is changed, **all Global Variables** within your current project will **use** these **values** 
![](../../images/katalon-studio/docs/execution-profile-v54/Untitled2.png)

**For Test Suite Collection**: Select your desired profile to be executed with your Test Suite on '**Profile**' column.
![](../../images/katalon-studio/docs/execution-profile-v54/4.png)

**For [Console Mode](/display/KD/Console+Mode+Execution) execution**: Select your desired profile on Profile field.
![](../../images/katalon-studio/docs/execution-profile-v54/5.png)

The generated command line will have '**executionProfile**' parameter so that you can change it manually, e.g

```groovy
katalon -noSplash  -runMode=console -consoleLog -projectPath="C:\Users\Admin\Katalon Studio\yourProject.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -executionProfile="local" -browserType="Chrome (headless)"

```
