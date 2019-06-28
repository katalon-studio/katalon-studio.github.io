---
title: "Internet Explorer Configurations" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/internet-explorer-configurations.html 
redirect_from:
    - "/display/KD/Internet+Explorer+Configurations/"
    - "/display/KD/Internet%20Explorer%20Configurations/"
    - "/x/iwEo/"
    - "/katalon-studio/docs/internet-explorer-configurations/"
    - "/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project.html"
description: 
---
In order to run automation test on Internet Explorer, you need the following setup:

*   For **IE 7** or **higher**:
    *   **Enable Protected Mode** must be the same (**checked**/**unchecked**) for all available zones. 
*   To access this setting, choose **Internet Options** from **Control Panel** of Windows, then switch to the **Security** tab:  
    ![](../../images/katalon-studio/docs/internet-explorer-configurations/cypgm2bz42y8.png)
*   Additionally, **Enable Enhanced Protected Mode*** must be disabled for IE 10 and higher. You can set this at the **Advanced** tab of the **Internet Options**.  
    ![](../../images/katalon-studio/docs/internet-explorer-configurations/image2016-10-24-163A03A14.png)
*   The **Zoom** level of IE browser must be set to **100%** so that native mouse events can be set to correct coordinates.  
    ![](../../images/katalon-studio/docs/internet-explorer-configurations/image2017-2-20-153A123A18.png)
*   For IE 11, you need to set a registry entry on the target computer so that the driver can maintain a connection to the instance of Internet Explorer it creates. 
    1.  Type '**_regedit_**' into **Command Prompt** to open the **Registry Editor**
        
        ```groovy
        regedit
        ```
        
    2.  Locate the **FEATURE_BFCACHE** subkey (create the **FEATURE_BFCACHE** subkey if it is not there):
        1.  For 32-bit Windows, the key is at _`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BFCACHE`_. 
        2.  For 64-bit Windows, the key is at _`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BFCACHE`_. 
    3.  Inside this subkey, create a **DWORD** value called **`iexplore.exe`** with the value of **0**.  
        ![](../../images/katalon-studio/docs/internet-explorer-configurations/image2016-10-24-163A143A28.png)