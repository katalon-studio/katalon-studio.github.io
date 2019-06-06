---
title: "Creating Test Cases Using Record"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_test_case_using_record_playback.html
redirect_from:
    - "/katalon-studio/tutorials/sample_web_automation_test_project.html"
description: "Test recording is the easiest way for new automation testers to start learning test automation. This article illustrates how to easily record the test case."
---
Test recording is the easiest way for new automation testers to start learning test automation. Identifying objects on applications is time-consuming and painful. The [Web Recorder Utility](http://docs.katalon.com/pages/viewpage.action?pageId=5118055) captures your actions being performed on application and converts them into runnable code in the back-end. Quickly automate app functionalities and save time using this feature by recording actions that normally have to be performed many times in iterative builds. This Katalon Studio function supports recording and running the same tests on multiple browsers. Read this article to find out how easy it is to record.

1.  [Recording your first test with Katalon Studio Record Web Function](#record-first-test)
2.  [How to change the Page Folder names and elements names while runtime recording](#change-page-folder-names)
3.  [How to add Katalon Commands while recording](#add-katalon-commands)

Recording your first test with Katalon Studio Record Web Function
-----------------------------------------------------------------

**Scenario:** To make an appointment

1.  Launch the Application under test (**URL**: [http://demoaut.katalon.com/](http://demoaut.katalon.com/))
2.  Click on **Make Appointment** button
3.  Enter valid username and password then click on **Login** button
4.  Make an appointment

Follow the steps below to become familiar with the Record & Playback features for Web UI Test:

**Step 1:** Launch Katalon Studio and click **New > Test Case** on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.

![Create-Test-Case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Create-Test-Case.png)

**Step 2:** Click on **Record Web** from the main toolbar.

![Record-Web](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Web.png)

**Step 3:** The **Record** dialog will display.

![Web recorder](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Dialog-300x254.png)

**Step 4:** Select a browser and click on the **Record** button to start recording the test case.

![recording-test-case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recording-test-case.png)

**Step 5:** Once your application has been launched, move the cursor to **Make Appointment** button and click on the button (wait until the Login page is loaded).

![Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Make-Appointment-e1513053243772-1024x512.png)

**Step 6:** Enter valid username & password (John Doe & ThisIsNotAPassword) and click on '**Login**' button (wait until the Login page is loaded).

![Login-to-Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-to-Make-Appointment-e1513053339776.png)

**Step 7:** Once Make Appointment page has been loaded, select the value **Hongkong CURA Healthcare Center** from the Facility drop-down.

![Make-Appointment-page](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Make-Appointment-page-e1513067371591.png)

**Step 8:** Click the checkbox **Apply for hospital readmission**.

**Step 9:** Click the radio button **Medicaid**.

**Step 10:** Click the calendar icon '**Visit Date'** and click on the date needed.

![Calendar](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Calendar-e1513067438109.png)

**Step 11:** Enter text in the **Comment** field.

**Step 12:** Click the **Book Appointment** button.

**Step 13:** You can stop recording at any time by clicking **Stop**. Katalon Studio allows users to select Selection Method for captured objects. **Basic mode** is recommended for manual testers who have just begun their automation journey. With basic mode, Katalon Studio's intelligent selector generator will **automatically generate** robust and unique **selectors** for captured objects.

For advanced testers who wish to **manually input selectors**, choose **CSS** or **XPath mode**. For more details about Selection Method, refer to this [guide](http://docs.katalon.com/pages/viewpage.action?pageId=5118311).

![Katalon Web Recorder](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Selection-Method-for-captured-objects.png)

**Step 14:** When the recording is complete, click **OK** to save recorded actions into Katalon Studio. You will be prompted to save **captured objects** into **Object Repository** which can be reused whenever needed. You can also create a folder to maintain page objects in desired structure. Click **OK** to continue.

![Object-Repository](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Object-Repository.png)

**Step 15:** Recorded objects and actions are saved in the test case as shown below.

![Recorded-objects](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Recorded-objects-e1513067504997.png)

Click **Run** to execute recorded test cases in desired browser.

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

How to change the Page Folder names and Elements names while runtime recording
------------------------------------------------------------------------------

To organize your test scripts in page object pattern, add test objects in the folder corresponding to the page. This helps reuse and maintain the objects.

**Scenario:** Login with valid data

1.  Launch the Application under test (**URL**: [http://demoaut.katalon.com/](http://demoaut.katalon.com/)).
2.  Click **Make Appointment** button (change page and element names).
3.  Enter valid username and password then click the **Login** button (change page and element names).

**Step 1:** Launch Katalon Studio and click on the **First Test Case** button on the main toolbar. Provide a name for your test case and click **OK** to create an empty test case.

![Change-Element-Name](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Change-Element-Name.png)

**Step 2:** Click on **Record Web** from the main toolbar.

![Record-Web](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Web.png)

**Step 3:** The **Record** dialog will display. Select a browser and click on the **Record** button to start recording test case.

![recording-test-case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recording-test-case.png)

**Step 4:** Once your application has been launched, click **Make Appointment** button (wait until the Login page is loaded).

![Record-Dialog-Box](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Dialog-Box.png)

**Step 6:** Rename the page Name of **"Page_CURA Healthcare Service"** to **"Page_Home Page"**.

**Step 7:** Select **"a_Make Appointment"** element in Captured Objects Frame.

**Step 8:** Rename element name of **"a_Make Appointment"** to **"button_Make Appointment"**.

![Web-Recorder-Utility](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Web-Recorder-Utility.jpg)

**Step 9:** Continue recording while switching to recording browser and click **Login Button**.

![Login-to-Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-to-Make-Appointment-e1513053339776.png)

**Step 10:** Repeat the same steps above to change the name of object **Login** and its folder.

**Step 11:** Rename the Page Name of **"Page_CURA Healthcare Service"** to **"Page_Login"**.

![Web-Recorder-Utility-2](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Web-Recorder-Utility-2.jpg)

**Step 12:** You can stop recording anytime by clicking on **Stop**. When the recording is complete, click **OK** to save recorded actions into Katalon Studio.

**Step 13:** You will be prompted to save captured objects into Object Repository which can be reused whenever needed. You can also create a folder to maintain page objects in desired structure. Click **OK** to continue.

![Objects-repository](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Objects-repository.png)

**Step 14:** Recorded objects and actions are saved in the test case as shown below:

![Recorded-objects-and-actions](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Recorded-objects-and-actions-e1513069057639.png)

Click **Run** to execute recorded test cases in desired browser.

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

How to add Katalon Commands while recording
-------------------------------------------

**Scenario:** Verify the Login functionality with validations

1.  Launch the Application under test (url: http://demoaut.katalon.com/)
2.  Verify the Make Appointment button is present
3.  Click on **Make Appointment** button
4.  Verify the Login button is visible
5.  Enter valid username and password then click on **Login** button

At runtime recording, Katalon Studio allow users to add additional commands such as basic action commands, validation point commands, and synchronization commands.

**Step 1:** Launch Katalon Studio and click **New Test Case** button on the main toolbar. Provide a name for your test case and click **OK** to create an empty test case.

![Create-Test-Case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Create-Test-Case.png)

**Step 2:** Click on **Record Web** from the main toolbar.

![Record-Web](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Web.png)

**Step 3:** The **Record** dialog will display.

**![Record-Dialog](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Dialog.png) **

**Step 4:** Select a browser and click on the **Record** button to start recording test case.

![recording-test-case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recording-test-case.png)

**Step 5:** Once your application has been launched, click **Make Appointment** button (wait until Login page is loaded).

![Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Make-Appointment-e1513053243772.png)

**Step 6:** Validation commands can be added in runtime record. Select the step where to add the next line of **validations commands**. Switch to **Katalon record dialog** box and click the **Add** Button. 

![Katalon-Record-Dialog](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Katalon-Record-Dialog.png)

**Step 7:** Click on **Add Validation Point** to add default command **Verify Element Present**.

**Step 8:** Default time to **Verify Element Present** in Katalon Studio is 30 seconds. Select Action data of **Verify Element Present** and then click **OK** button.

![Verify-Element-Present](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Verify-Element-Present.png)

**Step 9:** The **Verify Element Present** command will display with time on **record dialog box**.

**Step 10:** We need to pass the object for **Verify Element Present** command. Click on element column of **Verify Element Present** to display the page object dialog box. Choose the object of **Login Button** \[as needed\] and click **OK** Button.

![Login-Verify-Element-Present](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-Verify-Element-Present.png)

**Step 11:** **Verify Element Present** command displayed with modified object.

**Step 12:** Continue recording during switch to recording browser and click **Make Appointment**.

![Login-to-Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-to-Make-Appointment-e1513053339776.png)

**Step 13:** Add validation for **Make Appointment** button by shifting to **Record Dialog box**.

**Step 14:** Click on **Add** Button to display the drop-down list of commands list, then click on **Add Validation point**.

**Step 15:** Default command **Verify Element Present** will be added.

**Step 16:** Change **Verify Element Present** command to **Verify Element Visible**. Double-click on action column of **Verify Element Present** to display the down arrow, then click on down arrow to display **all** **Validation commands**. Click on **Verify Element Visible** command \[or use others as needed\].

![Verify-Element-Visible](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Verify-Element-Visible.png)

**Step 17:** The changed validation point on **Record dialog** box will be displayed.

**Step 18:** We need to pass the object for **Verify Element Visible** command. Click on element column of **Verify Element Visible** to display the **page object** dialog box. Expand the page objects folder and choose the object of **Login Button** \[as needed\] and click **OK** button.

**Step 19:** **Verify Element Visible** command is displayed with modified object.

**Step 20:** You can stop recording at any time by clicking **Stop**. When the recording is complete, click **OK** to save recorded actions into Katalon Studio.

![recorded-actions](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recorded-actions.png)

**Step 21:** You will be prompted to save captured objects into Object Repository which can be reused whenever needed. You can also create a folder to maintain page objects in desired structure. Click **OK** to continue.

**Step 22:** Recorded objects and actions are saved in the test case as shown below:

![Recorded-objects-and-actions-3](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Recorded-objects-and-actions-3-e1513069217546.png)

**Script code:**

```groovy
WebUI.openBrowser('')</p>
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
WebUI.verifyElementPresent(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'), 30)
 
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
WebUI.verifyElementVisible(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.closeBrowser()

```

Actions performed using Katalon Studio can be recorded, but keep in mind a few actions cannot be recorded. Thus we can record the actions being performed using Katalon Studio. There are few actions which cannot be recorded.

### What cannot be recorded?

Though recording tests saves time, we cannot validate a few scenarios such as Web Table handling, switching to multiple frames, switching to Windows, handling captcha, image recognition, and video playbacks. Here are the main drawbacks:

a) Using a recorder cannot handle dynamically changing elements (since Xpath/CSS needs to be customized).

b) Code cannot be reused wherever needed as it can be challenging to debug.

You can download the source code [here](https://github.com/katalon-studio/katalon-web-automation).

For more information and help, please refer to [Recording WebUI Test](/x/RwnR) and [Record and Playback](https://www.katalon.com/videos/tutorial-videos/create-test-case-record-playback/) tutorials.
