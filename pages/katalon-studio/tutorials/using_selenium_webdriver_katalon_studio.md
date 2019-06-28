---
title: "How to use Selenium WebDriver in Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/using_selenium_webdriver_katalon_studio.html
redirect_from:
   - "katalon-studio/tutorials/using_selenium_webdriver_katalon_studio.html"
description: "In this article, you will be presented a few best practices to benefit directly from Selenium WebDriver in Katalon Studio. Learn more!"
---

**About the author**

Marek Melocik is currently working as Test Automation Engineer in Brno, Czech Republic. He has been working in the QA industry since 2014.

Meet Marek at [www.linkedin.com/in/marek-melocik](http://www.linkedin.com/in/marek-melocik)

Introduction
------------

Selenium WebDriver is a tool for automating web application testing, and in particular to verify that they work as expected. It aims to provide a friendly API that's easy to explore and understand, easier to use than the Selenium-RC (1.0) API, which will help to make your tests easier to read and maintain.

[Katalon Studio](https://www.katalon.com/) uses the Selenium engine for automated testing of Web applications. This means that Katalon uses the Selenium WebDriver framework and hides the complexities of dealing with WebDriver from users. You don't have to care about WebDriver but instead work with Katalon keywords only.

However, you can still use WebDriver directly if you prefer. Or, if you need more flexibilities than Katalon provides, you can simply write scripts working with WebDriver directly. In this article, I'll present a few best practices to benefit from WebDriver, which may be of interest to experienced automation testers who want to work with  Selenium directly.

How Katalon Studio uses Selenium WebDriver
------------------------------------------

The most important thing to mention is that you do not have to create a WebDriver instance. Katalon does it for you when you call the **WebUI._openBrowser_** keyword.

```groovy
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
WebUI.openBrowser('')
WebDriver driver = new ChromeDriver()

```

In the code above, Chrome is used as an example, but you can create any other driver type such as FirefoxDriver and InternetExplorerDriver. You may also have to set a Java system property with the driver location at the start of your test  (as the code below). To terminate the WebDriver instance, call _driver.close()._

```groovy
System.setProperty("webdriver.chrome.driver", "C:\\test\\chromedriver.exe")

```

In both cases, you get a new browser instance and you can use it in Katalon. The only difference is that (at this point) you cannot use Katalon WebUI keywords with your manually created WebDriver instance. For these purposes, there is a library called **DriverFactory**.

DriverFactory
-------------

Katalon developers were aware that WebDriver methods may be useful for users, so they introduced the DriverFactory library. This library is responsible for manipulation with the WebDriver instance and offers a few useful methods for using WebDriver in Katalon.

One of the biggest benefits which are brought by this library is the _changeWebDriver()_ method. As I mentioned earlier, it is not possible to use Katalon keywords with custom WebDriver instances by default. But as soon as you call this method, you'll be able to use them. Katalon will set your driver as a default one, and the full Katalon's functionality is provided.

```groovy
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
System.setProperty("webdriver.chrome.driver", "C:\\test\\chromedriver.exe")
 
WebDriver driver = new ChromeDriver()
 
// this won't work and exception would be thrown
 
WebUI.click(testObject)
 
DriverFactory.changeWebDriver(driver)
 
// now, it is working as expected
 
WebUI.click(testObject)

```

Another great method of the DriverFactory library is _getWebDriver()_. It is the opposite of the case above – you can get an instance of WebDriver created by Katalon and use WebDriver's methods afterward.

```groovy
import org.openqa.selenium.WebDriver
import com.kms.katalon.core.webui.driver.DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
WebUI.openBrowser('')
WebDriver myDriver = DriverFactory.getWebDriver()

```

Using this method, you get a WebDriver instance created in the _openBrowser()_ method. Another useful method is DriverFactory.getChromeDriverPath_(),_ which returns the path to Chrome/Firefox/any other driver (just replace browser name in method) from the Katalon folder. You can use it instead of hardcoding a path to WebDriver as above.

There are also other methods and properties of the DriverFactory class, for further information please visit [API documentation page](https://api-docs.katalon.com/com/kms/katalon/core/webui/driver/DriverFactory.html rel=).

Multiple WebDrivers
-------------------

Katalon Studio currently does not allow you to use multiple drivers at once. When you call WebUI._openBrowser()_ twice, it terminates the first browser window and opens the second one. If you need multiple drivers, you can create them by yourself and switch between them.

```groovy
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
 
import com.kms.katalon.core.webui.driver.DriverFactory
 
System.setProperty("webdriver.chrome.driver", DriverFactory.getChromeDriverPath())
WebDriver driver1 = new ChromeDriver()
WebDriver driver2 = new ChromeDriver()
 
DriverFactory.changeWebDriver(driver1)
// first part of test
 
DriverFactory.changeWebDriver(driver2)
// second part of test
 
driver1.close()
driver2.close()

```

Your tests may require multiple browser instances to, for example, test the communication between two separate browsers, you may need to create multiple drivers and switch between them dynamically.

Sample usage and benefits of Selenium WebDriver
-----------------------------------------------

### Operations on multiple Web elements

Selenium users are usually familiar with the WebDriver method _findElements()_ which returns a list of WebElements found by a specified selector. This method may be useful when you need to do something with multiple elements, i.e. tally them or click on all of them.

See this code as an example of how to count the total of options in a select box using WebDriver.

```groovy
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
 
System.setProperty("webdriver.chrome.driver", DriverFactory.getChromeDriverPath())
WebDriver driver = new ChromeDriver()
List optionsList = driver.findElements(By.xpath("//select[@id='selectBox1']/option"))
 
int numberOfOptions = optionsList.size()

```

Or – use foreach loop to manipulate the WebElements list (only the last row from previous code snippet is changed)

```groovy
for(WebElement option in optionsList) {
println option.getAttribute("value")
}

```

### Easy transition from Java Selenium projects to Katalon's

If you already have Selenium projects written in Java, it is easy to start using Katalon without losing your previous work. All your Java code would work also in Katalon, you should only call the _changeWebDriver()_ method to be able to use Katalon's built-in keywords.

### Options and capabilities

You can simply set different options and/or capabilities to your WebDriver (and set them only locally in a test case, only if you need them). You then just pass them to a WebDriver constructor at the time when you create it.

This is a sample code for setting a custom download path (and download without prompt):

```groovy
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import com.kms.katalon.core.webui.driver.DriverFactory
 
String downloadPath = "C:\\customDownloadFolder\\"
 
Map<String, Object> chromePrefs = new HashMap<String, Object>()
chromePrefs.put("download.default_directory", downloadPath)
chromePrefs.put("download.prompt_for_download", false)
 
System.setProperty("webdriver.chrome.driver", DriverFactory.getChromeDriverPath())
ChromeOptions options = new ChromeOptions()
options.setExperimentalOption("prefs", chromePrefs)
WebDriver driver = new ChromeDriver(options)

```

### Actions

[Actions](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html rel=) is a powerful API for emulating complex user gestures from Selenium. If you want to use it, you need an instance of WebDriver as this instance is required in a constructor of the Actions class.

```groovy
import org.openqa.selenium.WebDriver
import org.openqa.selenium.interactions.Actions
import com.kms.katalon.core.webui.driver.DriverFactory
 
WebDriver driver = DriverFactory.getWebDriver()
Actions myAction = new Actions(driver)

```

Conclusion
----------

In this article, I introduced basic ways how to work with WebDriver instances in Katalon. From my point of view, the main advantage of this approach is that you can benefit from both sides – Katalon and WebDriver. If something is difficult to do in Katalon – do it in WebDriver! And vice versa. Don't be afraid of using WebDriver, sometimes you can have a much simpler solution by using it.
