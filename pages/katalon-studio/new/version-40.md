---
title: "Version 4.0.0"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-400.html
redirect_from:
    - "/display/KD/Version+4.0.0/"
    - "/display/KD/Version%204.0.0/"
    - "/x/CYMi/"
    - "/katalon-studio/new/version-400/"
description:
---
New Features
------------

### Product Activation

Katalon now requires users to activate the application before using it.

![](../../images/katalon-studio/new/version-400/image2016-9-7-173A543A17.png)

### Welcome Page

Add **'Welcome'** page which will be displayed everytime Katalon is started

![](../../images/katalon-studio/new/version-400/image2016-9-7-113A373A5.png)

### Function Introduction

Add **'Functions Introduction'** dialog which will be displayed first time after activation of Katalon

![](../../images/katalon-studio/new/version-400/image2016-9-7-113A383A13.png)

### Sample Projects

You now have the option to select testing type on **'New Project**' dialog. Project template with pre-defined test artifacts will be created based on which testing type you have chosen.

![](../../images/katalon-studio/new/version-400/image2016-8-28-103A63A4.png)![](../../images/katalon-studio/new/version-400/image2016-8-28-103A63A14.png)

### External Libraries settings

External Libraries can now be added to Katalon through **Project -> Settings -> External Libraries**

![](../../images/katalon-studio/new/version-400/image2016-8-28-93A503A44.png)

### GIT Integration

Katalon Studio now support [GIT Integration](/pages/viewpage.action?pageId=2261849)

![](../../images/katalon-studio/new/version-400/image2016-9-7-123A443A51.png)

### Checkpoint

Add new test artifact: [Checkpoint](/pages/viewpage.action?pageId=2261817)

![](../../images/katalon-studio/new/version-400/image2016-9-7-123A433A24.png)

Improvements
------------

### General

1.  Update ChromeDriver's version to 2.23
2.  Include JRE8 into Katalon's application. You don't need to setup Java environment anymore
3.  Improve performance when opening test case
4.  Add dialog message to warn users about NodeJS and Appium if they haven't set it up properly

### Test Explorers

Display test artifact's information when hovering mouse on it:

![](../../images/katalon-studio/new/version-400/image2016-9-7-203A503A5.png)

### Test Case

1.  Add **'Keyword Description'** link in Javadoc dialog. It will open [keyword's description](http://docs.katalon.com/display/KD/Keyword+Index) page with more details of how to use that keyword
    ![](../../images/katalon-studio/new/version-400/image2016-8-28-93A523A28.png)
2.  Reduce code complexity in scripting mode. 

### Settings

** 1. **Add option on 'Execution' settings to let Katalon terminate all running drivers after execution or not. Default option will be UNCHECKED

 ![](../../images/katalon-studio/new/version-400/image2016-9-7-203A533A29.png)

2. Add default page load timeout settings in **Projects > Settings > Execution > Default > Web UI**

![](../../images/katalon-studio/new/version-400/image2016-8-28-103A593A43.png)

### Record/Spy

1.  **'Add'** and **'Delete'** button is added on Record dialog
    ![](../../images/katalon-studio/new/version-400/image2016-8-28-93A553A52.png)


2.  **Improve Web Object Spy**
    1.  'HTML DOM' will not automatically loaded anymore.
    2.  Add hotkey **Ctrl + Alt + ~ **(default) to let you load DOM map upon pressing
    3.  Improve the display of spy's instruction
    4.  Xpath value is now displayed when you mouse hover on an object
        ![](../../images/katalon-studio/new/version-400/image2016-8-28-103A13A47.png)



### Mobile Object Spy

Improve 'Mobile Object Spy':

1.  1.  Objects from 'Object Repository' can now be added to 'Mobile Object Spy' through context menu: 'Add to Mobile Object Spy'. Upon adding, the object will be automatically inspected on current screen
        ![](../../images/katalon-studio/new/version-400/image2016-8-28-123A23A5.png)
    2.  Improve the display of 'Mobile Object Spy' form
    3.  'All Objects' panel is added to display all objects of current spied mobile application's screen
    4.  Selected objects from 'All Objects' panel will be automatically added to 'Captured Objects' panel
    5.  'Device View' form is now interactable. Click on an object in 'Device View' will highlight the object back to 'All Objects' panel
    6.  Captured objects and All objects will now have indication about object's status. 
        ![](../../images/katalon-studio/new/version-400/image2016-8-28-113A593A48.png)

Fixed Bugs
----------

*   \[Test Case\] Can't edit Object and Input value on manual mode when input value's type is not matched with current built-in keyword
*   \[Test Case\] 'Item' field is not highlighted with gray color as disabled step
*   \[Test Data\] After renaming an opening test data, its name on Tab pane is not changed
*   \[Test Project\] Tests Explorer tree is empty when restore Debug mode session
*   \[Keywords\] Fix execution logs of 'Select Option By Value' keyword
*   \[RunConfiguration\] Fix built-in  functions "getExecutionSource", "getExecutionSourceName", "getExecutionSourceId", "getExecutionSourceDescription" to not return null when executing test case
*   \[Test Explorers\] Test Suite Collection Reports are in ascending order in Test Explorer
*   \[Test Explorers\] Cannot copy & paste a test suite collection in a same directory
*   \[Test Execution\[Unable to execute test script using 'Remote' option
*   \[Test Execution\] Cannot execute test case using custom settings from Project -> Settings -> Execution -> Custom
*   \[Manual View\] NullPointerException when defining variable without value in Script mode
*   \[TS Collection\] Browser label and icon are overlapped when selecting browser
*   \[Mac OS\] Test case is automatically changed to display in Integration mode when users switch between 2 (or more) test cases
*   \[Manual View\] Test step description with quotation marks (" or ') or backslash (\\) is not displayed properly
*   User cannot Open/Rename/Copy/Cut/Paste/Delete/Refresh any test artifacts after open a test suite collection
*   \[Record\] Duplicate keywords in Validation Point and Synchronization Point list
*   \[Keywords\] KeywordUtil.markFailedAndStop step is displayed as FAILED step on report
*   \[Mac OS\] Black dialog while loading project
*   \[Mac OS\] Not focus on the keyword in Manual View
*   \[Web API\] Cannot use RESTful Request Parameter with POST method
*   \[Test Project\] Test object's tab is automatically closed when it's moved to another location
*   \[Object Spy\] Object spy is not working on Firefox 48+

Other Changes
-------------

Replace** <type>SCRIPT<type>** to **<type>SCRIPT_VARIABLE</type>** in test suite (.ts) file.