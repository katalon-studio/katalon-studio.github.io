---
title: "Using List to Store the Mobile Elements to Validate Data"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/store_mobile_elements_to_validate_data.html
redirect_from:
    - "katalon-studio/tutorials/store_mobile_elements_to_validate_data.html"
description: "To select a mobile element (ex: Radio button) from a List, we need to capture all the button elements in a collection and pick the desired Radio button."
---
Scenario
--------

We want to select a Radio button from a List. In order to do so, we need to capture all the button elements in a collection and pick the desired Radio button.

Manual Mode
-----------

*   Step 1**:** Select **Start Application** from Mobile keyword and click on **Input** it will open a window. In **appFile**, select **Value Type** as **Variable**. In **Value**, pass the variable name as **path**.

![Select an element from a list in mobile automation](../../images/katalon-studio/tutorials/store_mobile_elements_to_validate_data/Using-List-to-Store-the-Mobile-Elements-to-Validate-Data-1.png)

*   Step 2: Add **Wait For Element Present** item.
*   Step 3: Call **Scroll To Text** from mobile keyword, pass the input as **Views**. **Scroll To Text** accepts String type parameter (Text of the element to scroll to).

![Select an element from a list in mobile automation](../../images/katalon-studio/tutorials/store_mobile_elements_to_validate_data/Using-List-to-Store-the-Mobile-Elements-to-Validate-Data-9.png)

*   Step 4: Call **Tap** method and pass the object of **Views.**
*   Step 5: Call **Scroll To Text** from mobile keyword, pass the input as **Radio Group.**
*   Step 6: Tap on **Radio Group.**
*   Step 7: After tapping on 'Radio Group', we want to **wait** for heading '**Views/Radio Group**' to be **visible** on the screen.
*   Step 8: Add a **binary statement** to initialize **Appium Driver** with Katalon **Mobile Driver**.
*   Step 9: Add another **binary statement** to get all radio elements and store in a List. In **Left Expression**, select '**Variable**' as **Value Type** and pass '**elements**' in **Value**. In **Right expression**, select '**Method Call**' as **Value Type** and pass the list of radio buttons object information.

![Select an element from a list in mobile automation](../../images/katalon-studio/tutorials/store_mobile_elements_to_validate_data/Using-List-to-Store-the-Mobile-Elements-to-Validate-Data-92.png)

*   Step 10: Add a **for-each loop** statement.

![Select an element from a list in mobile automation](../../images/katalon-studio/tutorials/store_mobile_elements_to_validate_data/Using-List-to-Store-the-Mobile-Elements-to-Validate-Data-10.png)

– Step 10.1: Add a **binary statement** to capture the text of each element in the list and store it in the "**actual_Text**" variable.

– Step 10.2: Add '**if**' statement and **verify** whether the actual **text** matches the expected text. When the actual text matches the expected text, perform click action on **Radio** button.

– Step 10.3: After performing click event, we need to **terminate** for each loop. Add a method call statement **'break'** to achieve this.

![Select an element from a list in mobile automation](../../images/katalon-studio/tutorials/store_mobile_elements_to_validate_data/Using-List-to-Store-the-Mobile-Elements-to-Validate-Data-11.png)

The step-by-step guide can also be achieved through **Script Mode**. We suggest using the Script feature in Katalon to automate the process faster.

Script Mode
-----------

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import org.openqa.selenium.WebElement as WebElement
 
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory as MobileDriverFactory
 
import com.kms.katalon.core.model.FailureHandling as FailureHandling
 
import io.appium.java_client.AppiumDriver as AppiumDriver
 
 
 
'Path of the Apk File Store in path variable'
 
def path = RunConfiguration.getProjectDir() + '/Data Files/ApiDemos.apk'
 
 
 
'Start the application'
 
Mobile.startApplication(path, false)
 
 
 
'Wait for element Present of Heading API Demos'
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/List_Example/heading_API_Demos'), 45)
 
 
 
'Scroll to Views text'
 
Mobile.scrollToText('Views', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Tap on Views'
 
Mobile.tap(findTestObject('API Demos Objects/List_Example/text_Views'), 20)
 
 
 
'Scroll to Radio Group text'
 
Mobile.scrollToText('Radio Group', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Tap on Radio Group'
 
Mobile.tap(findTestObject('API Demos Objects/List_Example/text_Radio Group'), 30)
 
 
 
'Wait for Element Present of Header Radio Group'
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/List_Example/text_Header Radio Group'), 30)
 
 
 
'Initializing Appium Driver by Katalon Mobile Driver'
 
AppiumDriver<?> driver = MobileDriverFactory.getDriver()
 
 
 
'Getting all similar elements and storing in to List'
 
List<WebElement> elements = driver.findElementsByClassName('android.widget.RadioButton')
 
 
 
'Printing the Size of list elements'
 
println('The size of elements is ::' + elements.size())
 
 
 
'Here Using For each loop for iterations'
 
for (WebElement radio : elements) {
 
    'Get the text of each element in the list and store in to the "actual_Text" variable.'
 
    String actual_Text = radio.getText()
 
     'Here verifying the actual text with expected text of "Dinner" on every iteration'
 
     if(actual_Text.equals("Dinner"))
 
     {
 
           'Click on expected Element "Dinner" '
 
           radio.click();
 
           'Break the loop'
 
           break;
 
     }
 
}

```

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation).

_For further instructions and help, please refer to [Katalon User Guide](/x/oArR) or [Katalon Forum](https://forum.katalon.com/)._