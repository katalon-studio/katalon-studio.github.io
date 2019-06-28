---
title: "Customize Console Log"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/working-with-execution-log.html
redirect_from:
    - "/katalon-studio/docs/working-with-execution-log/"
description:
---
> Since version 5.9

Viewing execution log is the very first approach when troubleshooting automation test execution. The key information in the log can quickly help project teams pinpoint root causes of any issues. Katalon Studio execution logs are optimized to provide such information so that you can have a comprehensive view of the tests run.

## Execution Progress Debugger


Katalon Studio execution log displays full details of actions that are performed during the test run to help you debug better. The test log contains all relevant information about the test run. Full test step statements and desired capabilities information are also included. Log levels are ANSI color-coded for different kind of levels: INFO, DEBUG, WARING, ERROR for an easier view of the execution log, as shown in the screenshot below.

![](../../images/katalon-studio/docs/working-with-execution-log/new-log.png)


In Log Viewer, the Status Bar helps you quickly get the status of the recent tests run. When there are FAILED or ERROR tests from a current job, the status bar has the RED color to indicate such, and GREEN color for tests run with PASSED status. (For Windows only)

![](../../images/katalon-studio/docs/working-with-execution-log/new-status-bar.png)


## Extensive logs for Web Service testing


Sending and receiving Web Service can be a troublesome task due to many factors involved from both client’s and server’s sides.  Since version 5.9, Katalon Studio has included the HAR file in Web Service execution’s log. The HAR file contains low-level data to quickly help you identify the key performance problems with Web services.
Upon sending requests, a relative .har file will be recorded and made accessible from execution logs. The physical file is stored directly on the current executed machine.

![](../../images/katalon-studio/docs/working-with-execution-log/har-log.png)


If you execute Web Service Suites, these .har files are stored in the requests\main folder under the generated report folders.

![](../../images/katalon-studio/docs/working-with-execution-log/har-location.png)


Using the .har file in services analyzer such as https://toolbox.googleapps.com/apps/har_analyzer/  will provide quality insights about the Web Service request and response. This will help the project team quickly identify key issues and efficiently allocate resources to address the issue. Some issues that can be identified include:

- Performance issues: slow page load, timeout when performing a certain task, ...

- Page rendering issues: incorrect page format, missing information, ...


## Logs Configuration

The deepest level of logs called TRACE. Use TRACE level when you need more logs details than DEBUG level, which is used by default.
In case you want to change the log’s level of one or multiple packages, this setting is located and stored in Include > Config > log.properties file

![](../../images/katalon-studio/docs/working-with-execution-log/log-properties.png)


By uncommenting logging.level.com.kms=TRACE line, the differences are noticeable

**_Before_**
![](../../images/katalon-studio/docs/working-with-execution-log/before-trace.png)


**_After_**
![](../../images/katalon-studio/docs/working-with-execution-log/after-trace.png)


## Summary
- Katalon Studio execution logs are enhanced for better debugging process and observation of execution progress.

- Logs level can be configured directly from log.properties file.

- .har file is generated and stored in Web Service request logs. It can be used to analyze and troubleshoot performance or connection issues (if any).


