---
title: "Handling iFrame issue with Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handling_iframe_issue.html
redirect_from:
    - "katalon-studio/tutorials/handling_iframe_issue.html"
description: "A very common type of control used in website is the HTML iframe. This article shows you how to handle iframe issue properly in Katalon Studio."
---
A very common type of control used in website is the HTML iframe. And this control needs to be handled in a specific manner when testing. This article shows you how to handle iframes properly in Katalon Studio.

What is iframe?
---------------

An iframe (Inline Frame) is an HTML document embedded in another HTML document. The iframe HTML element is often used to insert the content from another source, such as an advertisement, into a Web page.

How to identify the iframe
--------------------------

We can identify the iframes by below two ways by inspecting the element:

1.  Right click on the element, if there is a **tag **name available with **'iframe' **then the element is said to be in a frame.
2.  Right click on the page and if there is an option available with following options in the context menu then the element is available in frames.

a) View frame source

b) Reload frame

c) This frame

Why is it important to know how to test iframes?
------------------------------------------------

Verifying text and objects within iframes can be a challenge. For example, even though you can see a text displayed in an iframe, automation tools may not be able to detect the text. You have to tell your script how to traverse through a website's iframes structure and select the correct iframe where the text and its object are present.

**Example #1**

1\. Given that you want to capture the Comment text field of a certain question in Katalon Forum (this text field is an iframe), you can use the Web Object Spy of Katalon and see that it can detect the iframe in the red highlighted area.

![iframe issue](../../images/katalon-studio/tutorials/handling_iframe_issue/Web-Object-Spy.png)

2\. Once the Comment iframe is captured, Katalon shows all of its child elements which you can see in the Object Spy dialog as below:

![Object Spy dialog](../../images/katalon-studio/tutorials/handling_iframe_issue/Object-Spy-dialog-300x144.png)

3\. As you save the captured object to Katalon Studio, its iframe is also included. This is illustrated in the following screenshot:

![Captured object to Katalon Studio](../../images/katalon-studio/tutorials/handling_iframe_issue/captured-object.png)

4\. Then, you can proceed to set the text to the Comment field by specifying the child element for the Set Text keyword as described below:

![Set the text to the Comment field](../../images/katalon-studio/tutorials/handling_iframe_issue/Comment-field-1024x238.png)

**Example #2**

1\. Given that you want to capture the JQueryUI's Drag and Drop example (this draggable control is an iframe), as shown in the screenshot below, you can drag the 'Drag me around' object to other areas of the iframe.

