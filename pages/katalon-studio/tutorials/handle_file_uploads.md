---
title: "How to Handle File Uploads"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle_file_uploads.html
redirect_from:
    - "katalon-studio/tutorials/handle_file_uploads.html"
description: "This tutorial will show you how to handle the file upload feature and verifying downloaded files using Katalon Studio."
---
In general, we need to automate scenarios like uploading a file into the application for attaching profile pictures or documents. This tutorial demonstrates handling the file upload feature and verifying downloaded files using Katalon Studio.

What is File Upload in testing?
-------------------------------

The file upload widget is the input tag having attribute **type** equal to **file**. It allows us to upload all file formats (.jpg, .png, .txt…)

-------------------------------
Since Katalon Studio 6.1.5, please install [Upload File Keywords](https://store.katalon.com/product/69/UploadFile-Keywords) plugin to use this feature.

<details><summary>Deprecated Content</summary>

Let's work on the case in which we need to upload a file and validate whether the file is uploaded.

Steps:

*   Launch the URL of the application
*   Maximize the window
*   Use the file upload widget to upload a file

**Manual Mode**:

![Handle File Uploads testing Manual Mode](../../images/katalon-studio/tutorials/handle_file_uploads/Handle-File-Uploads-Manual-Mode-1024x167.png)

We can also use the **script mode**. Below script is the code to upload a file and validate the uploaded file.

**Script Mode:**

```groovy
'Open browser and navigate to given URL'
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\Katalon Articles\\\\File Upload\\\\UploadFile.html')
'Maximize the window\r\n'
WebUI.maximizeWindow()
'Passing the path of the file'
WebUI.uploadFile(findTestObject('Upload File'), 'C:\\\\Users\\\\Public\\\\Pictures\\\\Sample Pictures\\\\Desert.jpg')
 
'Capturing the file name after upload and storing it in a variable'
FilePath = WebUI.getAttribute(findTestObject('Upload File'), 'value')
 
'Verifying the Actual path and Expected path of file'
WebUI.verifyMatch(FilePath, 'C:\\fakepath\\Desert.jpg', false)

```

File upload using Send Keys
---------------------------

We can also upload files by using the **Send Keys** method. **Send Keys** works for the **input** tag having **type** equal to **file**.

Steps:

*   Launch the URL of the application
*   Maximize the window
*   Use the Send Keys method to upload a file.
*   Send Keys accepts file URL as string.

**Manual Mode:**

![File Uploads using send key](../../images/katalon-studio/tutorials/handle_file_uploads/Sendkeys_Upload_file_Manual-1024x208.png)

**Script Mode:**

```groovy
'Open browser and navigate to given URL'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\Katalon Articles\\\\File Upload\\\\UploadFile.html')
 
'Maximize the window\r\n'
WebUI.maximizeWindow()
 
'Uploading the File using Send Keys method by passing the File path'
WebUI.sendKeys(findTestObject('Upload File'), 'C:\\\\Users\\\\Public\\\\Pictures\\\\Sample Pictures\\\\Desert.jpg')
 
'Capturing the file name after upload and storing it in a variable'
FilePath = WebUI.getAttribute(findTestObject('Upload File'), 'value')
 
'Verifying the Actual path and Expected path of file'
WebUI.verifyMatch(FilePath, 'C:\\fakepath\\Desert.jpg', false)

```

Verify a Downloaded File
------------------------

After downloading a file from the application we need to verify whether the file is successfully downloaded and saved in a folder.

For that, we need to set preferences for Firefox, as shown in the Image below.

![Verify a Downloaded file](../../images/katalon-studio/tutorials/handle_file_uploads/Verify-a-Downloaded-File.png)

**Script Mode:**

```groovy
import org.openqa.selenium.By as By
import org.openqa.selenium.WebDriver as WebDriver
import org.testng.Assert as Assert
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
 
'Define Custom Path where file needs to be downloaded'
String downloadPath = 'D:\\FileDownloadChecking'
 
'Launch a browser and Navigate to URL'
WebUI.openBrowser(GlobalVariable.FileDownloadCheckingURL)
 
WebDriver driver = DriverFactory.getWebDriver()
 
'Clicking on a Link text to download a file'
driver.findElement(By.linkText('smilechart.xls')).click()
'Wait for Some time so that file gets downloaded and Stored in user defined path'
WebUI.delay(10)
 
'Verifying the file is download in the User defined Path'
Assert.assertTrue(isFileDownloaded(downloadPath, 'smilechart.xls'), 'Failed to download Expected document')
 
boolean isFileDownloaded(String downloadPath, String fileName) {
    long timeout = 5 * 60 * 1000
    long start = new Date().getTime()
    boolean downloaded = false
    File file = new File(downloadPath, fileName)
    while (!downloaded) {
        KeywordUtil.logInfo("Checking file exists ${file.absolutePath}")
        downloaded = file.exists()
        if (downloaded) {
            file.delete() // remove this line if you want to keep the file
        } else {
            long now = new Date().getTime()
            if (now - start > timeout) {
                break
            }
            Thread.sleep(3000)
        }
    }
    return downloaded
}

```

We have just learned how to handle file uploads and verify downloaded files using Katalon Studio. You can download the source code [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, please refer to [Upload File](/display/KD/%5BWebUI%5D+Upload+File) guideline.

</details>