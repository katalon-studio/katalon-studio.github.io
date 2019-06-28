---
title: "Version 3.2.1"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-321.html
redirect_from:
    - "/display/KD/Version+3.2.1/"
    - "/display/KD/Version%203.2.1/"
    - "/x/RoMY/"
    - "/katalon-studio/new/version-321/"
description:
---
Improvements
------------

### General

*   Auto detect JRE library based on JAVA_HOME on MAC
*   Add 'Cancel' button to cancel delete action on references form
*   \[Settings\] Add option to allow users open test case's editor on script mode or manual mode by default
*   \[Settings\] Config option for wrapping text in Manual Mode
*   Display details warning messages with word wrapping format

### Mobility

*   Refactor mobility code
*   Fix 'openNotifications' and 'closeNotifications' keyword to work on specific MAC environment

### Test Case

*   Automatically allow editing the Keyword cell after adding new keyword
*   Improve code base for Test Case manual Mode
*   'Call test case' keyword can now return called test case as an object
*   Edit cell value using Single Click instead of Double Click
*   \[Script View\] Context Menu to apply Text Wrapping

Fixed Bugs
----------

*   \[Log Viewer\] Test Case's status is marked as PASSED in case of using setUp/tearDown method and import wrong library
*   \[Test Case\] 'Call Test Case' allow users to call current test case from object's form
*   Test case's manual grid disappeared when users call the current test case
*   Can't save edited Excel file in case Katalon's tab using it is active
*   \[Log Viewer\] Execution logs can't be displayed when users view logs from another job
*   Failed to select iOS .ipa file

Customer Requests
-----------------

*   \[CoreInformatics\]\[Test Case\]  - Javadoc displayed wrong function in case custom keywords contained params with default values
*   \[Core Informatics\] Support the ability to update browser's preferences directly in test script