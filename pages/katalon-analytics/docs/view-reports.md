---
title: "View Reports"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/view-reports.html
redirect_from:
    - "/display/KA/View+Reports/"
    - "/display/KA/View%20Reports/"
    - "/x/2RxO/"
    - "/katalon-analytics/docs/view-reports/"
    - "/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics.html"
description:
---
Once Test Reports are uploaded, Katalon Analytics will automatically analyze Katalon Studio test execution data to give you meaningful visualizations including charts, graphs, and filters. Katalon Analytics powerful dashboard allows users to have richer looks at test execution by presenting various reports such as Status, Performance, Execution Summary, and Execution Details. 

![Automatically Upload Report](../../images/katalon-analytics/docs/view-reports/upload-execution-step-3-dc08b5a5ba.png)

<table>
    <tbody>
        <tr>
            <td>Status</td>
            <td>
                <p>The status of uploaded Katalon Test Execution. Users can view</p>
                <ul>
                    <li>Number of test cases</li>
                    <li>Number of execution</li>
                    <li>Status of test cases: Passed, Failed, Error, Incomplete. To filter the status of test cases, simply click on the status you don't want to view to remove it from the graph</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Performance</td>
            <td>An overview of test executions' durations&nbsp;</td>
        </tr>
        <tr>
            <td>Execution</td>
            <td>
                <p>Summary of Katalon Test Report</p>
                <p>ID: The number of executions in the project</p>
                <p>Status: The status of each report (Passed, Failed, Error, Incomplete). Users can <strong>filter </strong>the status of the report to view only preferred status. Click on the drop-down menu of Status. Select the status</p>
                <p>Started: Time and Date the test was run</p>
                <p>Duration: The time that test took to finished</p>
                <p>Total: The total number of test cases in one execution</p>
                <p>Passed/Failed/Error/Incomplete: Status of TC and number of TC within an execution</p>
            </td>
        </tr>
    </tbody>
</table>

View Execution Detail Report
----------------------------

> Filter and Sort
>
> While viewing execution detail report, The user can also utilize Katalon Analytics[ Filter and Sort ](/x/ZgTR)feature to identify the problem areas.

Click on the **ID** of Execution to view the detail report. Katalon Analytics will display following details about that report including** Summary**, **All Failed Tests**, **Folders**, **All Tests**

**![](../../images/katalon-analytics/docs/view-reports/Execution-11-Katalon-Analytics.png)
**

### Summary Dashboard

Katalon Analytics will show a **pie chart** to represent the number of each Test Cases status (Passed, Failed, Error, Incomplete) with the execution summary information.

### All Failed Tests Table

Allows users to quickly view **all** test cases that have the status of **Failed**. The testing team will be able to locate quickly where exactly the test has failed.

| Field | Description |
| --- | --- |
| **ID** | This ID is a global ID of Analytic tools |
| **Name** | Name of test case |
| **Folder** | Containing folder of test case in Katalon Studio |
| **Started** | Time and Date of test case |
| **Duration** | The amount of time took to run the test case |
| **Status** | The status (Passed, Failed, Error, Incomplete) of the test case. Users can **filter** the status to see only preferred status |
| **Age** | Show the number of times this test case has the **same** status **consecutively**. (e.g. Status: Failed, Age: 5 → This test case has failed 5 times consecutively) |
| **Flakiness** | The reliability of test case after numbers of run |

### Test Suites Table

Katalon Analytics display all test suites in the current viewing execution in the report. To view detail, click on the **ID** of Test Suite. Katalon Analytics will display in-depth look about the Test Suite.

| Field | Description |
| --- | --- |
| **ID** | Generated Analytic global ID |
| **OS** | Operating System was run on |
| **Browser** | Selected browser the test was run on |
| **Status** | The status of a test suite. Users can **filter** status to see only the preferred status of test suite |
| **Total** | The total number of test cases in this test suite |
| **Failed/Passed/Error/Incomplete** | The total number test case of each status is displayed as well |

### Folder Table

Katalon Analytics' Folder represents how test cases were organized and grouped in Katalon Studio. It has the same structure of test cases as in Katalon Studio _Tests Explorer_

### All Tests Table

List of all executed test cases in the current viewing execution. To view detail, click on the **ID** of the preferred test case. Katalon Analytics will display details dashboard about that test case.

View Detail Test Case
---------------------

To **view detail** of a failed test case, click on the **ID**. Once clicked on **ID**, Katalon Analytics will display in-depth views about the test case. Users will able to view

<table>
    <tbody>
        <tr>
            <td><strong>Test case path</strong></td>
            <td>The location path of test case in Katalon Studio</td>
        </tr>
        <tr>
            <td><strong>Result</strong></td>
            <td>
                <p>Status</p>
                <p>Platform</p>
                <p>Test Suite in Katalon Studio</p>
                <p>Started</p>
                <p>Duration</p>
                <p>Flakiness</p>
                <p>Age</p>
                <p>Same Failure</p>
                <p>Attachment – error logs or reports file from Katalon Studio</p>
            </td>
        </tr>
        <tr>
            <td><strong>Errors</strong></td>
            <td>Users can quickly navigate to the error in the log of execution. Extracted from Katalon Studio execution log.</td>
        </tr>
        <tr>
            <td><strong>Console log</strong></td>
            <td>Katalon Studio execution log&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td>
        </tr>
    </tbody>
</table>

### View Test Case Executions History Dashboard

Click on **View History** button, users can also view all the iteration execution of a single test case. 

![](../../images/katalon-analytics/docs/view-reports/image2018-6-19-143A333A0.png)

| Performance | The performance of test case through iteration run. The duration of each iteration also shown |
| --- | --- |
| **History** | The list of the number of iteration in a test case. To view detail, click on the **ID** of iteration (This is Katalon Analytics **global ID**) |