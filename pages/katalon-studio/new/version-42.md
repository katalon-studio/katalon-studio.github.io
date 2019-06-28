---
title: "Version 4.2"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-42.html
redirect_from:
    - "/display/KD/Version+4.2/"
    - "/display/KD/Version%204.2/"
    - "/x/rYIw/"
    - "/katalon-studio/new/version-42/"
description:
---
New Features
------------

### JIRA Integration

Bugs can be submitted directly fromKatalonStudio failed test results using embedded native JIRA interface. Teststeps,captured screenshots and logs will be attached automatically to the JIRA ticket. Failed execution results can also be created as sub-task or associated with an existing JIRA ID. Ticket status' synced back toKatalonStudio providing necessary information for validation.  

![](../../images/katalon-studio/new/version-42/image2016-11-1-183A93A57.png)

### Undo Actions

Support Undo/Redo actions (within 20 steps) for following objects:

1.  Global Variables
2.  Test Case
3.  Test Data
4.  Checkpoint

![](../../images/katalon-studio/new/version-42/image2016-11-1-183A103A53.png)


### Headless execution

This new option is available for web automation execution without launching the browser interface which increases execution performance and time.

![](../../images/katalon-studio/new/version-42/image2016-11-2-163A113A37.png)

> The following keywords are not supported with headless execution
>
> <table><thead><tr><th>Keyword</th><th>Known Issues</th><th>Impact</th></tr></thead><tbody><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Accept+Alert" rel="nofollow">Accept Alert</a></td><td><p>Alert is not recognizable in headless execution</p><p>(<a class="external-link" href="https://github.com/MachinePublishers/jBrowserDriver/issues/147" rel="nofollow">https://github.com/MachinePublishers/jBrowserDriver/issues/147</a>)</p></td><td>Alert keywords can't be used for verification</td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Dismiss+Alert" rel="nofollow">Dismiss Alert</a></td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Get+Alert+Text" rel="nofollow">Get Alert Text</a></td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Set+Alert+Text" rel="nofollow">Set Alert Text</a></td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Verify+Alert+Not+Present" rel="nofollow">Verify Alert Not Present</a></td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Verify+Alert+Present" rel="nofollow">Verify Alert Present</a></td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Wait+For+Alert" rel="nofollow">Wait For Alert</a></td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Select+Option+By+Value" rel="nofollow">Select Option By Value</a></td><td><p>Wrong option is selected</p><p>(<a class="external-link" href="https://github.com/MachinePublishers/jBrowserDriver/issues/148" rel="nofollow">https://github.com/MachinePublishers/jBrowserDriver/issues/148</a>)</p></td><td>Options could not be selected as expected</td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Select+Option+By+Label" rel="nofollow">Select Option By Label</a></td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Select+All+Option" rel="nofollow">Select All Options</a></td></tr><tr><td><a class="external-link" href="http://docs.katalon.com/display/KD/%5BWebUI%5D+Select+Option+By+Index" rel="nofollow">Select Option By Index</a></td></tr></tbody></table>

Improvements
------------

### General

1.  Address keywords incompatible issues with Firefox 47+ (as mentioned in [Version 3.5](/display/KD/Version+3.5)).
2.  Update ChromeDriver's version to 2.25 to resolve execution issue with Chrome 54.
3.  Fix compatible issue with macOS 10 Sierra. 
4.  Several minor UX enhancements and bug fixes. 



### Test Project

1.  Include 'JRE' settings on Preferences. Users can change to other JRE version if needed.
    ![](../../images/katalon-studio/new/version-42/image2016-11-1-183A153A42.png)
2.  Add option in context menu of editors (Test Case, Test Suite, Test Suite Collection) to quickly navigate to selected test artifacts.
    ![](../../images/katalon-studio/new/version-42/image2016-11-1-183A193A24.png)



### Test Case

1.  Support defining [closure](http://groovy-lang.org/closures.html) syntax of Groovy in test case's manual.
    ![](../../images/katalon-studio/new/version-42/image2016-11-1-183A243A9.png)


2.   Links to Javadoc for keywords in manual editing mode. 
    ![](../../images/katalon-studio/new/version-42/image2016-11-1-183A243A45.png)


3.  Support drag and drop test objects to 'Object' field of test case
    ![](../../images/katalon-studio/new/version-42/image2016-11-4-143A233A23.png)



### Test Suite Collection

1.  Add 'Run Configuration' column to setup required information for the following execution modes:

    1.  Android
    2.  iOS
    3.  Remote Web Server

    ![](../../images/katalon-studio/new/version-42/image2016-11-1-183A323A35.png)


2.  Add 'Custom' configuration list on 'Select Environment' dialog to execute using defined custom configuration.
    ![](../../images/katalon-studio/new/version-42/image2016-11-1-183A343A38.png)


3.  Support drag and drop Test Suite to Test Suite Collection
    ![](../../images/katalon-studio/new/version-42/image2016-11-1-183A363A24.png)

Known Issues
------------

> Appium 1.6 is not supported. Besides of that, Appium has problem running tests on the latest iOS as reported at: 
>
> [https://github.com/appium/appium/issues/6857](https://github.com/appium/appium/issues/6857).
>
> This problem also affects Katalon Studio execution function on the latest iOS devices. We are working on this limitation. Meanwhile, we recommend users to use Katalon Studio on the previous version of iOS and not use Appium 1.6 for execution