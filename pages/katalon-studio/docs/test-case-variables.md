---
title: "Test Case Variables"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-case-variables.html
description: Guidelines about test case variables and how to call the test case with variables
redirect_from:
    - "/katalon-studio/tutorials/data-driven-testing/"
    - "/katalon-studio/tutorials/data_driven_testing.html"
---
Instead of running test case with hard-coded values, you can run Test Case Variables in Katalon Studio to parameterize your test case or call that test case with different inputs.

Before you start, let’s take a look at the example of test case with hard-coded values:


```
String employee = 'John'
String department = 'Marketing'

println "${employee} - ${department}"
```



## Manage Test Case Variables

The following statement will be used as an example:


```
println "${employee} - ${department}"
```


In the **Variables** tab of the **Test Case Editor**:



1. To add variable using grid view, switch to **Variables** tab of your Test Case.
2. Then click **Add**. A new row is added to the variable list.
3. Input variables.

_Note: Remember to save the test case once done._


![](../../images/katalon-studio/docs/test-case-variables/1-test-case-variables.png)


The result after running the test case with variables will be the same with hard-coded values:


![](../../images/katalon-studio/docs/test-case-variables/2-result.png)



## View and declare variables in Script Mode

Switch to **Variable (Script Mode)** tab, Katalon Studio will display a Script Editor with XML format. For example:


![](../../images/katalon-studio/docs/test-case-variables/3-variables-script-mode.png)



## Call Test Case with variables

1. Open a Test Case in **Manual** view, then click **Add **and select option **Call Test Case**.

2. The **Test Case Browser** dialog which shows all existing test cases within the project will be displayed. Select the test case to be called and click **OK**.

In the following example, the ‘Test Case with variables’ will be called.


![](../../images/katalon-studio/docs/test-case-variables/4-test-case-browser.png)


3. A **Call Test Case** step will be added with the selected test case above as its target.



![](../../images/katalon-studio/docs/test-case-variables/5-call-test-case.png)



![](../../images/katalon-studio/docs/test-case-variables/6-input.png)



![](../../images/katalon-studio/docs/test-case-variables/7-map-input.png)


The result after running the test case will be displayed as below:



![](../../images/katalon-studio/docs/test-case-variables/8-result-after-call-test-case.png)



### Call Test Case in Script mode

In **Script** tab, the callTestCase method allows users to make a call to another test case. Refer to the following example:


```
WebUI.callTestCase(findTestCase('Data-driven Testing/Test Case with variables'), [('employee') : 'John', ('department') : 'Marketing', ('position') : 'Manager'], FailureHandling.STOP_ON_FAILURE)
```

