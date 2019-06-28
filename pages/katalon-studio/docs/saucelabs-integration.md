---
title: "SauceLabs Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/saucelabs-integration.html 
redirect_from:
    - "/display/KD/SauceLabs+Integration/"
    - "/display/KD/SauceLabs%20Integration/"
    - "/x/UBVO/"
    - "/katalon-studio/docs/saucelabs-integration/"
description: 
---

> Install [Sauce Labs Integration](https://store.katalon.com/product/75/Sauce-Labs-Integration) to use this feature.

For more detailed instructions of how to use the plugin, visit [this document](https://docs.katalon.com/katalon-studio/docs/saucelabs-plugin.html).

<details><summary>Deprecated Content</summary>

To integrate with Saucelabs, you need to execute your test scripts using '[Remote](/display/KD/Execute+a+test+case#Executeatestcase-Executeinaremoteenvironment)' option based on SauceLabs provided capabilities of your choices. Below are steps on how to get your desire SauceLabs capabilities.

1.  Login to SauceLabs.
2.  Navigate to 'Account' page after logged in and note/copy your 'Access Key'value  
      
    

![](../../images/katalon-studio/docs/saucelabs-integration/image2017-9-7-113A403A15.png)

3. Go to '[Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator?src=sidebar)' page. Select the settings you want and SauceLabs will generate capabilities for you

![](../../images/katalon-studio/docs/saucelabs-integration/image2017-9-7-113A403A51.png)

4.In Katalon Studio, open ['Remote' ](/display/KD/Execute+a+test+case#Executeatestcase-Executeinaremoteenvironment)settings and pass SauceLabs settings from step #2 and #3 with some adjustments:

*   Remote Web Server URL: `"https://``USERNAME:ACCESS_KEY``@ondemand.saucelabs.com:443/wd/hub", `e.g: `https://toi5``:a4r6trgfd87gdsadfdss``@ondemand.saucelabs.com:443/wd/hub`
*   Other settings are gotten from step #3.

5\. The final step will be selecting '**Remote**' item for execution.

</details>