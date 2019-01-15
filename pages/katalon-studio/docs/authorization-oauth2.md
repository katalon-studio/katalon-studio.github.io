---
title: "[Authorization] OAuth 2.0" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/authorization-oauth2.html 
redirect_from:
    - "/display/KD/authorization-oauth2/"
    - "/display/KD/Authorization-oauth2/"
    - "/katalon-studio/docs/authorization-oauth2/"
    
description: 
---
OAuth 2.0
-----
 
This guide will illustrate how to use OAuth 2.0 in Katalon Studio.
To learn how to create API test, please refer to [this guide](https://docs.katalon.com/katalon-studio/tutorials/create_first_api_test_katalon_studio.html#step-3-create-a-new-restful-endpoint-at-object-repository) .


These following grant types are supported in Katalon Studio: “Authorization code”, “Password Credentials”, “Client Credentials”, “Refresh Token”. To learn more, see this documentation:  https://oauth.net/2/grant-types/ 

In Katalon Studio, how to test “Password Credentials”, “Client Credentials”, “Refresh Token” is quite similar to any other API testing tools. However, “Authorization Code” grant type has different work flow, please follow the example below to learn how “Authorization Code” in OAuth 2.0 works:
 
 
![](../../images/katalon-studio/docs/authorization-oauth2/1.png)

1.	Select the desired grant type in Grant Type drop down menu.  

![](../../images/katalon-studio/docs/authorization-oauth2/2.png)

2.	Enter the appropriate values (Callback URL, Auth URL, Access Token URL, Consumer Key, Consumer Secret) and then click the “Request token” button
To learn please refer to [this guide](https://apidocs.imgur.com/#authorization-and-oauth). 

![](../../images/katalon-studio/docs/authorization-oauth2/3.png)

3.	Copy & paste the URL displayed in the message and then copy & paste the returned URL from your browser’s address bar into the blank box.  


4. So far you’ve gained all the information needed to send a request using OAuth 2.0 authorization (Authorization Code, Access Token, Refresh Token, Toke Type), then use all these information to send a request.  

> Be sure to click on 'update to HTTP Header' button to use current authentication information.
> 
> ![](../../images/katalon-studio/docs/authorization-oauth2/4.png)

