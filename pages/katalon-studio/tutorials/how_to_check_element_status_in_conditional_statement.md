---
title: "How to check element status in conditional statement?"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/how_to_check_element_status_in_conditional_statement.html
redirect_from:
    - "katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement.html"
description: "Tips and Tricks: How to check element status in conditional statement?"
---

In Web UI functional testing, you may want to ensure that an element is clickable, present, or visible before performing further actions on the element. The function used in such a case is **verifyElementClickable** with this specification:

![verifyElementClickable](../../images/katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement/verifyElementClickable_1.png)


The following code block demonstrates how to check the element status in a conditional statement. You may assume that the function WebUI.verifyElementClickable will return **true** if the element is clickable, and **false** if the element is not. 
```groovy
if (WebUI.verifyElementClickable(findTestObject('Test Objects/Pages/Login Page/elContinue - Wrong'))) {
    WebUI.click(findTestObject('Test Objects/Pages/Login Page/elContinue - Wrong'))
} else {
    WebUI.click(findTestObject('Test Objects/Pages/Login Page/elContinue'))
}
```
However, in practice, if the element is not found after timeout, the function does not return false. Instead, the exception below is returned:

```groovy
Stack trace: com.kms.katalon.core.exception.StepFailedException: 
Unable to verify object 'Object Repository/Test Objects/Pages/Login Page/elContinue - Wrong' to be clickable (Root cause: Web element with id: 'Object Repository/Test Objects/Pages/Login Page/elContinue - Wrong' located by 'By.xpath: //button[.='Continue - Wrong']' not found)
```
You may find it confusing since the function has been used with the proper syntax and purpose as specified in the API documentation. Here’s why:
In Katalon Studio, there are two overloading functions named **verifyElementClickable**. 

Function 1 with default FailureHandling:
![Function 1 with default FailureHandling](../../images/katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement/verifyElementClickable_1.png)


Function 2 wich custom FailureHandling:
![Function 2 wich custom FailureHandling](../../images/katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement/verifyElementClickable_2.png)

The first function has a default **FailureHandling** parameter; while the second allows you to customize the parameter. This will determine the function’s behavior in some specific situations.

If you expect the function to return **false** if the element is not found, you will have to use the second function with the **FailureHandling.OPTIONAL** parameter. The following script will work with your expectation:

```groovy
if (WebUI.verifyElementClickable(findTestObject('Test Objects/Pages/Login Page/elContinue - Wrong'), FailureHandling.OPTIONAL)) {
    WebUI.click(findTestObject('Test Objects/Pages/Login Page/elContinue - Wrong'))
} else {
    WebUI.click(findTestObject('Test Objects/Pages/Login Page/elContinue'))
}

```
We hope this tip will help resolve your problem when checking an element status before performing actions on it.
