---
title: "Failure Handling" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/failure-handling.html 
redirect_from:
    - "/display/KD/Failure+Handling/"
    - "/display/KD/Failure%20Handling/"
    - "/x/qAAM/"
    - "/katalon-studio/docs/failure-handling/"
    - "/display/KD/Failure+handling/"
description: 
---
Failure handling settings allow users to decide whether Katalon Studio will continue running or not in case of errors occurs during execution.

Currently, Katalon Studio supports the following failure handling options:

<table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>Stop on Failure</td><td><p>Katalon Studio will stop execution should there be any error occurs.</p><p>The step with errors will have <strong>Failed</strong> status.</p></td></tr><tr><td>Continue on Failure</td><td><p>Katalon Studio will continue in spite of any error during its execution.</p><p>The step with errors will have <strong>Failed</strong> status.</p></td></tr><tr><td>Optional</td><td><p>Katalon Studio will continue in spite of any error during its execution.</p><p>&nbsp;The step with errors will have <strong>Warning</strong> status.</p></td></tr></tbody></table>

Default failure handling behavior
---------------------------------

Follow these steps to define the default behavior for failure handling to be applied across your project:

1.  From Katalon Studio menu, access **Project > Settings > Test Design > Test Case**.
    ![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/failure-handling/image2017-6-30-203A363A43.png)
2.  Select the preferred option for the default behavior of **Failure Handling**. Click **OK** when you're done.
    
    > The selected option will be applied to new test steps only. For the steps already existed in your test cases, their failure handling option will not be affected by this change. Thus, you may need to [update them manually](/display/KD/Failure+handling#Failurehandling-Overridefailurehandlingbehavior).
    

Override failure handling behavior
----------------------------------

You can override the default failure handling behavior for each test step manually in either **Manual view** or **Scripting view** of test case. 

### In Manual View

1.  Right click on the step that you want to change the failure handling behavior to trigger its context menu  
    ![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/failure-handling/image2017-8-18-153A133A36.png)  
      
    
2.  Select the preferred failure handling option and save your test case.  

### In Scripting View

For all built-in keywords in Katalon Studio, you can add _FailureHandling_ as the last parameter.When editing a keyword in Scripting mode, use any of these option to specify its behavior.

```groovy
FailureHandling.STOP_ON_FAILURE
FailureHandling.CONTINUE_ON_FAILURE
FailureHandling.OPTIONAL
```

For example:

![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/failure-handling/23.png)

Known Issue
----------------------------------

FailureHandling is currently not supported on all ***Wait*** keywords. When the parameter is used, the keyword is always run passed with log warning, instead of displaying error, failure or status.