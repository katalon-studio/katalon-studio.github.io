---
title: "OAuth2" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/OAuth2.html 
redirect_from:
    - "/display/KD/OAuth2/"
    - "/display/KD/OAuth2/"
    - "/x/Ew-R/"
    - "/katalon-studio/docs/OAuth2/"
description: 
---
> Be sure to click on 'update to HTTP Header' button to use current authentication information.
> 
> ![](../../images/katalon-studio/docs/OAuth2/1.png)

  
The following authorizations are supported:

*   **Basic**
*   **OAuth 1.0**

Basic
-----

This is the simplest authorization for a request.

You pass in your username and password to authenticate the request. It will be encoded to 'Authorization' request's headers as you can see below. 

![](../../images/katalon-studio/docs/copy-of-authorization/Screen-Shot-2018-08-08-at-09.36.21.png)

To learn, please refer to [this guide](https://swagger.io/docs/specification/authentication/basic-authentication/).

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

*   **OAuth 2.0**
Comparing to OAuth 1.0, OAuth 2.0 is easier to implement for third parties. OAuth 2.0 ’s different flows provides user a flexible way to use. Those following flows are supported in Katalon Studio: “Authorization code”, “Password Credentials”, “Client Credentials”, “Refresh Token”.
To learn please refer [this guide](https://oauth.net/2/grant-types/) .

The following field is supported in Katalon Studio:
| Name | Description |
| --- | --- |
| Grant type |	The drop-down list consists of different grant types: “Authorization code”, “Password Credentials”, “Client Credentials”, “Refresh Token” |
| Callback URL	|  The callback URL in the Application that’s registered with the server |

| Auth URL | 	The endpoint of authorization server |

| Access Token  URL  |	The endpoint of the resource server |

| State	|  The protection for the end user from cross site request forgery(CSRF) attacks |

| Consumer Key |	The API key associated with the application (Twitter, Facebook, etc.). This key (or ‘client ID’, as Facebook calls it) is what identifies the client, which is a website/service that is trying to access an end-user’s resources. |

| Consumer Secret	| The client’s password that is used to authenticate with the authentication server, which is a Twitter/Facebook/etc. server that authenticates the client. |

See the example below to learn how to use this information:
 
![](../../images/katalon-studio/docs/OAuth2/1.png)
1.	Select the desired grant type in Grant Type drop down menu.  

![](../../images/katalon-studio/docs/OAuth2/2.png)
2.	Enter the appropriate values (Callback URL, Auth URL, Access Token URL, Consumer Key, Consumer Secret) and then click the “Request token” button
To learn please refer to [this guide](https://apidocs.imgur.com/#authorization-and-oauth). 

![](../../images/katalon-studio/docs/OAuth2/3.png)
3.	Copy & paste the URL displayed in the message and then copy & paste the returned URL from your browser’s address bar into the blank box.  

> Be sure to click on 'update to HTTP Header' button to use current authentication information.
> 
> ![](../../images/katalon-studio/docs/OAuth2/4.png)
4. So far you’ve gained all the information needed to send a request using OAuth 2.0 authorization (Authorization Code, Access Token, Refresh Token, Toke Type), then use all these information to send a request.  

This is just a quick overview on how to use Authorization for a Web Service object. You may need to adjust it accordingly based on your API specifications.
