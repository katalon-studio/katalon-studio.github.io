---
title: "Handling static and dynamic Test Objects"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handling_static_dynamic_test_objects.html
redirect_from:
    - "katalon-studio/tutorials/handling_static_dynamic_test_objects.html"
description: "Test Objects are one of the vital parts of building an automation project. This tutorial shows the approaches for handling different types of test objects."
---

**About the author**

Marek Melocik is currently working as Test Automation Engineer in Brno, Czech Republic. He has been working in QA industry since 2014.

Meet Marek at [www.linkedin.com/in/marek-melocik](http://www.linkedin.com/in/marek-melocik)

### Introduction

Test Objects are one of the most crucial parts of building a successful automation project. Some of them are static (do not change at all) and some of them are dynamic (they are dependent on some dynamically changing parameters). This tutorial shows you different approaches for handling different types of test objects.

### Requirements

You should be able to [write your tests in the Script view](/katalon-studio/tutorials/create-test-case-using-script-mode/). You should also know the basics of Java/Groovy.

Static objects
--------------

Static objects are very easy to handle. Just go to Object Repository, choose New Test Object and use your favorite selector (I prefer XPath, so all my examples will be for XPaths, but the approach is the same also for other selectors). Save your element and use Katalon static built-in method _findTestElement(String pathInRepository)_ to get your Test Object.

Dynamic objects
---------------

Dynamic objects are a bit trickier to deal with than static objects, but it is not so difficult as it may look like. There is a [Katalon way](/pages/viewpage.action?pageId=12419075) to handle parameterized objects, but I want to introduce other possible approaches.

Define your test object directly in a test case
-----------------------------------------------

The easiest way to define a test object. See a sample code below:

```groovy
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
String dynamicId = 'Katalon123'
String xpath = '//div[@id="' + dynamicId + '"]'
TestObject to = new TestObject("objectName")
to.addProperty("xpath", ConditionType.EQUALS, xpath)
WebUI.click(to)

```

Without counting the import statements, the first two lines are simple – create a String variable _dynamicId_ and put it into another String – _xpath_. The magic is happening on the next two lines. You create a new instance of TestObject (let's call it _to_). Then, you assign your selector to this new test object using method _addProperty(String selectorType, ConditionType type, String selectorValue)_. Finally, you use the test object directly in the default Katalon keywords. For details on ConditionType, please refer to [API documentation.](https://api-docs.katalon.com/com/kms/katalon/core/testobject/ConditionType.html)

Easy, isn't it? Well, yes, but there are also cons of this solution. It is hardly maintainable, especially when your XPath changes often and when you create the same test object in multiple test cases.

Create a separate keyword for dynamic selectors
-----------------------------------------------

A better way to handle dynamic selectors is to extract them into separate keywords. You can have several keywords in your test project, one for a single page or so. It is up to you.

I will show a simple keyword holding dynamic selectors.

```groovy
package mypackage
 
public class MySelectors {
public static final String dynamicIdPath = '//div[@id="%s"]'
 
}

```

As you can see, there is the same path as in previous example, but there is a small difference. Instead of using a variable, I use **%s** wildcard for the _String.format()_ method. Let's update our original test case accordingly.

```groovy
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
import mypackage.MySelectors
 
String dynamicId = 'Katalon123'
String xpath = String.format(MySelectors.dynamicIdPath, dynamicId)
TestObject to = new TestObject("objectName")
to.addProperty("xpath", ConditionType.EQUALS, xpath)
WebUI.click(to)

```

As you can see, the only change is on the line defining _xpath_. If you are not familiar with _String.format()_, please refer to Java documentation.

Alternatively, you can use your own wildcard in the selector value. Then, use _String.replace()_ rather than _String.format()._

```groovy
public static final String dynamicIdPath = '//div[@id="<<dynamicId>>"]'
// a line in test case:
String xpath = MySelectors.dynamicIdPath.replace("<<dynamicId>>", dynamicId)

```

The advantage of storing dynamic selectors in separate keywords is that you keep all selectors in one place. When a selector changes, you change only one place instead of all tests where you use it.

Create a method which returns a dynamic test object
---------------------------------------------------

Now we extend the MySelectors keyword by adding a new method to return TestObject. This will eliminate a few lines of code in your test case, making it more maintainable.

```groovy
package mypackage
 
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
 
public class MySelectors {
public static final String dynamicIdPath = '//div[@id="%s"]'
 
public static TestObject getMyTestObject(String selectorType, String selectorValue) {
TestObject to = new TestObject()
to.addProperty(selectorType, ConditionType.EQUALS, selectorValue)
return to
}
}

```

And our test case will look like this:

```groovy
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
import mypackage.MySelectors
 
String dynamicId = 'Katalon123'
String xpath = String.format(MySelectors.dynamicIdPath, dynamicId)
WebUI.click(MySelectors.getMyTestObject("xpath", xpath))

```

As our new method returns TestObject, we can call it directly using the default Katalon keywords. In the test case, you do not have to worry about creating a new instance of TestObject. You can customize it however you want, you can add more parameters into this method (i.e. ConditionType), or simplify it to pass only a _TestObjectProperty_ instance.

### Conclusion

The main point of this tutorial is that there are several different approaches to deal with dynamic selectors. This tutorial presents a few examples (more or less difficult) which can help you with this topic. I am 100% sure that there are even more effective ways how to do it, I will be glad if you share your own approach.
