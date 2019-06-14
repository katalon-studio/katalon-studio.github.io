---
title: "Manage Test Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/manage-test-object.html 
redirect_from:
    - "/display/KD/Manage+Test+Object/"
    - "/display/KD/Manage%20Test%20Object/"
    - "/x/HoUw/"
    - "/katalon-studio/docs/manage-test-object/"
description: 
---
Create a Test Object
--------------------

1.  Select **File > New > Test Object** from the main menu. The **New Test Object** dialog will display.  
    ![](../../images/katalon-studio/docs/manage-test-object/image2017-1-24-113A253A41.png)  
      
    
2.  Provide the name for the new test object, then click **OK** button. A new test object is created under the **Object Repository** of Katalon Studio.  
    ![](../../images/katalon-studio/docs/manage-test-object/image2018-9-6-103A213A4.png)
    

Add an object property
----------------------

> There cannot be two properties with the same name in the same test object.

1.  In the **Test Object Editor**, click on the **Add** command.  
      
    
2.  The **Add property** dialog will display.   
    ![](../../images/katalon-studio/docs/manage-test-object/image2017-10-17-113A333A56.png)
    
    where:
    
    | Field | Description |
    | --- | --- |
    | Name | The name of the object property. The drop-down list provides some common options for your selection (XPath, CSS, class, id, title) or you can enter manually. |
    | Match condition | The condition used to search for the "_actual_" object in the application under test when executing automation tests. |
    
3.  The new property is added to the properties list as specified. Provide the value to be used to search for the "_actual_" object in the application under test when executing automation tests.  
    ![](../../images/katalon-studio/docs/manage-test-object/image2018-9-5-193A93A19.png)

Manage parent object
--------------------

