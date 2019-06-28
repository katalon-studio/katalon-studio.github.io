---
title: "Create REST API requests manually"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/create_rest_api_requests_manually.html
description: "Katalon Studio offers a great UI support for creating REST API requests. This tutorial will be about show you how to make your code robust and effective."
redirect_from:
    - "/katalon-studio/tutorials/create_rest_api_requests_manually.html"
---

**About the author**

Marek Melocik is currently working as Test Automation Engineer in Brno, Czech Republic. He has been working in QA industry since 2014.

Meet Marek at  [www.linkedin.com/in/marek-melocik](https://www.linkedin.com/in/marek-melocik/)

Introduction
------------

Katalon offers a great UI support for creating REST API requests. But if you are the advanced Katalon user, you can do it manually and benefit from a large library of Katalon support methods for API requests. This tutorial will be about how to create REST API requests from manual and handle responses to make your code robust and effective.

### Requirements

You should be familiar with Katalon Studio and know the basics of Java/Groovy.

RequestObject and ResponseObject
--------------------------------

These are two main classes for handling API requests. I am sure you have already figured out that the RequestObject class represents an API request and the WSBuiltInKeywords.sendRequest method returns ResponseObject.

Now let's create a REST API request as an example (of course, you can do the same with SOAP API requests). You first need to have information for a request, including

*   URL
*   Request method (GET, POST, PUT, DELETE, …)
*   Request headers (Authorization, Content-Type, …)
*   Request body (for POST request)
*   REST request parameters

Next, you create an object from RequestObject using either one of the following ways:

*   New a RequestObject instance directly and set its information using setter methods such as _setRestUrl()_ and _setRestRequestMethod()_.
*   Use RestRequestObjectBuilder, a useful helper class offered by Katalon Studio version 5.4 and later.

```groovy
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.RestRequestObjectBuilder
import com.kms.katalon.core.testobject.TestObjectProperty
import com.kms.katalon.core.testobject.impl.HttpTextBodyContent
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
 
public class SampleRequestObject {
 
String endpoint = "https://www.katalon.com"
String requestMethod = "GET"
String authHeader = "whateverYouNeedForAuthentication"
 
TestObjectProperty header1 = new TestObjectProperty("Authorization", ConditionType.EQUALS, authHeader)
TestObjectProperty header2 = new TestObjectProperty("Content-Type", ConditionType.EQUALS, "application/json")
TestObjectProperty header3 = new TestObjectProperty("Accept", ConditionType.EQUALS, "application/json")
ArrayList defaultHeaders = Arrays.asList(header1, header2, header3)
 
/**
* GET requests
* @return
*/
public ResponseObject buildApiRequest1() {
RequestObject ro = new RequestObject("objectId")
ro.setRestUrl(endpoint)
ro.setHttpHeaderProperties(defaultHeaders)
ro.setRestRequestMethod(requestMethod)
 
ResponseObject respObj = WS.sendRequest(ro)
return respObj
}
 
public ResponseObject buildApiRequest2() {
RequestObject ro = new RestRequestObjectBuilder()
.withRestUrl(endpoint)
.withHttpHeaders(defaultHeaders)
.withRestRequestMethod(requestMethod)
.build()
 
ResponseObject respObj = WS.sendRequest(ro)
return respObj
}
}

```

As you can see, the source code includes two different ways to create a request. Both of them return a ResponseObject object. When using RestRequestObjectBuilder to create a RequestObject instance, you call _withXXX()_ and _build()_ methods.

One benefit of RestRequestObjectBuilder is that it has additional methods to allow directly setting different body types for POST requests such as _FileBodyContent_ and _MultipartFormBodyContent_. It is possible also using RequestObject, but it is more straightforward with RestRequestObjectBuilder.

For further details on the methods of these classes, please visit [RequestObject](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RequestObject.html) and [RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html) on Katalon API Documentation website.

As a note, if you want to use HTTP headers, you can create new TestObjectProperty instances as shown in the code snippet.

Creating a POST request is basically the same as a GET request, but you must specify the request body using either _setBodyContent_ from RequestObject or _withTextBodyContent_ from RestRequestObjectBuilder.

```groovy
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.RestRequestObjectBuilder
import com.kms.katalon.core.testobject.TestObjectProperty
import com.kms.katalon.core.testobject.impl.HttpTextBodyContent
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
 
public class SampleRequestObject {
 
String endpoint = "https://www.katalon.com"
String requestMethod = "POST"
String authHeader = "whateverYouNeedForAuthentication"
 
TestObjectProperty header1 = new TestObjectProperty("Authorization", ConditionType.EQUALS, authHeader)
TestObjectProperty header2 = new TestObjectProperty("Content-Type", ConditionType.EQUALS, "application/json")
TestObjectProperty header3 = new TestObjectProperty("Accept", ConditionType.EQUALS, "application/json")
ArrayList defaultHeaders = Arrays.asList(header1, header2, header3)
 
String body = '{"dummyRequest":"yes"}'
 
/**
* POST requests
* @return
*/
public ResponseObject buildPostApiRequest1() {
RequestObject ro = new RequestObject("objectId")
ro.setRestUrl(endpoint)
ro.setHttpHeaderProperties(defaultHeaders)
ro.setRestRequestMethod("POST")
ro.setBodyContent(new HttpTextBodyContent(body))
 
ResponseObject respObj = WS.sendRequest(ro)
return respObj
}
 
public ResponseObject buildPostApiRequest2() {
RequestObject ro = new RestRequestObjectBuilder()
.withRestUrl(endpoint)
.withHttpHeaders(defaultHeaders)
.withRestRequestMethod("POST")
.withTextBodyContent(body)
.build()
 
ResponseObject respObj = WS.sendRequest(ro)
return respObj
}
}

```

There are many different types of request body such as file and form data body content. Please refer to [RestRequestObjectBuilder API documentation](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html) to get a full list of its methods.

ResponseObject
--------------

As you can see above, we get a ResponseObject instance when sending an API request. This object contains all information needed for a response, including status code, response body, response headers, waiting time and many others. Methods for handling response objects may look like this:

```groovy
import com.kms.katalon.core.testobject.ResponseObject
 
public class SampleResponseObject {
 
public static int getStatusCode(ResponseObject resp) {
return resp.getStatusCode()
}
public static String getResponseText(ResponseObject resp) {
return resp.getResponseText()
}
public static long getResponseBodySize(ResponseObject resp) {
return resp.getResponseBodySize()
}
public static long getResponseHeaderSize(ResponseObject resp) {
return resp.getResponseHeaderSize()
}
public static long getWaitingTime(ResponseObject resp) {
return resp.getWaitingTime()
}
}

```

And sample usage in your test case:

```groovy
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.util.KeywordUtil
 
import mypackage.SampleRequestObject
import mypackage.SampleResponseObject as SampleResponseObject
 
SampleRequestObject req = new SampleRequestObject()
 
ResponseObject resp = req.buildApiRequest1()
 
if(SampleResponseObject.getStatusCode(resp) != 200) {
KeywordUtil.markFailed("Status code is not 200 as expected. It is "
+ SampleResponseObject.getStatusCode(resp))
}
 
if(SampleResponseObject.getWaitingTime(resp) > 5000) {
KeywordUtil.markFailed("Your request takes more than 5000ms. Actual time is "
+ SampleResponseObject.getWaitingTime(resp))
}

```

You may wonder why the SampleResponseObject class is needed as I can get all information directly by calling the methods from the response object. This wrapper may be helpful for your future enhancements as your code is less dependent on the ResponseObject class. If there are changes to this class, you only need to update the wrapper class. It is up to you which approach you follow, but both of them are correct.

### Conclusion

This tutorial was focused on advanced usage of REST API requests in Katalon. As I prefer writing code instead of clicking in Manual mode, this tutorial may be helpful to similar automation engineers as I am.

RequestObject and ResponseObject are powerful classes, which may help you to customize your API tests in details.

[![Rest API Request Katalon Studio](../../images/katalon-studio/tutorials/create_rest_api_requests_manually/api-testing-interview-question-1024x101.png)](https://www.katalon.com/download)

**Read more:**

*   [Top 5 Free API Testing Tools (New & Updated Tools)](/katalon-studio/blog/top-5-free-api-testing-tools/)
*   [Create your first API test with Katalon Studio](/katalon-studio/tutorials/create-first-api-test-katalon-studio/)
*   [Top 50+ Web API Testing Interview Questions](/katalon-studio/blog/web-api-testing-interview-questions/)
