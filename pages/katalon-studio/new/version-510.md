---
title: "Version 5.10"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-510.html
redirect_from:
    - "/katalon-studio/new/version-510/"



description: Release notes v5.10
---

### Real-time monitoring Katalon Studio Test Execution
via _Katalon Analytics Dashboard_ to get the latest status of the test run results for immediate action. With Katalon Analytics, the project team can make informed decisions about testing and quality based on metrics and visualization of centralized test execution data. [Learn more…](https://analytics.katalon.com/)

![](../../images/katalon-studio/new/version-510/KAintegration.png)


### Adding Test Case instantly to Test Suite
via **&ldquo;Add to Test Suite&rdquo;** button in Test Case details view. There are two options available: &ldquo;Add to existing Test Suite&rdquo; and &ldquo;Add to a New Test Suite&rdquo;.

![](../../images/katalon-studio/new/version-510/addTS.png)


### Support Skip Test Case method in Test Listener**
to help skip running any undesired Test Cases. Sometimes the project team needs to run only a few &ldquo;hotspot&rdquo; test cases that are flaky during regression test and want to save effort and resources at the same time. It is now possible in Katalon Studio v5.10. In Test Listener, simply call skipThisTestCase() method to skip any Test Case that satisfied the condition. Skipped Test Case will have the status as **SKIPPED** in test execution result 

![](../../images/katalon-studio/new/version-510/skipTestCase.png)  


### Override Profile Variables via Command line Execution Mode
is possible since Katalon Studio v5.10. Simply pass the parameters in command line using: -g_XXX = XXX
Below is example of override an URL variabe:
```
-g_URL=http://demoaut.katalon.com
```


### Support Custom API Methods
to expand Katalon Studio Web Service Testing capability to handle custom design APIs on top of the default set of supported methods. Custom APIs can be added in _Project Settings > Test Design > API/Web Service Method_.

![](../../images/katalon-studio/new/version-510/custAPI.png)


_Bugs Fixed & Improvements_
-----------------------
*   Fixed an issue where test case cannot get variable from Input variable parameters
*   Fixed an issue where parameterized URL of web service object cannot be parsed
*   Adjusted minor logics to detect test object when XPath expression is NULL