Nowadays, there are many web applications rendering elements in an [iframe](https://www.w3schools.com/tags/tag_iframe.asp). Therefore, you have to tell your script how to traverse a website's **iframes** and select the correct **iframe** where the text and its object are present. In order to do so, you have to use '[Switch To Frame](/display/KD/%5BWebUI%5D+Switch+To+Frame)' keyword before interacting with the elements. 

Katalon Studio supports the ability to define parent iframe object within test object view, so you only need to select the parent iframe and the execution will automatically switch to that iframe.

![](../../images/katalon-studio/docs/manage-test-object/image2018-9-6-103A263A6.png)

Properties used for detecting an object
---------------------------------------

> *   Available since version 5.0+
> *   [How to get Web objects XPath or CSS Locator](/x/5BZO#SpyWebUtility(latest)-HowtogetwebobjectsXPathorCSSLocator)
> *   [Object Identification Best Practices](/display/KD/Optimizing+Object+Identification+and+Tools)
> *   Configure [Web Object Locators Settings](https://docs.katalon.com/katalon-studio/docs/web-locators-settings-since-v571.html

#### Selection Method

> Read more about [Selection Method](/x/ZxlO).

Katalon Studio allows you to choose different ways to locate objects.

*   **XPath**
    *   Katalon Studio supports _Relative XPath_ for better object recognition. If an element cannot be consistently located using its direct attributes, Katalon Studio will identify the element by using its more robust neighbors.
*   **Attributes**
    *   Katalon Studio will _automatically_ generate its **XPath** combined with object **properties** to locate the object. This **XPath** will be displayed in **Selector Editor**. 
    *   A test object is typically built up by a number of properties. During test execution, Katalon Studio bases such information to detect an object. Using **Detect object by** field, you can determine the properties to be utilized for recognizing objects.  
        In the following example, Katalon Studio will try to find any object on AUT with both **text** and **XPath** tp satisfy the defined criteria during execution. 
        ![](../../images/katalon-studio/docs/manage-test-object/image2018-9-5-193A133A19.png)
*   **CSS**
    *   When selected, users are allowed to **manually** input **CSS** locator for objects in **Selector Editor**.

Validate Test Object on AUT
---------------------------

You can add test objects to **Web Object Spy** dialog to verify detection in the application under test. Refer to [Spy Web Utility (version 4.8 and below)](https://docs.katalon.com/katalon-studio/docs/spy-web-utility-version-48-and-below.html) for details regarding how to validate captured objects against the application under test.

1.  To add an object to **Web Object Spy**, simply right-click on the item to open its context menu and select the option.  
    ![](../../images/katalon-studio/docs/manage-test-object/image2018-9-6-103A303A22.png)

Parameterizing Test Object
--------------------------

Katalon Studio provides the user with the ability to handle dynamic objects (Objects that have some particular property change due to certain business rules). By supporting a way to parameterize test objects, users can leverage this approach to control objects dynamically. The example below describes the basic steps to do this:

1.  Open your Test Case in **Manual View** and double-click on the object that you want to parameterize its properties.   
    ![](../../images/katalon-studio/docs/manage-test-object/image2017-6-30-203A203A52.png)  
      
    
2.  The **Test Object Input** dialog will display. Expand the **Object Parameters** section and declare your expected dynamic properties to identify the test object during execution. For this example, Katalon Studio will make use of the 'id' property with its value when finding the 'txt_UserName' object.  
    ![](../../images/katalon-studio/docs/manage-test-object/1.declare-dynamic-object.png)  
      
    
3.  Once the property is declared, you can switch to the test case **Script View** and adjust the value of the property to be perceived. (Typically, users will want to pass property value as variables or make reference to data files according to their situation.)
    
    The general syntax to find a test object using a dynamic property is as follows:
    
    ```groovy
    findTestObject('{your test object}', [('{property}') : '{value of property}'])
    ```
    
    For example: 
    
    \+ One dynamic property:
    
    ```groovy
    findTestObject('Page_Login/txtUserName', ['id' : '48415648'])
    ```
    
    \+ Two dynamic properties:
    
    ```groovy
    findTestObject('Page_Login/txtUserName', ['id' : '48415648', [('name') : 'controler14585']])
    ```
    
    \+ Using the variable for the value of the dynamic property:
    
    ![](../../images/katalon-studio/docs/manage-test-object/image2017-6-30-203A223A13.png)
    
      
    \+ Using the variable for value in test object:  
    ![](../../images/katalon-studio/docs/manage-test-object/test_object.png)
    

Test Objects in Scripting View
------------------------------

The test case **Script View** allows you to programmatically define and handle **Test Objects** as needed. The following is a simple sample demonstrating how to do that:

![](../../images/katalon-studio/docs/manage-test-object/5.png)

1.  Refer to existing objects using the _findTestObject()_ method:
    
    ```groovy
    // Find an object which was defined already in Object Repository
    myPredefinedObject = findTestObject('Page_Katalon Studio/a_Free Download')
    ```
    
2.  Create a new object programmatically using _TestObject_ class:
    
    ```groovy
    // Create a new object programmatically
    myNewObject = new TestObject("TheObjectName")
    ```
    
3.  Add the property to an object using _addProperty()_ method:
    
    ```groovy
    // Add property to Test Object, a property is defined by:
    //	property name,
    //	condition type,
    //	property value,
    //	a boolean value to indicate if the property will be used to identify the object during execution
    myNewObject.addProperty("xpath", ConditionType.EQUALS, "//html/body", true)
    ```
    

The following API docs may prove useful when working with test objects:

| Class | Method | Description |
| --- | --- | --- |
| **[Test Object](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html)** | [addProperty(String name, ConditionType condition, String value)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#addProperty(java.lang.String,%20com.kms.katalon.core.testobject.ConditionType,%20java.lang.String)) | Add a new property to the test object |
| setProperties(List<TestObjectProperty> properties) | Set the properties of the test object |
| [getObjectId()](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#getObjectId()) | Get object ID. |
| [findPropertyValue(String name, boolean caseSensitive)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#findPropertyValue(java.lang.String,%20boolean)) | Find the value of a property using the property name |
