---
title: "Modify object properties at runtime"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/clicking-multiple-objects-without-starting-over.html
redirect_from:
    - "/display/KD/Clicking+multiple+objects+without+starting+over/"
    - "/display/KD/Clicking%20multiple%20objects%20without%20starting%20over/"
    - "/x/ZwXR/"
    - "/katalon-studio/docs/clicking-multiple-objects-without-starting-over/"
author_name: Mate Mrse
author_link: https://forum.katalon.com/discussion/7010/how-to-test-clicking-multiple-objects-without-starting-over#lComment_16209
author_avatar: https://forum.katalon.com/user_avatar/forum.katalon.com/russ_thomas/120/372_1.png
description:
---
If you have multiple and similar objects you want to quickly interact with during test execution, and you really don't want to spend time writing duplicate steps to interact with them, the approach below will help you reduce the time and make your code nicer:

Use CSS or XPath to locate your elements, and then you start changing the IDs (let's say). For example:

```groovy
TestObject yourObject = WebUI.modifyObjectProperty(findTestObject('Object Repository/Some object'), 'css', 'equals', '#${i}', true)
```

where 'i' is the loop counter. You can put it all inside of a loop that will read your excel sheet:

```groovy
for (def i=0; i <= fineTestData('Path to your excel').getRowNumbers(); i++) {}

```

```groovy
https://www.katalon.com/resources-center/tutorials/data-driven-testing/ for linking data with test.
```

**References:**

*   **[\[](/display/KD/%5BWebUI%5D+Modify+Object+Property)**[WebUI\] Modify Object Property](/display/KD/%5BWebUI%5D+Modify+Object+Property)
*   [Data-Driven Testing](/katalon-studio/tutorials/data-driven-testing/)

_Credit to [Mate Mrse](https://forum.katalon.com/discussion/7010/how-to-test-clicking-multiple-objects-without-starting-over#lComment_16209)_