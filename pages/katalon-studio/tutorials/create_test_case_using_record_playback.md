---
title: "Creating test cases using Record & Playback"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/create_test_case_using_record_playback.html
redirect_from:
    - "/katalon-studio/tutorials/sample_web_automation_test_project.html"
    - "/katalon-studio/tutorials/create_test_case_using_record_playback.html"
description: "Test recording is the easiest way for new automation testers to start learning test automation.This article illustrates how to record the test case easily."
---
Test recording is the easiest way for new automation testers to start learning test automation. Identifying objects on applications is time-consuming. The [Web Recorder Utility](http://docs.katalon.com/pages/viewpage.action?pageId=5118055) function captures your actions being performed on the application and converts them into runnable code in the back-end. 

You can quickly automate a few functionalities of your app and save time by recording actions that have to be performed many times in iterative builds. This function supports recording and running the same tests on multiple browsers. This document will show you how to:

1. [Record test with the Record Web function](https://docs.katalon.com/katalon-studio/tutorials/create_test_case_using_record_playback.html#recording-your-first-test-with-katalon-studio-record-web-function)
2. [Rename Page Folders and Elements while runtime recording](https://docs.katalon.com/katalon-studio/tutorials/create_test_case_using_record_playback.html#how-to-change-the-page-folder-names-and-elements-names-while-runtime-recording)

Record Test with the Record Web function
-----------------------------------------------------------------

**Scenario:** To make an appointment

1.  Launch the application under test (**Example**: [http://demoaut.katalon.com/](http://demoaut.katalon.com/))
2.  Click the **Make Appointment** button
3.  Enter a valid username, password, and click **Login**
4.  Make an appointment

Follow the below steps to get familiar with the Record & Playback feature for Web UI tests

**Step 1:** Launch Katalon Studio and click **New > Test Case** on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.

![Create-Test-Case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Create-Test-Case.png)

**Step 2:** Click **Record Web** from the main toolbar.

![Record-Web](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Web.png)

**Step 3:** The **Record** dialog will be displayed.

![Web recorder](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Dialog-300x254.png)

**Step 4:** Select a browser, then click **Record** to start recording the test case.

![recording-test-case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recording-test-case.png)

**Step 5:** Once your application has been launched, click on the **Make Appointment** button. You will be directed to the Login page.

![Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Make-Appointment-e1513053243772-1024x512.png)

**Step 6:** Enter valid username and password (John Doe and ThisIsNotAPassword), then click **Login**. 

![Login-to-Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-to-Make-Appointment-e1513053339776.png)

**Step 7:** Once the **Make Appointment** page has been loaded, select the value **Hongkong CURA Healthcare Center** from the Facility drop down menu.

![Make-Appointment-page](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Make-Appointment-page-e1513067371591.png)

**Step 8:** Select the **Apply for hospital readmission** checkbox.

**Step 9:** Then move the cursor to click on the **Medicaid** checkbox.

**Step 10:** Click the calendar icon next to **Visit Date (Required)**. Select a date.

![Calendar](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Calendar-e1513067438109.png)

**Step 11:** Enter text in the **Comment** field.

**Step 12:** Click **Book Appointment**.

**Step 13:** You can stop the recording anytime by clicking **Stop**. Katalon Studio allows users to select the Selection Method for the captured objects. The **Basic mode** is recommended to manual testers who have just started automated testing. With basic mode, Katalon Studio will automatically generate robust and unique selectors for captured objects.

Advanced testers who want to manually input the selectors have the option to choose between **CSS** and **XPath** modes. For more details about Selection Method, refer to this [guide](https://docs.katalon.com/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web.html).

![Katalon Web Recorder](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Selection-Method-for-captured-objects.png)

**Step 14:** When you are done recording, click **OK** to save the recorded actions into Katalon Studio. 

You will be prompted to save captured objects to the **Object Repository**, which can be reused whenever needed. You can also create a folder to maintain page objects in desired structure. Click **OK** to continue.

![Object-Repository](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Object-Repository.png)

**Step 15:** Recorded objects and actions are saved in the test case as shown below.

![Recorded-objects](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Recorded-objects-e1513067504997.png)

Click **Run** to execute recorded test cases in your desired browser.

**Script Code for Record and Playback**

```groovy
WebUI.openBrowser('')
WebUI.navigateToUrl('http://demoaut.katalon.com/')</p>
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.selectOptionByValue(findTestObject('Page_CURA Healthcare Service (2)/select_facility'), 'Hongkong CURA Healthcare Center',
 
true)
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/input_programs'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/div_input-group-addon'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/td_3'))
 
WebUI.setText(findTestObject('Page_CURA Healthcare Service (2)/textarea_comment'), 'Katalon')
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/button_Book Appointment'))
 
WebUI.closeBrowser()

```

Rename Page Folders and Elements while Recording
------------------------------------------------------------------------------

To organize your test scripts in page object pattern, you need to add test objects in the folder corresponding to the page. This will help you reuse and maintain the objects.

**Scenario:** Login with valid data

1.  Launch the application under test (**Example**: [http://demoaut.katalon.com/](http://demoaut.katalon.com/))
2.  Click the **Make Appointment** button
3.  Enter a valid username, password, and click **Login**

**Step 1:** Launch Katalon Studio and click **First Test Case** on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.

![Change-Element-Name](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Change-Element-Name.png)

**Step 2:** Click **Record Web** on the main toolbar.

![Record-Web](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Web.png)

**Step 3:** The **Record** dialog will be displayed. Select a browser and click the **Record** button to start recording the test case.

![recording-test-case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recording-test-case.png)

**Step 4:** Once your application has been launched, click on the **Make Appointment** button. You will be directed to the Login page.

![Record-Dialog-Box](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Dialog-Box.png)

**Step 6:** Rename the page name from "Page_CURA Healthcare Service" to "Page_Home Page."

**Step 7:** In the **Captured Objects** frame, select the **a_Make Appointment** element.

**Step 8:** Rename the element name from "a_Make Appointment" to "button_Make Appointment."

![Web-Recorder-Utility](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Web-Recorder-Utility.jpg)

**Step 9:** Go back to the recording browser and continue to record. Click **Login**.

![Login-to-Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-to-Make-Appointment-e1513053339776.png)

**Step 10:** Repeat the same steps above to change the name of the object **Login** and its folder.

**Step 11:** Rename the Page name from "Page_CURA Healthcare Service" to "Page_Login."

![Web-Recorder-Utility-2](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Web-Recorder-Utility-2.jpg)

**Step 12:** You can stop recording by clicking **Stop**. Click **OK** to save recorded actions into Katalon Studio.

**Step 13:** You will be prompted to save the captured objects to **Object Repository,** which can be reused whenever needed. You can also create a folder to maintain page objects in your desired structure. Click **OK** to continue.

![Objects-repository](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Objects-repository.png)

**Step 14:** Recorded objects and actions are saved in the test case as shown below.

![Recorded-objects-and-actions](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Recorded-objects-and-actions-e1513069057639.png)

Click **Run** to execute the recorded test cases in your desired browser.

**Source Code:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject</p>
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
WebUI.openBrowser('')
 
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
WebUI.click(findTestObject('Page_Home Page/button_Make Appointment'))
 
WebUI.click(findTestObject('Page_Login/button_Login'))
 
WebUI.closeBrowser()


```

Thus we can record the actions being performed using Katalon Studio. However, there are a few actions which cannot be recorded.

### What cannot be recorded?

Though recording your tests saves time, we cannot validate some scenarios such as Web Table handling, switching to multiple frames, switching to windows, handling captcha, image recognition, and video playbacks. 

You can download the source code [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, please refer to [Recording WebUI Test](/x/RwnR) and [Record and Playback](https://www.katalon.com/videos/tutorial-videos/create-test-case-record-playback/) tutorials.
