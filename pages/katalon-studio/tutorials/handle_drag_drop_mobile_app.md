---
title: "Handling Drag and Drop in Mobile App"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle_drag_drop_mobile_app.html
redirect_from:
    - "katalon-studio/tutorials/handle_drag_drop_mobile_app.html"
description: "This tutorial demonstrates how to handle drag and drop action in a mobile application using Katalon Studio."
---
In this tutorial, we will see how to handle drag and drop action in a mobile application using Katalon Studio. The source code can be downloaded [here](https://github.com/katalon-studio/katalon-mobile-automation/blob/master/Data%20Files/Drag%20and%20Drop.apk).

Scenario
--------

The scenario is to **drag and drop** a draggable object containing the text "**Brad Mehldau**" and a droppable object containing the text "**Kurt Rosenwinkel**".

*   Step 1: Start the Application (**Drag and Drop.apk**)
*   Step 2: Tap on **Basic Usage playground** text
*   Step 3: Drag **Brad Mehldau** text to drop at **Kurt Rosenwinkel** text

Manual Mode
-----------

*   Step 1**:** Select **Start Application** from mobile keyword and click on **Input** to open a new dialogue. In **appFile**, select '**Value Type**' as **Variable**. In **Value**, pass the variable name as '**path'**.

![Handling Drag and Drop in Mobile App](../../images/katalon-studio/tutorials/handle_drag_drop_mobile_app/Handling-Drag-and-Drop-in-Mobile-App.png)

*   Step 2: Add a **Wait For Element Present** item to wait for Basic Usage playground to pop up.
*   Step 3: Select **Tap** from mobile keyword and pass the object of Basic Usage playground.
*   Step 4: Similarly, add a **Wait For Element Present** item to wait for the 'Brad Mehldau' text.
*   Step 5: Select the **DragAndDrop** **keyword** to perform the drag and drop action.
*   Step 6: The draggable object will be dragged into the droppable object.

![Handling Drag and Drop in Mobile App](../../images/katalon-studio/tutorials/handle_drag_drop_mobile_app/Handling-Drag-and-Drop-in-Mobile-App-6.png)

You can utilize our **Script** feature to automate the test.

Script Mode
-----------

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.model.FailureHandling as FailureHandling
 
 
 
'Path of the Apk File Store in path variable'
 
def path = RunConfiguration.getProjectDir() + '/Data Files/Drag and Drop.apk'
 
 
 
'Start the Application'
 
Mobile.startApplication(path, false)
 
 
 
'Wait for Element Present of text "Basic Usage playground"'
 
Mobile.waitForElementPresent(findTestObject('Drag Sort Demos/Handle Drag and Drop/text_Basic Usage playground'), 30)
 
 
 
'Verify Element visible of "Basic Usage playground"'
 
Mobile.verifyElementVisible(findTestObject('Drag Sort Demos/Handle Drag and Drop/text_Basic Usage playground'), 30)
 
 
 
'Tap on "Basic Usage playground"'
 
Mobile.tap(findTestObject('Drag Sort Demos/Handle Drag and Drop/text_Basic Usage playground'), 30)
 
 
 
'Wait for Element Present of "Brad Mehldau"'
 
Mobile.waitForElementPresent(findTestObject('Drag Sort Demos/Handle Drag and Drop/text_Brad Mehldau'), 30)
 
 
 
'Verify Element visible of "Brad Mehldau"'
 
Mobile.verifyElementVisible(findTestObject('Drag Sort Demos/Handle Drag and Drop/text_Brad Mehldau'), 30)
 
 
 
'Use the dragAndDrop keyword to perform the drag and drop action.'
 
Mobile.dragAndDrop(findTestObject('Drag Sort Demos/Handle Drag and Drop/text_Brad Mehldau'), findTestObject('Drag Sort Demos/Handle Drag and Drop/text_Kurt Rosenwinkel'),
 
     30)
 
 
 
Mobile.delay(50, FailureHandling.STOP_ON_FAILURE)
 
 
 
Mobile.closeApplication()

```

For further instructions and help, please refer to [Katalon User Guide](/x/oArR) or [Katalon Forum](https://forum.katalon.com/).