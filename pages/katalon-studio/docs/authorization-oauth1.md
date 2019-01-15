---
title: "[Authorization] OAuth 1.0" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/authorization-oauth1.html 
redirect_from:
    - "/display/KD/authorization-oauth1/"
    - "/display/KD/Authorization-oauth1/"
    - "/katalon-studio/docs/authorization-oauth1/"
description: 
---
**[OAuth 1.0](https://oauth.net/core/1.0a/)**

The following fields are supported in Katalon Studio:

| Name | Description |
| --- | --- |
| Consumer Key | The API key associated with the application (Twitter, Facebook, etc.). This key (or 'client ID', as Facebook calls it) is what identifies the client, which is a website/service that is trying to access an end-user's resources. |
| Consumer Secret | The client's password that is used to authenticate with the authentication server, which is a Twitter/Facebook/etc. server that authenticates the client. |
| Signature Method | The Consumer used this to sign the request _For signature method RSA-SHA1, only support OpenSSL RSA Private key with **PKCS#8 or PKCS#1 format**_ |
| Token | What is issued to the client once the client successfully authenticates itself (using the consumer key & secret). This access token defines the privileges of the client (what data the client can and cannot access) |
| Token Secret | The string sent with the access token as a password |
| Realm | The Provider basically decides if this is of any importance. It is the counterpart of the WWW-authenticate response header. If a server returns a WWW-authenticate header of 'OAuth realm="[https://api.example.com](https://api.example.com/)"' then it probably parses that value from the Authenticate request header in the OAuth process. |

To know how to generate one of them, you can refer to this [testing site](http://term.ie/oauth/example/index.php) and apply it based on your service provider. See the example below how to use this information:

1.  Use the following consumer key and secret to generate token:
    
    *   Consumer: key
    *   Consumer Secret: secret
    
    ![](../../images/katalon-studio/docs/copy-of-authorization/Screen-Shot-2018-08-08-at-11.10.21.png)
2.  Generated token is shown in the response's body section. Use it in to generate access token:  
    ![](../../images/katalon-studio/docs/copy-of-authorization/Screen-Shot-2018-08-08-at-11.22.08.png)
3.  So far you've gained all the information needed to send a request using OAuth 1.0 authorization (consumer, access token), then use all these information to send a request:

![](../../images/katalon-studio/docs/copy-of-authorization/Screen-Shot-2018-08-08-at-11.36.20.png)

This is just a quick overview on how to use Authorization for a Web Service object. You may need to adjust it accordingly based on your API specifications.