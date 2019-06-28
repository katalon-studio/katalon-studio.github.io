---
title: "Version 5.3.1"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-531.html
redirect_from:
    - "/display/KD/Version+5.3.1/"
    - "/display/KD/Version%205.3.1/"
    - "/x/JAHR/"
    - "/katalon-studio/new/version-531/"
description:
---
Integration and Email Accounts Encryption
-----------------------------------------

Provide user an option in Project Settings to encrypt all integration and email accounts with Katalon Studio. This helps to ensure the security of accounts information in sharing such as via Git. 

![](../../images/katalon-studio/new/version-531/image2018-3-1-113A523A11.png)

Masking Password Field in Record Web
------------------------------------

Since version 5.3.1, Katalon Studio will auto-detect and masked the input text of Password field while Recording.

![](../../images/katalon-studio/new/version-531/image2018-3-1-123A273A59.png)

Support Private Kobiton Devices
-------------------------------

Enhance Kobiton integration to support mobile testing with **Private** Kobiton devices. 

Support Proxy in Console Mode Execution
---------------------------------------

Allow users to pass Proxy settings in Console Mode command

| Option Name | Value Type | Value | Mandatory? |
| --- | --- | --- | --- |
| proxy.option | Fixed | NO\_PROXY, USE\_SYSTEM, MANUAL_CONFIG | YES |
| proxy.server.type | Fixed |  HTTP, HTTPS, or SOCKS | YES |
| proxy.server.address | String | Example: http://192.168.12.32, [http://katalon.com](http://katalon.com/) | YES |
| proxy.server.port | Integer | Example: 80, 8080, 9999 | YES |
| proxy.username | String | Example: MyProxyUsername | Optional (YES if your proxy server requires authentication) |
| proxy.password | String | Example: MyProxyPassword | Optional (YES if your proxy server requires authentication) |

**Example:**

```groovy
katalon -noSplash  -runMode=console -consoleLog -noExit -projectPath="C:\Users\Katalon Studio\Project\YourProject.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)" --config -proxy.option=MANUAL_CONFIG -proxy.server.type=HTTP -proxy.server.address="http://192.168.12.32" -proxy.server.port="8888"
```

### Issues fixed

Support negative verification on API error response code (4xx, 5xx, etc)