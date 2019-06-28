---
title: "Version 5.9.0"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-590.html
redirect_from:
    - "/katalon-studio/new/version-590/"

description: Release notes v5.9.0
---
Introducing Script View for [Execution Profiles](../../katalon-studio/docs/execution-profile-v54.html) and [Variables](../../katalon-studio/docs/variable-types.html)
-------------------
The Script View is provided with an XML editor to allow you to reuse and sync any set of variables easily, whether in Execution Profiles or in the Test Case. Just a few simple actions and the tests can be run with different data for cross-environment testing. 

![](../../images/katalon-studio/new/version-59/profile-script.png)


[Enhanced Console and Log Viewer](../../katalon-studio/docs/working-with-execution-log.html)
--------------------
Debugging becomes easier in Katalon Studio 5.9. We've optimized the execution logs to give you comprehensive views of what happens during your test automation. The following changes are applied to both Console and Log Viewer:

- Make default font size smaller for code and logs (based on Eclipse settings)
- Remove JSON logs
- Simplify log messages
- Simplify the tree viewer

### New Status Bar in Log Viewer (FKA Progress Bar)
Instantly know your test execution status with the New Status Bar in Log Viewer. The Status Bar has two color: GREEN and RED to indicate the test run PASSED or FAILED/ERROR status respectively. 


### Added Log properties file to custom log levels
Sometimes more details execution log is needed to troubleshoot runtime issues. A log properties file is added to _Include_ folder in Tests Explorer allowing you to adjust the logging levels of Katalon Studio. There are DEBUGGING level and TRACE level. Debugging level will be set by default. TRACE level is the lowest log level and will display the most details log information.

![](../../images/katalon-studio/new/version-59/log-properties.png)


### Added HAR file to Web Service request Console Log
In version 5.9, Katalon Studio provides HAR file in the Console Log of APIs/Web Service request. The HAR file contains low-level data to quickly help you identify the key performance problems with Web services. Therefore, the project team can allocate development resource efficiently. Data in HAR file is stored in JSON format.

![](../../images/katalon-studio/docs/working-with-execution-log/har-log.png)


Katalon Studio GUI for Linux
---------------------
> Tested for Ubuntu OS.

Katalon Studio GUI for Linux is available. There are now two options for running test in Linux environment: Console Mode or GUI. The GUI interface helps users with limited Linux experience to easily use Katalon Studio with instant respond; while those who have more Linux experience can still leverage the CMD execution.



Bugs Fixed & Improvements
-----------------------
*   Enhanced Tests Explorer to automatically sort test artifacts alphabetically
*   Added back the ability to add duplicated Testcase into Testsuite
*   Added Action Menu which contains common actions for quick access
*   Added hotkey for Execution & Debug function
*   Added API/Web Service option to Run/Debug drop-down menu
*   Added Custom capabilities option to Spy and Record Utility
*   Fixed a minor issue where template snippets disappear at Groovy template after restarting Katalon Studio
*   Fixed a minor bug where 'Request History' panel is not displayed when Reset Perspective
*   Fixed an issue where custom execution doesn't save after selecting Android devices
*   Fixed an issue of Test Suite execution Log could not be retrieved when executing in Test Suite Collection
*   Fixed an issue where APIs request is sending extra parameter in the request to the server
*   Error message shows when closing Katalon Studio
*   Fixed 'Unable to resolve class internal.GlobalVariable' error is displayed in console mode execution
*   Solved 'Run Configuration 'Web Service' not found' error is displayed when users generate console mode command for Web Services project
*   Adjusted WebUiCommonHelper.findWebElements() to no longer returns an empty list when element(s) not in the DOM
