---
title: "How to use synchronization commands while recording"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/synchronization_commands_recording.html
description: "Synchronization is a mechanism which allows multiple threads to work in parallel. To avoid execution failures, we need to use synchronization commands."
redirect from:
    - "/katalon-studio/tutorials/synchronization_commands_recording.html"
    
---
What is Synchronization?
------------------------

Synchronization is a mechanism which allows multiple threads to work in parallel. In test automation, the application under test (AUT) and the automation tool we employ should collaborate to progress the test execution. In order to achieve this and avoid execution failures, we need to use synchronization commands. This tutorial shows you how to do just that.

### Scenario:  Login with valid credentials

1.  Launch the application under test (URL: [http://demoaut.katalon.com/](http://demoaut.katalon.com/))
2.  Use _Wait For Page Load_ keyword
3.  Use _Wait For Element Visible_ keyword for Make Appointment button
4.  Click on Make Appointment
5.  Use _Wait For Element Visible_ for Login button
6.  Enter valid username, password and click on Login button

**At runtime recording, we can add synchronization commands** **to wait for page load, wait for element present, wait for element visible,** **etc.**

**Step 1:** Launch Katalon Studio and click on the **New Test Case** button from the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.

**Step 2:** Click on **Record Web** from the main toolbar.

![use synchronization commands while recording in Katalon Studio](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio1.png)

**Step 3:** The **Record** dialog would be displayed, where **recorded actions** will be shown.  
Provide the URL of application under test.

![Provide the URL of application under test](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step31.png)

**Step 4:** Select a browser and click on the **Record** button to start recording the test case

![ start recording the test case](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-4.png)

**Step 5:** Once your application is launched, move the cursor to **'Make Appointment'** and click on the button (wait for Login page gets loaded).

![move the cursor to 'Make Appointment'](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-5.png)

**Step 6:** You can add synchronization commands in runtime recording in the '**Recorded Actions**' pane. Select a step at which the **synchronization commands** will be added. Click on Add.

![add synchronization commands in runtime recording](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-6.png)

**Step 7:** Click on **Add Synchronization Point**

![Add Synchronization Point](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-7.png)

**Step 8:** The system will add the default command **Wait For Element Present**

**Step 9:** Now we need to change from **Wait For Element Present** keyword to **Wait For Page Load.** Double click on **Wait For Element Present** in **Action** column to display the drop down menu. Select **Wait For Page Load** keyword.

![Wait For Page Load keyword](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-9.png)

**Step 10:** Here, we have selected '**Wait For Page Load**' keyword

**Step 11:** We need to provide the expected time as an input for the command \[Katalon uses the default time of 30 seconds\]. Tap on 'Action Data' of **Wait For Page Load** and give 45 seconds \[as you typically need\] then click on **OK.**

![Tap on 'Action Data' of Wait For Page Load](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-10.png)

**Step 12:** It should display the **Wait For Page Load** command with the provided input as shown below. Now Katalon Studio will wait 45 secs for the page to gets fully loaded to execute next command. These synchronization commands avoid execution failures.  
![ Wait For Page Load command](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-12.png)

**Step 13:** You can pause, resume the recording whenever you need it. Let us continue with recording few more actions. Switch to the browser in which you're recording, move to **Make Appointment** button and click on **Make Appointment** button**.**

![Make Appointment button](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-13.png)

**Step 14:** Now to wait for specific element to be loaded and to perform action, we need to add '**Wait for Element Present'** command before click on '**Make Appointment**' button. let us wait for the button loaded in the DOM

**Step 15:** So here,  we have added two wait commands, one is to wait till page gets loaded and other is wait till element gets displayed as shown below**.** The reason behind adding two waits is that, though page has been loaded sometimes elements won't be present in the DOM (referring to Ajax based applications mainly).

![added two wait commands](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-15.png)

**Step 16:** Having said that, we need to provide the expected time as an input for all the wait commands. Tap on Action Data of **Wait for Element Present** and provide 15 seconds as expected time interval and click on **OK** Button.

**Step 17:** Recording pane should look like as shown below**.** Unlike **'Wait for Page Load'** command '**Wait for Element Present**' command need another parameter as web element for which we are waiting for.

**Step 18:** To provide web element as a parameter**,** click on **Element** column of **Wait for Element Present,** now it will display **Captured Objects** dialog box. Choose the object and click on **OK** Button.

**Step 19:** The recorded actions with synchronization commands should look like as shown below

![The recorded actions with synchronization commands ](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-17.png)

**Step 20:** Let's continue the recording, in the browser move the cursor to **Login Button** and click on **Login Button.**

![move the cursor to Login Button and click on Login Button](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-20.png)

**Step 21:** Now add another wait command up above the left click on the login button.

**Step 22:** Click on **Add** button and click on **Add synchronization point,** it will add default command **Wait for Element Present.**

**Step 23:** Then we need to change Wait for Element Present to Wait for Element Visible. Double click on action method of **Wait for Element Present,** then it would display the down arrow, then click on down arrow button it display all the **synchronization commands** click on **wait for Element Visible** command \[or use others as per you needed\].

![change Wait for Element Present to Wait for Element Visible](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-23.png)

**Step 24:** Provide expected time as an input for**Wait for Element Visible** command and click on **OK** Button.

**Step 25: Wait for Element Visible** command should be displayed with expected time. Similar to Wait for Element Present, we need to provide web element as parameter for this command

**Step 26:** To provide parameter, click on the element from **Element** column, it will display the page object dialog box and choose the **object** of **Login Button** and click on **OK** Button.

**Step 27:** Your recorded test script should be as shown below

**Step 28:** You can stop recording anytime by clicking on '**Stop**'. When you are done with recording, click **OK** to save recorded actions into Katalon Studio.

**Step 29:** You will be prompted to **save** captured objects into **Object Repository** which can be reused whenever needed**.** You can also create a folder to maintain page objects in desired structure. Click **OK** to continue**.**

**Step 30:** Recorded objects and actions are saved in the test case **Manual mode** as shown below.

![Manual mode Katalon Studio](../../images/katalon-studio/tutorials/synchronization_commands_recording/Test-design-record-web-Katalon-Studio-Step-30.png)

Click on **Script Tab** to view the generated code. Katalon Studio allows users to modify the script from the script mode as well. All the above recorded actions can be modified in the script mode.  
**Script code :**

```groovy
WebUI.openBrowser('')
 
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
WebUI.waitForPageLoad(45)
 
WebUI.waitForElementPresent(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'), 45)
 
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
WebUI.waitForElementVisible(findTestObject('Page_CURA Healthcare Service (1)/button_Login'), 45)
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.closeBrowser()

```

It is recommended to add synchronization while recording automation test cases in the [manual mode](/katalon-studio/tutorials/create-test-case-using-manual-mode/) or [script mode](/katalon-studio/tutorials/create-test-case-using-script-mode/). It is also a good practice to use wait commands to avoid execution failures. Download source code [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, please refer to [Recording WebUI Test](/x/Y4Iw) tutorial.