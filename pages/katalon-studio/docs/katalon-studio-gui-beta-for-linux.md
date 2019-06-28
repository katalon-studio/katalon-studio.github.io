---
title: "Katalon Studio GUI (beta) for Linux" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-studio-gui-beta-for-linux.html 
redirect_from:
    - "/display/KD/Katalon+Studio+GUI+%28beta%29+for+Linux/"
    - "/display/KD/Katalon%20Studio%20GUI%20%28beta%29%20for%20Linux/"
    - "/x/fwTR/"
    - "/katalon-studio/docs/katalon-studio-gui-beta-for-linux/"
    - "/display/KD/Linux+Support/"
description: 
---
**Setup guide:**

1\. Install OpenJDK 8 on your Ubuntu (NOT Oracle JDK). You can find installation steps from here: [http://openjdk.java.net/install/](http://openjdk.java.net/install/). Make sure that after installation, your OpenJDK information is displayed when you execute 'java -version' command:  
![](../../images/katalon-studio/docs/katalon-studio-gui-beta-for-linux/Screen-Shot-2018-02-07-at-11.50.50.png)

2\. Additional setup for Mobile and Web Services:

*   Mobile:
    
    *   Install Node.js: [https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
    *   Install Appium:
    
    ```groovy
    npm install -g appium 
    ```
    

*   *   If you see an EACCES error with Appium installation command, follow the instructions here (source: [https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally))
        

*   *   You may need to [set](https://askubuntu.com/questions/175514/how-to-set-java-home-for-java?utm_medim=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa) JAVA_HOME if you encounter error related to Java 'jar' file can't be found: 
    *   Set Appium directory **manually** in Windows -> Katalon Studio Preferences. Default directory should be: **/usr/lib/node_modules/appium/**  
        
*   To see with Web Service's response section and email's template content: Install **libwebkitgtk-3.0-0**
    
    ```groovy
    apt-get install libwebkitgtk-3.0-0
    ```
    

**Notes:**

*   In Spy/Record dialog, there is no "On top" option. To make it work, please select the Spy/Record dialog -> Right click then choose "Always On Top" option.
*   Generated command line ([https://docs.katalon.com/display/KD/Console+Mode+Execution](/display/KD/Console+Mode+Execution)) need to be adjusted manually to run on Linux environment.
    
    ```groovy
    ./katalon {option1} {option2} ... {optionN}
    ```
    

**Troubleshooting**

<table><thead><tr><th>Description</th><th>Causes (one of the following)</th><th>Solutions</th></tr></thead><tbody><tr><td>Invalid Project Description</td><td><p>.project file contains invalid information.<br><br>Katalon command was executed lines in the SAME folder of project folder <img src="../../images/katalon-studio/docs/katalon-studio-gui-beta-for-linux/Screen-Shot-2018-02-02-at-11.07.44.png"></p></td><td><p>-&nbsp;Delete .project file to let Katalon Studio generate back the valid information<br><br>-&nbsp;Execute commands outside of executed project folder<br><br><img src="../../images/katalon-studio/docs/katalon-studio-gui-beta-for-linux/Screen-Shot-2018-02-02-at-11.08.52.png"></p></td></tr><tr><td>'NoClassDefFoundError' error</td><td>Oracle JDK is used</td><td>-&nbsp;Uninstall current Oracle JDK - Install Open JDK8 after that: <a class="external-link" href="http://openjdk.java.net/install/" rel="nofollow">http://openjdk.java.net/install/</a>.</td></tr></tbody></table>
