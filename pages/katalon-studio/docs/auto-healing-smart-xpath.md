---
title: "Auto-healing Smart XPath" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/auto-healing-smart-xpath.html

description: 
---

### Installing the plugin

> [Install the plugin here](https://store.katalon.com/product/5/Auto-healing-Smart-XPath)

After successfully installing th plugin, go to Katalon Studio and [Reload plugins](https://docs.katalon.com/katalon-store/docs/user/access-store-in-KS.html#reload-plugins).


### Prepare the XPath configuration
To start using this plugin, please first make sure that Smart XPath is enabled.

![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath_03.png)  
      
Go to **Project Settings** > **Test Design** > **Web Locators** > choose the **XPath** option.
![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath_01.png)  

The list contains XPath generator providers which generate the corresponding XPath values for Katalon Studio test objects. Most XPath generator providers are inherited from Selenium except for Neighbor XPath, a unique XPath generator researched and developed by Katalon team.

Drag and drop to change Xpath priority.


### Create test objects by Recording/Spying

Once test objects in test cases are created by Recording or Spying feature in Katalon Studio, a set of XPath values will be generated respectively to the XPath generator provider list. The first values in the lists are the default XPath values of the test objects.

![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath-update-1.png)  

### Execute test cases with Auto Healing, supported by Smart XPath

During execution, if a test object is failed to detect by its default XPath value, the other XPath options in the list will be automatically applied; and the first successful value will be used. The execution will continue as if no failed detection has happened. This will help significantly save time updating test cases, especially when the test cases are executed in batch overnight.
 
![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath-update-2.png)

![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath-update-3.png) 

### Update to the new stable XPath values

After execution, the proposed XPath values can be updated to the test objects via the **Smart Xpath** -> **Xpath Auto-healing logs**.

![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath-update-4.png) 
 
Check the **Approve** button and click OK to update the value (or click on **Approve all** if you want to update all the values). Close the object and refresh the Object Repository to see XPath values updated after approval
 
![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath-update-5.png) 


