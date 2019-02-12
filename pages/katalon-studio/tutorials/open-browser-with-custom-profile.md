Katalon Studio prompts a new browser with no cached data for every test case's execution. However, sometimes you need to verify that an action is taken when a user logs in for the first time. This test scenario requires that a new browser must be opened with some cached data - which is not the default behavior. 

This tutorial will guide you through a simple test scenario that can be extended for your own purposes:

*   Open a browser.
*   Navigate to gmail.com

**Expected result:** The browser will re-direct you to your inbox.

**Chrome**

The first step is to create a Chrome Profile that contains your gmail account's information. Open your Chrome browser and navigate to `chrome://settings/` . There clicking on **Manage other people** will open a panel. Click on **Add person** and choose the name for your Chrome Profile. 

![](../../images/katalon-studio/tutorials/open_browser_with_custom_profile/new_profile.png)

This will open a new Chrome instance with a new profile. Now proceed to log in your gmail account in this instance. After that, navigate to `chrome://version/` . You should copy the path to the profile of this Chrome instance to your notepad or a text editor for latter use. 

![](../../images/katalon-studio/tutorials/open_browser_with_custom_profile/profile_path.png)

Now open Katalon Studio and create a new test case. Open the script mode and enter the following code:

`import com.kms.katalon.core.webui.driver.DriverFactory `  
`import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI `  
`import internal.GlobalVariable as GlobalVariable `  
`import org.openqa.selenium.WebDriver `  
`import org.openqa.selenium.chrome.ChromeDriver `  
`import org.openqa.selenium.chrome.ChromeOptions`  
  
`// Copy the path to chromedriver.exe `  
`String pathToChromeDriver = "{katalon_installed_folder}\configuration\resources\drivers\chromedriver_win32\chromedriver.exe" `  
`System.setProperty("webdriver.chrome.driver", ) `

  
`// It is important that this chromeProfilePath ends with User Data and not with the profile folder (Profile 2) `  
`String chromeProfilePath = "C:\\Users\\thanhto\\AppData\\Local\\Google\\Chrome\\User Data\\"; `  
`ChromeOptions chromeProfile = new ChromeOptions(); `  
`chromeProfile.addArguments("user-data-dir=" + chromeProfilePath); `  
`// Here you specify the actual profile folder (Profile 2) `  
`chromeProfile.addArguments("profile-directory=Profile 2"); `

  
`WebDriver driver = new ChromeDriver(chromeProfile); `  
`driver.get("https://gmail.com/"); `  
`DriverFactory.changeWebDriver(driver) `

`// Here you can continue your test case`

Run the test case and the browser will navigate to gmail.com and re-direct you to your own inbox.

**Note:** All Chrome browsers should be closed before running this test case