![capture the JQueryUI's Drag and Drop example](../../images/katalon-studio/tutorials/handling_iframe_issue/JQueryUIs-Drag-and-Drop.png)

2\. Use the Object Spy to capture the iframe as usual. The Object Spy can detect, capture the iframe, and show all of the iframe's elements accordingly.

![Object Spy to capture the iframe](../../images/katalon-studio/tutorials/handling_iframe_issue/Object-Spy.png)

3\. As you save the captured object to Katalon Studio, the iframe is also included as the object's parent element. This is illustrated in the following screenshot (Note that you can uncheck the option to use parent iframe if needed):

![save the captured object to Katalon Studio](../../images/katalon-studio/tutorials/handling_iframe_issue/objects-parent-element..png)

4\. Given the situation where you opt not to specify the iframe parent for an element, in order to interact with the element, you need to use the keyword [Switch To Frame](/display/KD/%5BWebUI%5D+Switch+To+Frame) to have Katalon focus on the parent iframe before being able to interact with the element.

The sample code below shows how to switch to the parent frame before using the drag and drop action on the elements within the iframe:

![how to switch to the parent frame before using the drag and drop action](../../images/katalon-studio/tutorials/handling_iframe_issue/sample-code_drag_n_drop.png)

```groovy
import com.kms.katalon.core.annotation.SetUp as SetUp
 
import com.kms.katalon.core.annotation.TearDown as TearDown
 
import com.kms.katalon.core.model.FailureHandling as FailureHandling
 
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
 
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
 
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
 
import com.kms.katalon.core.testcase.TestCase as TestCase
 
import com.kms.katalon.core.testdata.TestData as TestData
 
import com.kms.katalon.core.testobject.TestObject as TestObject
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
import internal.GlobalVariable as GlobalVariable
 
'Open browser and navigate to jQuery UI page'
WebUI.openBrowser('http://jqueryui.com/')
 
'Maximize current browser window'
WebUI.maximizeWindow()
 
'Click on \'Draggle\' link'
WebUI.click(findTestObject('Page_jQuery_Homepage/lnk_Draggable'))
 
'Switch to iframe of Demo panel'
 
WebUI.switchToFrame(findTestObject('Page_jQuery_Drag and Drop Example/ifr_Demo Frame'),
 
GlobalVariable.G_Timeout_Small, FailureHandling.STOP_ON_FAILURE)
 
'Drag and drop iframe into other position'
 
WebUI.dragAndDropByOffset(findTestObject('Page_jQuery_Drag and Drop Example/div_Frame_Draggable'),
 
200, 38)
 
'Switch back to current window'
 
WebUI.switchToDefaultContent()
 
'Click on \'Droppable\' link'
 
WebUI.click(findTestObject('Page_jQuery_Homepage/lnk_Droppable'))
 
'Switch to iframe of Demo panel'
WebUI.switchToFrame(findTestObject('Page_jQuery_Drag and Drop Example/ifr_Demo Frame'),
 
GlobalVariable.G_Timeout_Small, FailureHandling.STOP_ON_FAILURE)
 
'Drag the left rectangle and Drop it the right-side one'
WebUI.dragAndDropToObject(findTestObject('Page_jQuery_Drag and Drop Example/div_Frame_Draggable'),
 
findTestObject('Page_jQuery_Drag and Drop Example/div_Frame_Droppable'), FailureHandling.STOP_ON_FAILURE)
 
WebUI.closeBrowser()

```

**Example #3: Switch To Frame**

We can switch to frames using **switchTo()** method then perform the action on that element.

If we want to get text in the Text Area then we cannot get it directly by taking the Xpath of the element. As it is available in the iframe we need to switch to the frame first and then we can get text of the element.

**Manual Mode:****  
![switch to frame](../../images/katalon-studio/tutorials/handling_iframe_issue/switch-to-frame.png)**

**Script Mode:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
'Launching and Navigating to URL\r\n'
 
WebUI.openBrowser('http://the-internet.herokuapp.com/iframe')
 
'Maximize the window\r\n'
 
WebUI.maximizeWindow()
 
'Switching to text area which is situated in Iframe'
 
WebUI.switchToFrame(findTestObject('Frames/textArea_Iframe'), 60)
 
WebUI.scrollToElement(findTestObject('Frames/TextArea'), 60)
 
'Fecthing the text from Text area and storing it in a variable'
 
Text = WebUI.getText(findTestObject('Frames/TextArea'))
 
'Verifying the Actual text with Expected text from Text Area.'
 
WebUI.verifyEqual(Text, 'Your content goes here.')

```

_Note: _Please download the source code [here](https://github.com/katalon-studio/katalon-web-automation) and get the HTML [here](https://github.com/katalon-studio/katalon-web-automation/blob/master/Html%20Files/How%20to%20Handle%20Frames.html).

**Example #4: Switch to Default Content**

Whenever we switch to frames to handle certain features, we must switch back to the parent node to access other features of the application. If we **do not** switch back to the parent node then your code looks for next locators within that same frame itself.

Switch used to switch back to the main window or parent window frame.

**Manual Mode**:

![Switch to Default Content](../../images/katalon-studio/tutorials/handling_iframe_issue/Switch-to-Default-Content.png)

**Script Mode:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
'Launching and Navigating to URL\r\n'
 
WebUI.openBrowser('http://the-internet.herokuapp.com/iframe')
 
'Maximize the window\r\n'
 
WebUI.maximizeWindow()
 
'Switching to text area which is situated in Iframe'
 
WebUI.switchToFrame(findTestObject('Frames/textArea_Iframe'), 60)
 
'Fecthing the text from Text area and storing it in a variable'
 
Text = WebUI.getText(findTestObject('Frames/TextArea'))
 
'Switching back to the main window or parent window frame'
 
WebUI.switchToDefaultContent()
 
'Verifying the Actual text with Expected text from Text Area.'
 
WebUI.verifyEqual(Text, 'Your content goes here.')
 
'Getting the text of the web element and storing it in a variable'
 
Heading = WebUI.getText(findTestObject('Frames/Frame Heading'))
 
'Verifying the Actual text with Expected text from Text Area.'
 
WebUI.verifyEqual(Heading, 'An iframe containing the TinyMCE WYSIWYG Editor')

```

_Note:_ Please download the source code [here](https://github.com/katalon-studio/katalon-web-automation) and get the HTML [here](https://github.com/katalon-studio/katalon-web-automation/blob/master/Html%20Files/How%20to%20Handle%20Frames.html).

**Common exceptions**

Noted that **NoSuchFrameException** or **InvalidSwitchToTargetException** exceptions are thrown when the target frame to be switched to doesn't exist.

If you need further support, join us on [Katalon Forum](https://forum.katalon.com/).