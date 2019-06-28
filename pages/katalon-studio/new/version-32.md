---
title: "Version 3.2.0"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-320.html
redirect_from:
    - "/display/KD/Version+3.2.0/"
    - "/display/KD/Version%203.2.0/"
    - "/x/XoIY/"
    - "/katalon-studio/new/version-320/"
description:
---
Improvements
------------

### General

*   The Default Browser for execution will be displayed with an indication
    ![](../../images/katalon-studio/new/version-320/image2016-4-6-123A153A58.png)
*   Have options to let users open the previous working session when opening Katalon
    ![](../../images/katalon-studio/new/version-320/image2016-4-6-123A103A5.png)
*   Automatically generate destination project's folder in case it's not existed yet when creating new Katalon Projects
*   Support loading **.app** file on Mobile Object Spy (for iOS platform)
    ![](../../images/katalon-studio/new/version-320/image2016-4-6-123A293A14.png)
*   Automatically focus into first field of some UI components:
    *   In Global Variables, focus on Name field of Add/Edit Variable Dialogs
        ![](../../images/katalon-studio/new/version-320/image2016-4-6-123A143A15.png)
    *   In Variable tab of Test Case editor, focus on Name field when adding new Variables 
        ![](../../images/katalon-studio/new/version-320/image2016-4-6-123A143A47.png)

### Console mode

*   Allow users to generate command to run in console mode
    ![](../../images/katalon-studio/new/version-320/image2016-4-6-123A223A48.png)
*   Support the ability to auto send mail function parameters
*   Revamp argument processing for console mode: [Console Mode Execution](/display/KD/Console+Mode+Execution)

### Execution

*   \[Infrastructure\] Revamp execution engine
*   Change mechanism to support executing test script upon current active Chrome & Firefox browsers


### Report

*   Display 'Warning' filter in Katalon's generated report
    ![](../../images/katalon-studio/new/version-320/image2016-4-6-123A353A1.png)

### Object Spy

*   \[Mobile Object Spy\] Support "Object Name" field in MOI
    ![](../../images/katalon-studio/new/version-320/object_name.png)

### Test Case

*   Refactor getTestCaseBindingString method

### Record/Playback

*   \[Record\] Add tooltip for recorded actions
    ![](../../images/katalon-studio/new/version-320/image2016-4-6-123A383A25.png)

### qTest Integration

*   \[Console Mode\] 'qTest' logs will not be displayed if the test project has no integration with qTest

Fixed Bugs
----------

*   \[Mobile\] MOI gets "Not Response" when started without application file
*   \[MOI\] MOI got frozen when users select captured objects on the view
*   System can't execute test scripts if executed browser is Firefox 45.0.1
*   System can't record steps if recorded objects are refreshed
*   Error when 'Take Screenshot' keyword is used
*   \[Test Suite\] Can't execute test suite if selected platform's preferences value used machine's path
*   Correct default generated value to use proper value based on input's value type
*   Global Variable value is kept as original when users changed value in custom keyword script

Customer Requests
-----------------

*   \[Core Informatics\] Change default values for 'Send attachment' settings & memory size of katalon.ini file
*   \[Core Informatics\] Improve performance on 'select Option By ' keyword without using regular expression
*   \[Core Informatics\] Create HTMLTableData based on TestData to support reading HTML content-based file
*   \[Core Informatics\] Add new 'Warning' filter level in 'Log Viewer' panel