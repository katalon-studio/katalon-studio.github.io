---
title: "Parameterize Web/Mobile Test Object Properties"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/parameterize-webmobile-test-object-properties.html
redirect_from:
    - "/x/A4C9/"
    - "/katalon-studio/docs/parameterize-webmobile-test-object-properties/"
    - "/display/KD/Parameterized+a+Test+Object"
    - "/display/KD/Parameterized+a+Test+Object/"
description:
---
> Warning
>
> Parameterizing Web/Mobile Test Object Properties is only available with **Basic** Selection Method.
>
> When working with Test Objects in Katalon Studio, there will be many cases you want to update its locators dynamically. Katalon Studio does support this feature. Refer to this [documentation](/x/HoUw#ManageTestObject-ParameterizingTestObject).


Some use cases you can apply this feature is:

*   Do mass actions to a group of similar elements, such as checking on multiple checkboxes without defining multiple Test Objects

*   Update locators dynamically using either local or global variables.


Example: Check on all available checkboxes at the same time:

![](../../images/katalon-studio/docs/parameterize-webmobile-test-object-properties/rVeoW6jHBqE7FZb9G-RyS_Gtn4xlJI5dnTehH4XwRGaJ6AXnld)

Based on the above scenario, normally you will have to **CREATE** 4 Test Objects and call 'Check' keywords 4 times to make sure all 4 checkboxes are checked. It is quite tedious and duplicated your code everywhere.

That's how Parameterized Test Object comes in handy. Once this is applied, you just need to create ONLY ONE Test Object and call 'Check' keyword only one time to loop all these checkboxes. How cool is it!

Below steps are how to apply this feature:

*   Create a Test Object, name it '**chk_Title**' or a preferred name to present all Title checkboxes.

*   Capture **XPath** locator of the **FIRST** checkbox.

    ![](../../images/katalon-studio/docs/parameterize-webmobile-test-object-properties/zOsDYDzUY99i6qnlNiMepTFeb8unojo8oYT_Finze_8omIYhjW)

*   Change this XPath value to use a variable of your choice


Now for the interesting part: How do you determine which attribute(s) you have to adjust to parameterize this object's XPath? The answer to this question mainly based on your knowledge of the web AUT. Knowing the pattern of how similar objects are grouped together is the key. In this case, the index's value of **tr** **attribute** is the value to parameterize for checkboxes on the current web screen.

![](../../images/katalon-studio/docs/parameterize-webmobile-test-object-properties/8vGg3NGJnhxyZEco0T4dDoMqc2Xedi1HYZFJ3DNazVgYdTXJru)

*   Switch to **Scripting Mode** of the current Test Case,  add the below code to loop through all 4 checkboxes:


```groovy
WebUI.openBrowser('https://davidwalsh.name/demo/checkbox-all.php')

//Check on all 4 checkboxes at the same time
(2..5).each
{
   WebUI.check(findTestObject('chk_Title', ['index' : it]))

}
```


In the sample code above, "each" loop is used. There are many ways to loops. Refer to this [guide](https://www.tutorialspoint.com/groovy/groovy_loops.htm).

Based on the original XPath, tr value started as 2, so we can assume that other preceding checkboxes of **tr** **values** will be 3, 4 and 5. Katalon Studio will just loop through all of them.

Above is a simple approach to leverage '**Parameterized Test Object**', a powerful feature. There are other approaches you can apply in your test scripts to reduce the efforts of maintaining many Test Objects at the same time.