---
title: "How to parse JSON responses in Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/parse_json_responses.html
redirect_from:
    - "katalon-studio/tutorials/parse_json_responses.html"
description: "This tutorial offers the best practices for retrieving information from JSON responses and parsing the JSON format in Katalon Studio. Learn more!"
---

**About the author**

Marek Melocik is currently working as Test Automation Engineer in Brno, Czech Republic. He has been working in the QA industry since 2014.

Meet Marek at  **_[www.linkedin.com/in/marek-melocik](https://www.linkedin.com/in/marek-melocik/)_**

Many people in the [**_Katalon forum_**](https://forum.katalon.com/discussions) have asked about retrieving information from JSON responses and parsing the JSON format in Katalon Studio. In this post, I will show a simple way on how to do so.

A JSON response example
-----------------------

Suppose we have the following JSON response, and we want to parse and retrieve its data:

```groovy
{"menu": {
"id": "file",
"tools": {
"actions": [
{"id": "new", "title": "New file"},
{"id": "open", "title": "Open File"},
{"id": "close", "title": "Close File"}
],
"errors": []
}}}

```

JsonSlurper
-----------

We use this Groovy helper class to parse JSON strings. We need to create a new instance of JsonSlurper and call the JsonSlurper._parseText_ method. Sample code:

```groovy
import groovy.json.JsonSlurper
 
String jsonString = '''{"menu": {
"id": "file",
"tools": {
"actions": [
{"id": "new", "title": "New File"},
{"id": "open", "title": "Open File"},
{"id": "close", "title": "Close File"}
],
"errors": []
}}}'''
JsonSlurper slurper = new JsonSlurper()
Map parsedJson = slurper.parseText(jsonString)

```

The parsed JSON response is now stored in a variable called _**parsedJson**_ (in our case, it is the Map data structure, but sometimes it may be something else).

JsonSlurper also provides a couple of JsonSlurper._parse_ overloading methods which can be used if your JSON input is File, Reader, InputStream, URL other than String. For further information, please refer to the [**_JsonSlurper documentation._**](http://docs.groovy-lang.org/next/html/gapi/groovy/json/JsonSlurper.html)

Get a key value
---------------

Let's say you want to get a value of _**id**_ from the JSON response above. JSON is a structured document, so you can get any element using its absolute path. See this example:

```groovy
String idValue = parsedJson.menu.id
 
String idValue2 = parsedJson.get("menu").get("id")

```

As you can see,  there are two ways how to get it. One is to access Map objects by using the dot notation (.). The other is to use _get_ methods from Map, List and Set as you do in Java.

Basically, the _**parsedJson**_ variable is a type of _Map<String, Map<Object, Object>>._
Then, to get inner Map, you call parsedJson._get_("menu") – as "menu" is the String key. This method returns the inner Map, on which you can call other get methods until you reach your key.

Verify if a key is present in JSON
----------------------------------

If you want to verify if a selected key is present in a JSON response, you can use the similar code as below:

```groovy
import com.kms.katalon.core.util.KeywordUtil
 
String getSelectedKey = parsedJson.menu.id
 
if(getSelectedKey == null) {
KeywordUtil.markFailed("Key is not present")
}
It is a simple check for null – if the given key is not found, null is returned. But there is one special case when this code won't work, that is, if key "id" has value null in your JSON. For such cases you should use more robust code:
boolean isKeyPresent = parsedJson.get("menu").keySet().contains("id")
 
if (!isKeyPresent) {
KeywordUtil.markFailed("Key is not present")
}

```

You get all keys from the "menu" object and then check if it contains the key you look for.

Get an array element
--------------------

Your JSON response may also contain arrays. Like any array in Java or Groovy, you can access an array element using **_arrayName\[index\]_.**

For example, we can get the "title" value of the first object in the "actions" array as below

```groovy
String idValue = parsedJson.menu.tools.actions[0].title
 
String idValue2 = parsedJson.get("menu").get("tools").get("actions").get(0).get("title")

```

In this example, we access the item with the index of 0, the first item in the array (the index is zero-based).

Get an array element based on some condition
--------------------------------------------

A more usual case is when you want to get the exact array element based on some specific condition. For example, you get the "title" value of an object whose "id" is "Open". You can do this as below:

```groovy
def array1 = parsedJson.menu.tools.actions
 
String onlickValue1 = ""
 
for(def member : array1) {
if(member.id == 'Open') {
onlickValue1 = member.title
break
}
}

```

I used the for-each loop in this case. This loop checks every item in the array _array1_ until the condition is met. If so, _onlickValue1_ is assigned to the item's title.

JSON data types
---------------

The JSON format supports a few data types such as String, number, Boolean, and null. If you are not sure what the data type is, you can just use the keyword **_def_**.  

```groovy
def myVar = 'get value from json here'.

```

A rule of thumb is that a String value is enclosed in quotes, numbers unquoted (floating point may be present as well) and Boolean _true_ or _false_. But initializing a variable using **_def_** is always a good choice when you are not sure about its type.

Conclusion
----------

This tutorial offers a few basic best practices for working with JSON strings in Katalon Studio. JSON is the most common format returned from API/Web Services. When you perform [**_API testing_**](/katalon-studio/tutorials/introduction-api-testing/), you likely have to deal with JSON responses. Hopefully, these basic best practices are useful for your API testing.

[![Rest API Request Katalon Studio](../../images/katalon-studio/tutorials/parse_json_responses/api-testing-interview-question-1024x101.png)](https://www.katalon.com/download)

**Read more:**

*   [Create your first API test with Katalon Studio](/katalon-studio/tutorials/create-first-api-test-katalon-studio/)
*   [Create REST API requests manually](/katalon-studio/tutorials/create-rest-api-requests-manually/)
*   [Top 50+ Web API Testing Interview Questions](/katalon-studio/blog/web-api-testing-interview-questions/)
