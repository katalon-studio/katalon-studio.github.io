---
title: "Solving Pop-up dialog issue with Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/pop_up_dialog_issue.html
redirect_from:
    - "katalon-studio/tutorials/pop_up_dialog_issue.html"
description: "When performing automation testing, you may sometimes deal with pop-up dialog issue. This tutorial will show you how to deal with that."
---
When performing automation testing, you may sometimes deal with pop-up dialog issue that needs to be handled differently from normal test objects. This tutorial shows you how to deal with pop-up controls.

What is a pop-up?
-----------------

A pop-up is a graphical display area, usually in a form of a small window that appears ("pop-up") in the foreground of the current interface.

What are issues with pop-up?
----------------------------

The problem with pop-ups is that they usually show up unexpectedly. There is no certain way to overcome this except that you need to understand the behavior of the application and insert scripts accordingly to handle the situation. Another issue with pop-ups is that they are not from the AUT so you need to handle them with dedicated keywords.

Below are a few commonly used pop-ups which might cause problems in your test web automation:

*   New browser window.
*   Alert: An alert box is often used to make sure that information comes through to the user.

![Alert box Katalon Studio](../../images/katalon-studio/tutorials/pop_up_dialog_issue/alert-box-300x94.png)

*   Custom modal dialog: A modal dialog is a dialog box/pop-up window that is displayed on top of the current page.

![Custom modal dialog](../../images/katalon-studio/tutorials/pop_up_dialog_issue/sign-in.png)

*   Native Window dialog. This dialog is common in case of testing uploading files

![Native Window dialog](../../images/katalon-studio/tutorials/pop_up_dialog_issue/Native-Window-dialog.png)

**A suggested solution for handling pop-ups using Katalon Studio:**

To handle such pop-ups as described, you need to capture them first using the Object Spy feature in Katalon Studio. After that, you use "**Switch To…**" keywords of Katalon Studio to set focus to the specified pop-up as needed.

The following screenshot shows simple scripts on how to handle a pop-up using the [Switch To Window Title](/display/KD/%5BWebUI%5D+Switch+To+Window+Title) keyword.

![Solving Pop-up dialog issue](../../images/katalon-studio/tutorials/pop_up_dialog_issue/Switch-To-Window-Title-keyword..png)

```groovy
'Open browser and navigate to elated site'
WebUI.openBrowser('http://www.elated.com/articles/javascript-tabs/')
 
'Maximize current browser window'
WebUI.maximizeWindow()
 
'Click on \'Tweet\' button in iframe'
WebUI.click(findTestObject('Page_Elated/lnk_Tweet'))
 
'Switch to window that has title \'Share a link on Twitter\''
WebUI.switchToWindowTitle('Share a link on Twitter')
 
'Enter email'
WebUI.setText(findTestObject('Page_Share a link on Twitter/txt_Twitter_Login_Email'), email)
 
'Enter password'
WebUI.setText(findTestObject('Page_Share a link on Twitter/txt_Twitter_Login_Password'), password)
 
'Verify Tweet message is displayed for successful login'
WebUI.verifyTextPresent("Share a link with your followers",false)
 
WebUI.closeBrowser()

```

Where:

| Keyword | Description |
| --- | --- |
| [Switch To Window Title](/display/KD/%5BWebUI%5D+Switch+To+Window+Title) | Switch to the window identified by a given title. |
| [Switch To Window Index](/display/KD/%5BWebUI%5D+Switch+To+Window+Index) | Switch to the window identified by a given index. |
| [Switch To Window Url](/display/KD/%5BWebUI%5D+Switch+To+Window+Url) | Switch to the window identified by a given URL. |

If you want to switch back to the default window (parent), use the [Switch To Default Content](/display/KD/%5BWebUI%5D+Switch+To+Default+Content) keyword. For example_:_

```groovy
'Open browser and navigate to a site that has an iframe'
WebUI.openBrowser(GlobalVariable.G_SiteURL)
 
'Switch to iframe'
WebUI.switchToWindowTitle('Share a link on Twitter')
 
'Switch back to default content'
WebUI.switchToDefaultContent()
 
'Close browser'
WebUI.closeBrowser()

```

Where:

| Keyword | Description |
| --- | --- |
| [Switch To Default Content](/display/KD/%5BWebUI%5D+Switch+To+Default+Content) | Switch back to the default window, after working with iFrame windows. |

  
To deal with Windows' native dialogs such as uploading files, users use the [Upload File](/display/KD/%5BWebUI%5D+Upload+File) keyword. For example:

