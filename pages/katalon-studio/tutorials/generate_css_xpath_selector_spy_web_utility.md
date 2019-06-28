---
title: "Generating reliable object selector using Spy Web utility"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/generate_css_xpath_selector_spy_web_utility.html
redirect_from:
    - "katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility.html"
description: "Katalon Studio Spy Web Utility provides an intelligent object capturing capability and immediate feedback on CSS Selector & Xpath selector. Learn more!"
---
Katalon Studio [Spy Web Utility](http://docs.katalon.com/pages/viewpage.action?pageId=5117668) provides an intelligent object capturing capability and immediate feedback on the uniqueness of selectors. There are two widely used selectors: **CSS** and **XPath**.

Locators are object attributes which are used to build up XPath or CSS selector. Locators help find and identify elements on the Web page under test. Katalon Studio builds the final XPath selector (Basic mode) by using any active object locators from users to locate Web Elements.

With CSS or XPath mode of Selection Method, users can further input and edit XPath or CSS object to identify objects on Web UI.

The following are some Web element locators:

1.  **Id**: Select element with the specified @id attribute.
2.  **Name**: Select first element with the specified @name attribute.
3.  **Link text**: Select link (anchor tag) element which contains text matching the specified link text
4.  **Partial Link text**: Select link (anchor tag) element which contains text matching the specified partial link text
5.  **Tag name**: Locate Element using a Tag name
6.  **Class name**: Locate Element using a class name.
7.  **CSS**: Select the element using CSS selectors.
8.  **Xpath**: Locate an element using a XPath expression.

How to find object locators
---------------------------

**Step 1:** Click on **Spy Web** on the Katalon Studio main toolbar.

![Find-Object-locators](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/Find-Object-locators.png)

**Step 2:** The Object Spy window is shown as the following.

![The-Object-Spy-window](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/The-Object-Spy-window.png)

**Step 3:** Type the application URL in the URL text box and select the desired browser.  Click on **Start**.

![application URL in Object Spy](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/application-URL-in-Object-Spy.png)

Once you click on Start, Katalon Studio will launch the browser and navigates to the respective website.

**Step 4:** To capture test objects, hover the mouse over them. The focused web object would be highlighted.

![Capture-test-objects](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/Capture-test-objects.png)

By pressing the <Alt + ~> keys the focused object will be highlighted green, which means that it has been stored in the Captured Objects list.

Katalon Studio will automatically capture all available properties of captured objects. You can change the folder name and edit the value of any properties.

![Locate captured Xpath selector](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/Locate-captured-objects.png)

Katalon Studio allows users to select **Selection Method** to locate captured objects. **Basic mode** is recommended to manual testers who just started automation journey. With **Basic** mode, Katalon Studio's intelligent selector generator will **automatically generate** a robust and unique XPath **selector** which combined all properties of captured objects.

For advanced testers who wish to **manually input selectors** have the option to select between **CSS** or **XPath mode**.

Click on **Add** to **Object Repository** from the command toolbar to save objects in Objects Repository. Select a folder to add the captured objects into. Click **OK** when done.

Working with XPath selector
---------------------------

Katalon Studio's object spy further allows advanced users to manually input object selectors with XPath or CSS Selection Method mode. Spy Utility will provide instant feedback by auto-detecting the numbers of matching element with provided selector and highlighting it.

XPath selector is commonly used to locate web element in Web UI testing. The following guide shows how to leverage Katalon Studio Spy Utility to locate web element with XPath selector.

*   **Checking Multiple Attributes:**

As an example, you can identify the login button with multiple attributes

![Login-Button-Multiple-Attributes](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/Login-Button-Multiple-Attributes.png)

Xpath:

```groovy
//*[@id='btn-login'][@type='submit']

```

![Multiple-Attributes](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/Multiple-Attributes.png)

*   **Contains():**

Contains() is a method used in an XPath expression. It is used when the value of any attribute changes dynamically such as login information.

Example:

Contains method for heading CURA Healthcare Service

![CURA-Healthcare-Service](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/CURA-Healthcare-Service.png)

Xpath:

```groovy
 //h1[contains(.,'CURA Healthcare Service')]

```

![Xpath object selector](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/Contain-Method.png)

*   **Last():**

Last() is a method used in an XPath expression. It is used to get the very last node.

Example:

There are 3 Social Icon Links, and we want to get the 3rd and last item by using Last()

![Social-icons-by-using-Last](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/Social-icons-by-using-Last.png)

Xpath:

```groovy
//ul[@class='list-inline']/li[last()]

```

*   **Start-with():**

The Start-with method finds the element whose attribute value changes on refresh or any operation on the webpage. In this expression, the starting text of the attribute is used to find the element whose attribute changes dynamically. You can also find the element whose attribute value is static (not changing).

Example:

Starts-with() method for heading CURA Healthcare Service

![CURA-Healthcare-Service](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/CURA-Healthcare-Service.png)

Xpath:

```groovy
//h3[starts-with(.,'We Care About')]

```

*   **Xpath axes methods:** These Xpath axes methods are used to find complex or dynamic elements.

**a) Following**

Selects all elements in the document following the current node( )

Example:

By using Following we can identify the Password text box which is located after the Username name field.

Xpath:

```groovy
.//*[@id='txt-username']//following::input

```

**b) Ancestor**

This will select all ancestors (parent, grandparent, etc.) of the current node.

Example:

In the below screenshot we want to get the ancestors of the 'ul ' tag highlighted in red. These ancestors are highlighted in blue.

Xpath:

```groovy
//ul[@class='list-inline']/ancestor::div

```

**c) Child**

Selects all children of the current node.

Example:

Using Child we can identify all social links as shown in the below screenshot.

![identify-all-social-links-by-child](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/identify-all-social-links-by-child.png)

Xpath:

```groovy
//ul[@class='list-inline']/child::li

```

**d) Preceding**

Selects all nodes that come before the current node.

Example:

Using Preceding we can identify all nodes that come before the Login button.

![identify-all-nodes-before-the-Login-button](../../images/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility/identify-all-nodes-before-the-Login-button.png)

Xpath:

```groovy
//*[@id='btn-login']//preceding::input

```

**e) Following-sibling:**

Selects the following siblings of the context node. Siblings are at the same level of the current node as shown in the screen below. It will find the element after the current node.

Example:

By following-sibling method, we can Identify Password text box which located after Username name field.

Xpath:

```groovy
.//*[@id='txt-username']//following::input

```

The source code is available to be downloaded [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, please refer to [Katalon Studio Tutorials](/katalon-studio/tutorials/) and [Katalon Forum](https://forum.katalon.com/).