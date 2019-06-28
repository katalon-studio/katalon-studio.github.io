---
title: "Common tips for using Xpath in Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/xpath_katalon_studio_tips.html
redirect_from:
   - "katalon-studio/tutorials/xpath_katalon_studio_tips.html"
description: "XPath is one of the most powerful HTML selectors for test automation. Learn more with many hands-on practices to use XPath in Katalon Studio!"
---

**About the author**

Marek Melocik is currently working as Test Automation Engineer in Brno, Czech Republic. He has been working in the QA industry since 2014.

Meet Marek at [www.linkedin.com/in/marek-melocik](http://www.linkedin.com/in/marek-melocik)

What is XPath?
--------------

First of all, let's define what XPath is. XPath is one of HTML selectors which are used in test automation. Basically, it is a path from the top tag (body) of HTML page (_absolute XPath_) or a path derived from some web element (_relative XPath_). Except for XPath, you can use also other selector types such as CSS selector.

### Sample page

I created a very simple web page for this tutorial's purposes. I will refer to this code in the whole tutorial. This is a source code:

```groovy
<html>
<head>
<title>My First Page</title>
</head>
<body>
	<div id="header" class="hdr-main">
		<div id="logo">
			<img src="/images/whatever.png" alt="My logo">
		</div>

	<div id="main" class="body-main">
		<h1>Main header</h1>
		<div id="text">
			<p>Sample text.</p>
			<div id="main-button">
				<button type="button" onclick="alert('Button was clicked!')">Click me</button>
			</div>
		</div>
		<div id="mainSelectBox">
			<select>
				<option value="opt1" selected>Option 1</option>
				<option value="opt2">Option 2</option>
				<option value="opt3">Option 3</option>
			</select>
		</div>
		<div id="mainInput">
			<input id="myInputId" type="text" placeholder="Sample input">
		</div>
	</div>

	<div id="footer" class="footer-main">
		<small>All rights reserved.</small>
	</div>
</body>
</html>

```

XPath basics
------------

XPath syntax:

*   nodename     Selects all nodes with the name "nodename"
*   /                      Selects from the root node
*   //                    Selects nodes in the document from the current node that matches the selection no matter where they are
*   .                       Selects the current node
*   ..                      Selects the parent of the current node
*   @                    Selects attributes
*   \[ \]                    Node predicates

XPath operators:

*   |                      Computes two node-sets        //book | //cd
*   +                     Addition                                               6 + 4
*   –                      Subtraction                                          6 – 4
*   *                     Multiplication                                     6 * 4
*   div                  Division                                               8 div 4
*   =                     Equal                                               price=9.80
*   !=                   Not equal                                        price!=9.80
*   <                     Less than                                        price<9.80
*   <=                  Less than or equal to  price<=9.80
*   >                     Greater than   price>9.80
*   >=                  Greater than or equal to         price>=9.80
*   or                    or                                       price=9.80 or price=9.70
*   and                 and                                    price>9.00 and price<9.90
*   mod               Modulus (division remainder)     5 mod 2

(Source: w3schools.com)

XPath Best practices
--------------------

1\. The very best and ultimate practice is to _**avoid using absolute Xpaths**_. Use this only and only when there is no other choice. It works, but it is really hard to maintain – even the smallest change in page's source code can make Xpath invalid.
Sample absolute Xpath in our sample code:
**/body/div/div/div/button**
This example does not look so bad, BUT – in feature-rich websites, you may have 15-20 elements between the root element and your object.

2\. If possible, keep your XPaths easy and short. Prefer using direct XPath (when unique identifier is present)
Example:
**//input\[@id="myInputId"\]
**Attribute **id** is (should be) unique within a page, so you may be sure that you are about to use correct element.

3\. If unique identifier is not present, find nearest ancestor/descendant with unique identifier. Then, use relative Xpath to locate your element.
Example:
**//div\[@id="text"\]/p**
Element **p** does not have any unique ID, but its nearest ancestor (parent element) has.
So relative Xpath approach can be easily applied.

4\. Use XPath operator **and** to get element by multiple attributes
**//img\[@src="/images/whatever.png" and @alt="My logo"\]
**This may be useful when a single attribute may not be sufficient to identify an element, i.e. when the same image is used on multiple places, but alt attribute is different.

5\. text() and contains() functions
XPath offers several functions, but probably most used for test automation are **text()** and **contains(haystack, needle)** methods.
Text() returns a text of current node, contains() returns true/false based on parameters.Example:
**//small\[text()="All rights reserved."\]
//small\[contains(text(), "rights")\]**You may see that in the first option, you have to specify exact text, whereas, in the second option, it is enough to provide only a substring.
In our case, for contains method, you provide a result of text() method as a _haystack_ and substring as a _needle_.

6\. Get N-th element when there are multiple (and same) siblings. This approach may be useful mostly for searching in tables when you don't have unique identifier for table data elements, but it can be applied to any other element.
Example:**//div\[@id="mainSelectBox"\]/select/option\[2\]**
This expression returns second <option> element in the select box.

How to get and verify XPaths
----------------------------

Browser console allows you to verify your XPath directly. Type **$x("//yourxpath")** into a console and if the element exists, it is returned in a console. When multiple elements match the expression, an array of these elements is returned.

There are also multiple browser extensions which may help you with getting and evaluating XPaths. You can find them in add-ons store in your favorite browser, I use addon ChroPath (available for Chrome and Firefox), but there are also many others. You can try more of them and choose the one which is the best for you.

Conclusion
----------

XPath is a powerful selector which has many different operators and methods for working with web elements. Think about the best option for specific element, do not rely on browser tools and their pre-generated paths.

And one more advice from me – don't be afraid to tell your teammate, who is responsible for UI development, to add unique identifiers for web elements you use for test automation. It is much easier when you define XPath as //element\[id='whatever'\] and you don't have to care about long and difficult paths.

Read more:

*   [Generating reliable object selector using Spy Web utility](/katalon-studio/tutorials/generate-css-xpath-selector-spy-web-utility/)
*   [Detecting elements with XPath in Katalon Studio](/katalon-studio/tutorials/detect-elements-xpath/)
