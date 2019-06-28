---
title: "View Execution Log"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/view-execution-log.html
redirect_from:
    - "/display/KD/View+Execution+Log/"
    - "/display/KD/View%20Execution%20Log/"
    - "/x/6ANO/"
    - "/katalon-studio/docs/view-execution-log/"
    - "/katalon-studio/tutorials/viewing_execution_logs.html"
description:
---
Once your test cases/test suites finish execution, you can review the results on the **Log Viewer** views.

![](../../images/katalon-studio/docs/view-execution-log/image2017-6-30-213A253A13.png)

Using the filter options, you can specify what type of logs to be displayed:

| Filter | Description |
| --- | --- |
| All | Show all the log messages. |
| Info | Show only the log messages for information/reference. |
| Passed | Show only the log messages indicating that a step is successfully executed. |
| Failed | Show only the log messages indicating that a test step is failed to execute. |
| Error | Show only the log messages indicating that some error has occurred at a given step. |
| Warning | Show only the log messages indicating that a test step is failed but accepted as warning. |
| Not Run | Show only the log messages indicating that a test step is skipped. |

Tabular view vs. Tree View
---------------------------

The **Log Viewer** can be viewed in different modes: **tabular** view and **tree** view. You can switch to tree view by selecting the **Tree View** toggle as illustrated below:

![](../../images/katalon-studio/docs/view-execution-log/image2017-6-30-213A263A35.png)

The **Tree View** display logs in a structural way that relates to how the test case/test suite organized. Additionally, users can now navigate to the respective step by selecting from the context menu as showed below:

![](../../images/katalon-studio/docs/view-execution-log/image2017-6-23-153A553A57.png)

Scroll Lock
-----------

While the test is being executed, the **Log Viewer** will be updated with real-time log messages, where the most recent log message is shown at the bottom of the view. Therefore, the **Log Viewer** is kept scrolling down during the test execution. However, users may want to keep the **Log Viewer** standing still so that they can verify certain log message. In order to stop this scrolling behavior, you can select **Scroll Lock**.

![](../../images/katalon-studio/docs/view-execution-log/image2017-6-30-213A273A35.png)