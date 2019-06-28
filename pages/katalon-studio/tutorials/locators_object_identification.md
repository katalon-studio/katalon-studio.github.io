---
title: "Locators and Object Identification"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/locators_object_identification.html
description: "Learn how to identify Locators and Object using Spy Mobile in Katalon Studio with sample project provided by the Katalon Team."
redirect_from:
    - "/katalon-studio/tutorials/locators_object_identification.html"
---
In each test case, **locators** are an abstract way to define how an element can be found.

Below are listed locators for a mobile automation test:

1.  A) Id: Select element with the specified @id attribute.
2.  B) Name: Select element with the specified @name attribute.
3.  C) Class name: Locate element using a class name.
4.  D) AccessibilityId: Select the element using AccessibilityId selectors.
5.  E) Xpath: Locate an element using an XPath expression.
6.  F) AndroidUIAutomator: Locate an element using an AndroidUIAutomator attribute.

In order to use spy mobile to identify objects, the environment for mobile testing will need to be set up. Refer to [Installation and Setup](/display/KD/Installation+and+Setup) guide for more details. This demonstration utilizes the sample project provided by the Katalon Team, which comes with your product installation.

Identifying Object using Spy Mobile
-----------------------------------

*   **Step 1**: Click on Spy Mobile option from Katalon main toolbar. As shown below, Object Spy window will be displayed.

![Spy Mobile in Katalon Studio](../../images/katalon-studio/tutorials/locators_object_identification/Spy-Mobile-in-Katalon-Studio.png)

*   **Step 2:** Choose the settings of your mobile testing session in **Configurations** section, and click Start.
*   **Step 3:** Once the application is started, it will display the mobile screen with spy dialog box. All the mobile objects from that screenshot are analyzed and organized in a hierarchical view which could be found at **All Objects** section of the **Mobile Object Spy** dialog.

![Mobile Object Spy dialog in Katalon Studio](../../images/katalon-studio/tutorials/locators_object_identification/Mobile-Object-Spy-dialog-in-Katalon-Studio.png)

Click on any object from the hierarchical view and it will be highlighted in **Device View** accordingly.

*   **Step 4:** Tap on "**OS**" (the green highlight will signify your selection).

![Mobile-Object-Spy-dialog-in-Katalon-Studio](../../images/katalon-studio/tutorials/locators_object_identification/Mobile-Object-Spy-dialog-in-Katalon-Studio-2.png)

*   **Step 5:** Select the checkbox of the **OS** text of object in **Spy Dialog** box at **All Objects** frame. Rename the object name of **"OS"** to **text_OS.** It is a good practice to follow naming conventions for easy maintenance.

![Mobile Object Spy dialog in Katalon Studio](../../images/katalon-studio/tutorials/locators_object_identification/Mobile-Object-Spy-dialog-in-Katalon-Studio-3.png)

![Mobile Object Spy dialog in Katalon Studio](../../images/katalon-studio/tutorials/locators_object_identification/Mobile-Object-Spy-dialog-in-Katalon-Studio-4.png)

*   **Step 6:** In mobile screen window, **tap** on "**OS**" text, the user will be navigated to the next screen. To capture the screen objects click on **Capture** **Object** in **Spy Dialog Box**.
*   **Step 7:** Repeated the previous actions for any objects you want to identify. Once finished, click on **Stop** and **Add to Object Repository** to add captured objects into the repository.

![Object Repository in Katalon Studio](../../images/katalon-studio/tutorials/locators_object_identification/Object-Repository-in-Katalon-Studio.png)

*   **Step 8:** The user can create a new folder by clicking **New Folder**. It will display a popup to create a test case. Enter the **name** of the folder and continue.

The object repository will look similar to the screenshot below, with your newly identified objects.

![Object Spy locators in Katalon Studio](../../images/katalon-studio/tutorials/locators_object_identification/Object-Spy-locators-in-Katalon-Studio.png)

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Mobile Object Spy](/x/3QBO) guideline and join us on [Katalon Forum](http://forum.katalon.com/).