```groovy
'Open browser and navigate to a site that has upload control'
WebUI.openBrowser('http://the-internet.herokuapp.com/upload')
 
'Use Upload File keyword to deal with the dialog. Noted that the keyword will proceed to click on the Choose File button as specified'
WebUI.uploadFile(findTestObject('choosefile_button'), 'D:\\test-photo.png')
 
'Close browser'
WebUI.closeBrowser()

```

Where:

| Keyword | Description |
| --- | --- |
| [Upload File](/display/KD/%5BWebUI%5D+Upload+File) | Specify the file for the upload dialog**.** |

Regarding the browser's popups as mentioned above, you can [modify Desired Capabilities](/display/KD/Execution+Settings#ExecutionSettings-DesiredCapabilities) of the browser to prevent them from displaying. You can refer to [this ticket](https://forum.katalon.com/discussion/1417/disable-chrome-password-manager) for an example on how to disable the Chrome password manager.

Example
-------

Here in this example, When I clicked a link, it will open a new window. So I want to switch to that window to perform actions on the newly opened window. We can handle it using Katalon Studio built-in keywords as shown below.

**Switch to Window Index:**

We need to use it when you want to switch to the second window (index 1).

**Manual Mode:**

![Switch To Window Index](../../images/katalon-studio/tutorials/pop_up_dialog_issue/Switch-to-Window-Index.png)

**Script Mode:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
'Open browser and navigate to website '
 
WebUI.openBrowser('http://the-internet.herokuapp.com/windows')
 
'Maximize the window'
 
WebUI.maximizeWindow()
 
'Click on Click Here link'
 
WebUI.click(findTestObject('Windows/Link_Click Here'))
 
'Switch to New window by Switch to Window index method'
 
WebUI.switchToWindowIndex(1)
 
'Capturing the Heading of the New Window text and Storing it in a variable'
 
Heading_NewWindow = WebUI.getText(findTestObject('Windows/Heading_New Window'))
 
'Validating the heading so that it is navigated to desired window by Switch To Window Url Method'
 
WebUI.verifyEqual(Heading_NewWindow, 'New Window')

```

**Switch To Window Title :**

Switch to the window with given title.

**Manual Mode:**

![Switch To Window Title ](../../images/katalon-studio/tutorials/pop_up_dialog_issue/switch-to-window-title.png)

**Script Mode:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
'Open browser and navigate to website '
 
WebUI.openBrowser('http://the-internet.herokuapp.com/windows')
 
'Maximize the window'
 
WebUI.maximizeWindow()
 
'Click on Click Here link'
 
WebUI.click(findTestObject('Windows/Link_Click Here'))
 
'Switch to New window by Switch to Window Title method'
 
WebUI.switchToWindowTitle('New Window')
 
'Capturing the Heading of the New Window text and Storing it in a variable'
 
Heading_NewWindow = WebUI.getText(findTestObject('Windows/Heading_New Window'))
 
'Validating the heading so that it is naviagted to desired window by Switch To Window Title Method'
 
WebUI.verifyEqual(Heading_NewWindow, 'New Window')

```

**Switch To Window Url :**

Switch to the window with given URL.

**Manual Mode:**

![Switch To Window Url ](../../images/katalon-studio/tutorials/pop_up_dialog_issue/switch-to-window-url.png)

**Script Mode:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
'Open browser and navigate to website '
 
WebUI.openBrowser('http://the-internet.herokuapp.com/windows')
 
'Maximize the window'
 
WebUI.maximizeWindow()
 
'Click on Click Here link'
 
WebUI.click(findTestObject('Windows/Link_Click Here'))
 
'Switch to New window by Switch to Window URL method'
 
WebUI.switchToWindowUrl('http://the-internet.herokuapp.com/windows/new')
 
'Capturing the Heading of the New Window text and Storing it in a variable'
 
Heading_NewWindow = WebUI.getText(findTestObject('Windows/Heading_New Window'))
 
'Validating the heading so that it is naviagted to desired window by Switch To Window Url Method'
 
WebUI.verifyEqual(Heading_NewWindow, 'New Window')

```

That is some examples of how we handle window using Katalon Studio. You can download the source code [here](https://github.com/katalon-studio/katalon-web-automation).

_**Exception**_

_Noted that _**_NoSuchWindowException_**_ exception will be thrown when window target to be switched doesn't exist._

For further instructions and help, please refer to [\[WebUI\] Window](/x/RwnR) and join us on [Katalon Forum](https://forum.katalon.com/).