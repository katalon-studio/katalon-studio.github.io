---
title: "Version 4.1"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-41.html
redirect_from:
    - "/display/KD/Version+4.1/"
    - "/display/KD/Version%204.1/"
    - "/x/HoEr/"
    - "/katalon-studio/new/version-41/"
description:
---
New Features
------------

### Kobiton Integration

Katalon Studio now provides Kobiton users with option to leverage their devices in Kobiton Favorited List for mobile execution. Kobiton is a clould based service for mobile testing. You can register new account for free [here](https://portal-test.kobiton.com/login).

![](../../images/katalon-studio/new/version-41/image2016-10-3-153A483A30.png)

### New Version Notification

Users will be informed about any **new version** when opening Katalon Studio. You can change this notification settings in **Settings -> Preferences -> Katalon.**

![](../../images/katalon-studio/new/version-41/image2016-10-3-153A393A56.png)

Improvements
------------

### General

1.  Replace test artifacts and toolbar icons.

    ![](../../images/katalon-studio/new/version-41/image2016-10-3-153A553A41.png)


2.  Update Dialog icons.

    | Infomation |  |
    | --- | --- |
    | Error | ![](../../images/katalon-studio/new/version-41/image2016-10-3-153A593A52.png) |
    | Warning | ![](../../images/katalon-studio/new/version-41/image2016-10-3-163A03A53.png) |

3.  Rename 'Mobile Object Inspector' into 'Mobile Object Spy' Dialog
    ![](../../images/katalon-studio/new/version-41/image2016-10-3-113A353A10.png)


4.  Auto wraps text in 'Message' field of Log Viewer under Tree View
    ![](../../images/katalon-studio/new/version-41/image2016-10-3-143A133A26.png)


5.  Automatically detect and install SafariDriver on macOS if it's not installed

### Console mode

1.  Allow user to input project folder path into -projectPath argument
2.  Add –email and –password in [Console Mode Execution](/display/KD/Console+Mode+Execution) for Katalon Studio activation
3.  'Generate Command Lines for Console Mode' will create appropriated command in macOS now.

### Test Case

1.  Add hotkey for context menu in test case's editor

*   Delete: Del
*   Copy: Ctrl-C
*   Cut: Ctrl-X
*   Paste: Ctrl-V
*   Disable: Ctrl-D
*   Enable: Ctrl-E

    ![](../../images/katalon-studio/new/version-41/image2016-10-3-123A403A8.png)

2\. Change default scripting font to be '**Courier New**' for both Windows and macOS

![](../../images/katalon-studio/new/version-41/image2016-10-2-163A453A23.png)

### Test Suite Collection

1.  Add context menu and hotkey for test suite collection

*   Add: Ctrl + N
*   Delete: Del
*   Move up: Ctrl + Up Arrow
*   Move down: Ctrl + Down Arrow
*   Execute: Ctrl + E
    ![](../../images/katalon-studio/new/version-41/image2016-10-3-123A403A34.png)

    2\. Display warning message when executing an empty Test Suite Collection

    ![](../../images/katalon-studio/new/version-41/image2016-10-3-173A83A45.png)

    3\. Support option for parallel execution in test suite collection. Default option for execution settings will be 'Sequential' where Test Suites will be run in order.

    ![](../../images/katalon-studio/new/version-41/image2016-10-3-143A143A23.png)

### Record/Spy

1.  Automatically select all captured objects in 'Add Element to Object Repository' dialog

    ![](../../images/katalon-studio/new/version-41/image2016-10-3-133A133A38.png)


2.  Display details regarding XPath of focused elements when recording Test Case

    ![](../../images/katalon-studio/new/version-41/image2016-10-3-123A423A55.png)

Customer Support
----------------

1.  \[macOS\] Texts are cut off in menu tree in Preferences and Project Settings
2.  \[macOS\] Fix blurry icons and intro images on Retina display
3.  Fix NullPointerException in qTest integration