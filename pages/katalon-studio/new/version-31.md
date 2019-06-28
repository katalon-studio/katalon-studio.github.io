---
title: "Version 3.1"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-31.html
redirect_from:
    - "/display/KD/Version+3.1/"
    - "/display/KD/Version%203.1/"
    - "/x/aYEY/"
    - "/katalon-studio/new/version-31/"
description:
---
Improvements
------------

### General

*   Use natural naming convention for objects
*   Remember last opened session 
*   Automatically focus on first field in Search popup

### New built-in keywords

*   "verifyElementClickable"

### Execution

*   \[Console Mode\] - Support the option to '-retryFailedTestCases=<true, false>' 

### Object Spy

*   Improve 'Add Element to Object Repository' form 
*   Display relevant message when there is no searched result in 'HTML DOM' field

### Test Case

*   Display javadoc when user select a keyword in combo box in manual mode
*   Empty description is removed automatically when users switch to 'Script' view
*   Improve performance on test case's editor

### Record/Playback

*   Abilities to edit/remove action during Recording
*   Abilities to edit/remove captured objects during Recording

### qTest Integration

*   Add option to allow uploading test runs to latest approved test case's version of qTest

Fixed Bugs
----------

*   \[Test Suite\] System didn't allow users to save modified test suite in case different test suite's types are saved in test project
*   \[Test Project\] Users can create new folder under 'Reports' section
*   \[Log Viewer\] System didn't display correct test step's status counts in case teardown method is used
*   \[Console mode\] Auto disable dialog shown in case execution's status is different with passed
*   \[Test Case\] Users can't drag and drop a test step to replace FIRST test step
*   \[Test Case\] Object's value is displayed as null when users select defined variable as an object
*   \[Test Case\] Users can't edit fields on 'Input' form in case number value is left as blank value
*   \[Keyword\] Correct 'Take Screen Shot' keyword's name
*   \[Keyword\] Add Javadoc for 'Verify Match' keyword on manual mode and keywords browser form
*   \[Test Case\] System display error message when a test step is drag and dropped into blank areas
*   \[Test Suite\] 'Variable Binding' settings is reset to default binding when a new variable is defined for current test case
*   \[Test Execution\] Can't start execution on Firefox if Firefox profile settings are used
*   \[Test Case\] 'Modify Object Property' javadoc's keyword can't be displayed using combo box in manual mode
*   \[Test Project\] System displayed error message when drag and drop root folder to its location
*   \[Record/Playback\] System can't generate test steps in case element's field is blank for validation/sync action
*   \[Record/Playback\] Error message is displayed when 'property' value's type is selected on action without element

Customer Requests
-----------------

*   \[CoreInformatics\] Adjust qTest Integrate API to update to latest version
*   \[Care Logistics\] Investigate issue of crashed execution with lengthy suites