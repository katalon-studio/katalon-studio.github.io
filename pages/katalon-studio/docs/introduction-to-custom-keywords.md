---
title: "Introduction to Custom Keywords" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/introduction-to-custom-keywords.html 
redirect_from:
    - "/display/KD/Introduction+to+Custom+Keywords/"
    - "/display/KD/Introduction%20to%20Custom%20Keywords/"
    - "/x/8gAM/"
    - "/katalon-studio/docs/introduction-to-custom-keywords/"
    - "/display/KD/Define+custom+keywords/"
    - "/katalon-studio/tutorials/create_custom_keyword.html"
description: 
---
In addition to built-in keywords, users can define custom keywords to extend the capability of Katalon Studio. Once created, custom keywords can be used when implementing test cases just like other built-in keywords. 

Create a Package
----------------

A _package_ is a namespace that organizes a set of related classes and interfaces. Because software written in the Java programming language or similar languages can be composed of hundreds or _thousands _of individual classes, it makes sense to keep things organized by placing related classes and interfaces into packages.

1.  Select **File > New > Package** from the main menu. The **New Keyword Package** dialog will be displayed. Enter the name for your package and click **OK**.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6-153A353A6.png)  
      
    
2.  A new package is created under **Keywords** of Katalon Studio accordingly.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6-153A363A13.png)

Create a Custom Keyword
-----------------------

1.  Select **File > New > Keyword** from the main menu. The **New Keyword** dialog will be displayed. Enter the name for your keyword and specify a **package** for the keyword. Click **OK**.
    
    > Since version 5.4, Katalon Studio provides user option to generate sample custom keywords for Web, Mobile and API Testing.
    > 
    > Refer to this guide: [https://docs.katalon.com/x/3QHR](/x/3QHR)
    
      
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2018-4-2-143A373A16.png)
    
    > Attention
    > 
    > By default, a class name cannot start with a number, contain spaces, or have special characters. The Java naming convention suggests the user to create a class name using a noun or a noun phrase, with the first letter of each word capitalized, to better manage the project.
    
      
      
    
2.  A new keyword is created under the specified **package** accordingly.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6-153A503A48.png)  
      
    
3.  Enter the following block of code in your class to define one custom keyword:
    
    ```groovy
    @Keyword
    def keywordName(parameters…) {
       // enter your code here
       // you can use either Groovy or Java      
    }
    ```
    
    where:
    
    | Item | Description |
    | --- | --- |
    | @Keyword | The annotation to indicate that the block of code below is the definition of a keyword. |
    | keywordName | The name that you would like to use for your custom keyword |
    | parameters | The list of parameters that would be used in the custom keyword |
    
    For example:  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6-163A203A3.png)
    
4.  Save the **Keyword** file when you're done.  
      
    

Custom keywords in Manual view
------------------------------

Follow the steps below in order to use your defined custom keywords in **Manual view** of a Test Case:

1.  Open a test case in **Manual** **view**, then select to add **Custom Keyword** from command toolbar.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-6-30-203A323A47.png)  
      
    
2.  A new test step is added with a list of all defined custom keywords. Select your recently created keyword here.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6-163A443A46.png)

Custom keywords in Scripting view
---------------------------------

Follow the steps below in order to use your defined custom keywords in **Scripting view** of a test case:

*   The **Class** _CustomKeywords_ of Katalon Studio allows you to access all custom keywords. Enter the following syntax into the script editor:
    
    ```groovy
    CustomKeywords.
    ```
    
*   The **Content Assist** function will be invoked immediately after you type the **dot** character. **Content Assist** provides users with the context-sensitive suggestions for code completion. Therefore, all the custom keywords defined in your test project will be displayed as below:

![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-6-30-203A353A9.png)

*   Select the recently created keyword and provide all parameters as required.  
      
    

The following API docs may prove useful when working with custom keywords:

| Class | Method | Description |
| --- | --- | --- |
| **[Driver Factory](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/driver/DriverFactory.html)** | [getWebDriver()](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/driver/DriverFactory.html#getWebDriver()) | Get the current active web driver. |
| **[Test Object](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html)** | [addProperty(String name, ConditionType condition, String value)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#addProperty(java.lang.String,%20com.kms.katalon.core.testobject.ConditionType,%20java.lang.String)) | Add a new property to the test object |
| setProperties(List<TestObjectProperty> properties) | Set the properties of the test object |
| [getObjectId()](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#getObjectId()) | Get object ID. |
| [findPropertyValue(String name, boolean caseSensitive)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#findPropertyValue(java.lang.String,%20boolean)) | Find the value of a property using the property name |
| **[Keyword Util](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html)** | [logInfo(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#logInfo(java.lang.String)) | Log message as info |
| [markError(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markError(java.lang.String)) | Mark a keyword to be error |
| [markErrorAndStop(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markErrorAndStop(java.lang.String)) | Mark a keyword to be error and stop execution |
| [markFailed(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markFailed(java.lang.String)) | Mark a keyword to be failed and continue execution |
| [markFailedAndStop(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markFailedAndStop(java.lang.String)) | Mark a keyword to be failed and stop execution |
| [markPassed(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markPassed(java.lang.String)) | Mark a keyword to be passed |
| [markWarning(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markWarning(java.lang.String)) | Mark a keyword to be warning |