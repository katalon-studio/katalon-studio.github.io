---
title: "Test Suite Report"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-suite-report.html
redirect_from:
    - "/display/KD/Test+Suite+Report/"
    - "/display/KD/Test%20Suite%20Report/"
    - "/x/v4IY/"
    - "/katalon-studio/docs/test-suite-report/"
    - "/display/KD/Test+Report/"
    - "/katalon-studio/tutorials/viewing_test_suite_reports.html"
description:
---
Once a test suite finishes its execution, a historical report will be automatically generated and stored in Reports. 

For example:

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24-193A13A55.png)

The report will be named with following the naming convention: _YYYYMMDD_HHmmss_, which is the datetime when the test suite starts its execution.

Report Overview
---------------

In **Test Explorer** view, double-click on a historical execution of a test suite to view its details:
![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24-203A273A2.png)
where:

<table><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td>Test Cases Table</td><td>List of executed test cases.</td></tr><tr><td>Summary</td><td>Summary information of executed environment.</td></tr><tr><td>Execution Settings</td><td><p>Settings of executed browsers/devices. For example:</p><p><img src="../../images/katalon-studio/docs/test-suite-report/image2017-2-24-193A403A50.png"></p></td></tr><tr><td>Execution Environment</td><td><p>Other information about the executed system. For example:</p><p><img src="../../images/katalon-studio/docs/test-suite-report/image2017-2-24-193A423A41.png"></p></td></tr></tbody></table>

Test Cases List
---------------

*   The summary information of all executed iterations done in the test suite is displayed here. Each time when a test case is executed with a test data row is considered an **iteration**.
    ![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24-193A153A33.png)
*   Users can easily determine which type of information to be displayed by using the provided filters:

    | Filter | Description |
    | --- | --- |
    | Passed | Show only iterations which are passed. |
    | Failed | Show only iterations which are failed. |
    | Error | Show only iterations having errors. |
    | Incomplete | Show only incomplete iterations |

*   By selecting an **iteration** in **Test Case Table** and click **Show Test Case Details**, you can view details regarding its executed logs.
*   If **qTest** and **JIRA** are configured in project settings, you can submit data to those systems. Refer to [Enable qTest Integration](/display/KD/Enable+qTest+Integration) and [Configure JIRA Integration](/display/KD/Configure+JIRA+Integration) for more details.

Test Suite Summary
------------------

This section gives the summary information of the test suite:

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24-193A293A56.png)

where:

| Field | Description |
| --- | --- |
| Test Suite ID | The ID of the executed test suite in Katalon Studio. |
| Hostname / OS / Platform | The environment where the test suite was executed |
| Start / End / Elapse | Execution start/end date time and duration |
| Total TC | Total number of test cases, along with their executed status. |

Test Logs Details
-----------------

This section shows all information regarding the iteration selected in the **Test Cases Table** section.

### Test Log Tab

*   Details regarding all the executed steps and their status are displayed in this tab. 
    ![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24-203A293A56.png)
    where:

    <table><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td>Log Information</td><td>Information of the test step selected in the <strong>Test Case's Log</strong> section:<ul><li>The <strong>Name</strong> of the test step (the name of the keyword used in the test step)</li><li>Execution <strong>Start/End</strong> date time and duration</li><li>The <strong>Description</strong> of the test step</li><li>Any system <strong>Message</strong> raised when the test step was executed</li></ul></td></tr><tr><td>Log Image</td><td><p>The screenshot taken from the application under test, it is captured in either of following situations:</p><ul><li>An error occurs during test execution</li><li>The <a class="external-link" href="/display/KD/%5BWebUI%5D+Take+Screenshot" rel="nofollow">Take Screenshot</a> keyword is used</li></ul></td></tr></tbody></table>

*   Users can easily determine which type of information to be displayed by using the provided filters:

    | Filter | Description |
    | --- | --- |
    | Info | Show the messages logged for information/reference. |
    | Passed | Show the steps which are successfully executed. |
    | Failed | Show the steps which are failed to execute. |
    | Error | Show the steps having errors. |
    | Incomplete | Show incomplete steps due to other factors such as wrong syntax, power shortage, disconnected network, etc... |
    | Warning | Show the steps which have warning status. |
    | Not Run | Show the skipped steps. |

*   If **JIRA** is configured in project settings, you can submit a ticket to this system. Refer to [Configure JIRA Integration](/display/KD/Configure+JIRA+Integration) for more details.
*   Screenshots are taken for the failed steps and you can hover the mouse cursor over the attachment icon to review. 

### Information Tab

Users can find the summary information of the test case in this tab.

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24-203A43A11.png)

where:

| Field | Description |
| --- | --- |
| Test Case ID | The ID of the executed test case in Katalon Studio. |
| Start / End / Elapse | Execution start/end date time and duration. |
| Description | The description of the test case. |
| Message | Any system message raised when this **iteration** was executed. |

### Integration Tab

The information regarding qTest Integration of this iteration is displayed in this tab.

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24-203A153A4.png)

where:

| Field | Description |
| --- | --- |
| Test Log ID | The ID of the integrated qTest **Test Run**. |
| Test Run Alias | The alias of the integrated qTest **Test Run**. |
| Attachment | Indicate whether all the execution log and report are placed in a zipped file which is sent to qTest as an attachment. |

Export to other formats
-----------------------

Since Katalon Studio 6.1.5, please install [Basic Report](https://store.katalon.com/product/59/Basic-Report) plugin to use this feature.

<details><summary>Deprecated Content</summary>

For the purpose of sharing, users can generate reports of test suites into other formats such as **HTML**, **CSV**, **PDF** and **JUnit** using the context menu in Test Explorer as example below: 
![](../../images/katalon-studio/docs/test-suite-report/image2017-6-23-163A23A2.png)

</details>
