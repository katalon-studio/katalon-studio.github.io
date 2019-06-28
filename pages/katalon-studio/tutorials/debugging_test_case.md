---
title: "Debugging test case"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/debugging_test_case.html
redirect_from:
    - "/display/KD/Debug+Automation+Test/"
    - "/display/KD/Debug%20Automation%20Test/"
    - "/x/C4Ew/"
    - "/katalon-studio/docs/debug-automation-test/"
    - "/katalon-studio/docs/debug-automation-test.html"
    - "/katalon-studio/tutorials/debugging_test_case.html"
description: "The debugging mode makes debugging easy to use, allowing users to quickly investigate the issues that cause failure for their automation tests."
---
Katalon Studio provides users with the capability for debugging test scripts. Its Debug mode is designed to make debugging easy to use, allowing users to quickly investigate the issues that cause failure for their automation tests.

The following presents the basic steps to debug a test case:

1\. Open a test case and switch to the **Script** view.
![Script view Katalon Studio](../../images/katalon-studio/tutorials/debugging_test_case/Script-view.png)

2\. Double click on the left-most side of the script editor to mark a **breakpoint** for the step you want to start debugging from.
![mark a breakpoint for the step](../../images/katalon-studio/tutorials/debugging_test_case/mark-a-breakpoint.png)

3\. Choose the browser for **Debug** from the main toolbar.
![Choose the browser for Debugging test case](../../images/katalon-studio/tutorials/debugging_test_case/the-browser.png)

4\. Confirm (select **Yes**) when asked to show the **Debug** perspective.
![the Debug perspective.](../../images/katalon-studio/tutorials/debugging_test_case/Debug-perspective.png)

5\. The **Debug** perspective provides users with helpful options for the debugging purpose. Users can:

**Navigate execution using commands from the debug toolbar.**
![debug toolbar](../../images/katalon-studio/tutorials/debugging_test_case/Navigate-execution.png)

Where:

| Command | Description |
| --- | --- |
|  ![](../../images/katalon-studio/tutorials/debugging_test_case/Resume-debugging.png) | Resume debugging |
|  ![](../../images/katalon-studio/tutorials/debugging_test_case/Suspend-debugging.png) | Suspend debugging |
|  ![](../../images/katalon-studio/tutorials/debugging_test_case/Terminate-debugging.png) | Terminate debugging |
|  ![](../../images/katalon-studio/tutorials/debugging_test_case/Disconnect.png) | Disconnect |
|  ![](../../images/katalon-studio/tutorials/debugging_test_case/Step-into-current-code-block.png) | Step into current code block |
|  ![](../../images/katalon-studio/tutorials/debugging_test_case/Step-over-current-code-block.png) | Step over current code block |
|  ![](../../images/katalon-studio/tutorials/debugging_test_case/Return-from-current-code-block.png) | Return from current code block |
|  ![](../../images/katalon-studio/tutorials/debugging_test_case/Run-to-specific-line.png) | Run to specific line |

**Track values of variables using Watch utilities.**
![Watch utilities](../../images/katalon-studio/tutorials/debugging_test_case/Watch-utilities.png)Where:

| View | Description |
| --- | --- |
| Variables | You can view all variables associated with the current debugged action using Variables View. This is similar to Variables View in Eclipse. Refer to this [guide](http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fviews%2Fexpressions%2Fref-expressions_view.htm) for more details. |
| Breakpoints | You can view all breakpoints using Breakpoints View. This is similar to Breakpoints View in Eclipse. Refer to this [guide](http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fviews%2Fexpressions%2Fref-expressions_view.htm) for more details. |
| Expressions | You can inspect data using Expressions View. This is similar to Expressions View in Eclipse. Refer to this [guide](http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fviews%2Fexpressions%2Fref-expressions_view.htm) for more details. |

6\. Stop execution when you complete debugging.
Although the debugging mode in Katalon Studio is very similar to that of the popular Eclipse IDE, we manage to retain just enough function to keep the UI clean while providing users with all required options to investigate issues when needed. If you have any suggestion or need any support, please send your request [here](https://www.katalon.com/#submit-ticket).