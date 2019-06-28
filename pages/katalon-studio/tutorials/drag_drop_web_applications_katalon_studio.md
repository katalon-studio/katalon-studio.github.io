---
title: "Handling drag and drop testing for web applications with Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/drag_drop_web_applications_katalon_studio.html
redirect_from:
    - "katalon-studio/tutorials/drag_drop_web_applications_katalon_studio.html"
description: "In this tutorial, we will show you step-by-step how Katalon Studio is used to test the drag and drop feature in a web application."
---
![Drag & Drop testing Katalon Studio](../../images/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio/crop-1-1024x481.png)

Drag and drop is a fairly popular approach in modern websites to improve their overall UX. However, it could be very challenging to implement automation test for drag and drop components.

-----------------------

Since Katalon Studio 6.1.5, please install [DragAndDrop Keywords](https://store.katalon.com/product/70/DragAndDrop-Keywords) plugin to use this feature.

In this tutorial, we will show how [**Katalon Studio**](https://www.katalon.com) is used to test the drag and drop feature in a web application.

This tutorial assumes that you are familiar with the tool's basic features. To have a quick idea of how it works or to review the interface please refer to [Kickstart your automation testing using Katalon Studio](https://www.katalon.com/tutorials/kickstart-automation-testing-using-katalon-studio/) or [Katalon Studio User Guides](/x/oArR).

There are different common implementation methods for the drag and drop feature, which each needs to be addressed differently when testing, including:

*   Using pure JavaScript to handle drag and drop with popular JavaScript frameworks like [jQuery](http://jqueryui.com/droppable/#default).
*   Using HTML5 Drag and Drop, which is detailed in w3schools' HTML Drag and Drop tutorial.

Create automation tests for JavaScript Drag and Drop
----------------------------------------------------

Testing the pure JavaScript implemented drag and drop function is quite straightforward with Katalon Studio as its built-in keyword [**_dragAndDropObjectToObject_**](/display/KD/%5BWebUI%5D+Drag+And+Drop+To+Object) was designed to handle the JavaScript action natively.

For this section, we will use the [jQuery Droppable example page](http://jqueryui.com/droppable/#default) as the application under test (AUT).

![Droppable Katalon Studio](../../images/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio/DragDrop1.png)

The example website provides a simple implementation of drag and drop with a draggable object containing the text "Drag me to my target" and a droppable object with the text "Drop here".

When the draggable object is dragged into the droppable object, the target object's text will be changed to "Dropped!" like the image below:

![Drag & Drop Katalon Studio 2](../../images/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio/DragDrop2.png)

We are going to test this behavior using Katalon Studio.

1.  Create a Katalon project with the name **_DragAndDrop_**.
2.  Open the [Object Spy](/x/5BZO) dialog, start a spy object session and navigate to the AUT website at [http://jqueryui.com/droppable/#default](http://jqueryui.com/droppable/#default).
3.  Use the object spy utility to capture both the droppable object and the draggable object mentioned above and import them into the project's Object Repository. If you do it correctly, there will be 3 test objects as below in Object Repository and add navigation path:

![Tests Explorer Katalon Studio](../../images/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio/DragDrop3.png)

The name of each object is self-explanatory, except for the **_iframe_demo-frame_** object which is the parent iframe of both draggable and droppable objects. Now let's use those captured objects in a test script.

4.  Create a test case named "jQuery Drag And Drop", open it, then change to Script mode and copy the following test scripts into it:

    ```groovy
    import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
    import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI


    'Open the selected browser and navigate to our AUT website.'
    WebUI.openBrowser('http://jqueryui.com/droppable/#default')'Use the dragAndDropObjectToObject keyword to perform the drag and drop action.'
    WebUI.dragAndDropToObject(findTestObject('Page_Droppable jQuery UI/div_draggable'), findTestObject('Page_Droppable jQuery UI/div_droppable'))'Get the text content of our droppable object.'
    droppable_text = WebUI.getText(findTestObject('Page_Droppable jQuery UI/div_droppable'))'Verify if it is actually changed to "Dropped!" because of the drag and drop action.'
    WebUI.verifyEqual(droppable_text, 'Dropped!')'Clean up the testing environment by closing the browser.'
    WebUI.closeBrowser()

    ```
5.   Run the test case and you will see that the executed test will pass effortlessly.

Create automation tests for HTML5 Drag and Drop
-----------------------------------------------

For this section, we will use the [w3school HTML5 Drag and Drop page](https://www.w3schools.com/html/html5_draganddrop.asp) as the application under test (AUT):

![](../../images/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio/w3school-HTML5-Drag-and-Drop-page.png)

This web page contains a simple implementation of drag and drop which allows you to simply drag the W3Schools.com image to change its container. After the W3Schools image is dragged and dropped to the right rectangle, it appears as below:

![](../../images/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio/drag-and-drop-custom-keyword-for-HTML-Drag-and-Drop.png)

We will implement the drag and drop custom keyword for HTML Drag and Drop, then verify the innerHTML of the right rectangle when the drag and drop is completed.

Implementing an automation test for HTML5 Drag and Drop is a bit more complex than the JavaScript version. If you run the test case above to test this drag and drop feature, you will see that the draggable image does not move although the test passes.

This happens because as of the day of this article (May 22, 2017), Selenium still not provide official support for testing HTML5 Drag and Drop. You can follow the related Selenium issue [here](https://github.com/seleniumhq/selenium-google-code-issue-archive/issues/3604).

Therefore, as Katalon Studio utilizes Selenium for the automation execution, implementing the automated test for HTML5 Drag and Drop requires a little bit of workaround:

1.  Capture the draggable and droppable objects into the project's repository like above. If done correctly we have 2 test objects as below:

![Test Explorer Katalon Studio](../../images/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio/DragDrop6.png)

**_img_drag1_** is the identifier of the draggle image object, while **_div_div2_** identifies the destination rectangle element.

2\. Create a package inside Keywords with the name **_dnd._**

3\. Create a keyword class named **_DragAndDropHelper_** and open it. Copy the following scripts to create the custom keyword:

```groovy
package html5.dnd
 
import org.openqa.selenium.JavascriptExecutor
import org.openqa.selenium.WebDriver
import org.openqa.selenium.WebElement
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.driver.DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords
 
public class DragAndDropHelper {
private static String getJsDndHelper() {
return '''
function simulateDragDrop(sourceNode, destinationNode) {
var EVENT_TYPES = {
DRAG_END: 'dragend',
DRAG_START: 'dragstart',
DROP: 'drop'
}
 
function createCustomEvent(type) {
var event = new CustomEvent("CustomEvent")
event.initCustomEvent(type, true, true, null)
event.dataTransfer = {
data: {
},
setData: function(type, val) {
this.data[type] = val
},
getData: function(type) {
return this.data[type]
}
}
return event
}
 
function dispatchEvent(node, type, event) {
if (node.dispatchEvent) {
return node.dispatchEvent(event)
}
if (node.fireEvent) {
return node.fireEvent("on" + type, event)
}
}
 
var event = createCustomEvent(EVENT_TYPES.DRAG_START)
dispatchEvent(sourceNode, EVENT_TYPES.DRAG_START, event)
 
var dropEvent = createCustomEvent(EVENT_TYPES.DROP)
dropEvent.dataTransfer = event.dataTransfer
dispatchEvent(destinationNode, EVENT_TYPES.DROP, dropEvent)
 
var dragEndEvent = createCustomEvent(EVENT_TYPES.DRAG_END)
dragEndEvent.dataTransfer = event.dataTransfer
dispatchEvent(sourceNode, EVENT_TYPES.DRAG_END, dragEndEvent)
}
 
''';
}
 
@Keyword
def dragAndDrop(TestObject sourceObject, TestObject destinationObject) {
WebElement sourceElement = WebUiBuiltInKeywords.findWebElement(sourceObject);
WebElement destinationElement = WebUiBuiltInKeywords.findWebElement(destinationObject);
WebDriver webDriver = DriverFactory.getWebDriver();
((JavascriptExecutor) webDriver).executeScript(getJsDndHelper() + "simulateDragDrop(arguments[0], arguments[1])", sourceElement, destinationElement)
}
}

```

This keyword uses the JavaScript function from [https://gist.github.com/druska/624501b7209a74040175](https://gist.github.com/druska/624501b7209a74040175) (thanks to [Druska](https://gist.github.com/druska)) to mimic HTML5 native events to simulate drag and drop for HTML5.

4.  Use our newly created custom keyword. Create a test case with the name **_HTML5 Drag And Drop_**, open it then changing to the Script mode and pasting the following Groovy code:

    ```groovy
    import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
    import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI


    'Open the selected browser and navigate to our AUT website'
    WebUI.openBrowser('https://www.w3schools.com/html/html5_draganddrop.asp')'Use the previous custom keywords to perform the drag and drop action.'
    CustomKeywords.'html5.dnd.DragAndDropHelper.dragAndDrop'(findTestObject('Page_HTML5 Drag and Drop/img_drag1'), findTestObject(
    'Page_HTML5 Drag and Drop/div_div2'))'Verify that the drag and drop action is performed successfully by checking the innerHTML of the destination element for the draggable image.'
    WebUI.verifyElementAttributeValue(findTestObject('Page_HTML5 Drag and Drop/div_div2'), 'innerHTML', '<img src=\"img_w3slogo.gif\" draggable=\"true\" ondragstart=\"drag(event)\" id=\"drag1\" alt=\"W3Schools\">',
    0)'Close the browser to clean up the testing environment.'
    WebUI.closeBrowser();

    ```

This sample project could be found [**here**](https://github.com/katalon-studio/DragAndDropExample)**.**

Run the test case and you will notice that the W3Schools image is dragged and dropped in the right rectangle successfully.

We hope you enjoy the tutorial, please comment if you have any question or another solution to automate the drag & drop testing. For additional tip & tricks, access [**Katalon Studio tutorial**](https://www.katalon.com/tutorials/).
