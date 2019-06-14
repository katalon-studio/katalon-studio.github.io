---
title: "From Command Line" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/from-command-line.html 
redirect_from:
    - "/display/KA/From+Command+Line/"
    - "/display/KA/From%20Command%20Line/"
    - "/x/FhbR/"
    - "/katalon-analytics/docs/from-command-line/"
description: 
---
> Katalon Analytics supports various test automation reports type including Katalon Studio, Katalon Recorder, and JUnit.

From Command Line
-----------------

> *   For uploading from Command Line
>     *   Download Katalon Studio **Reports Uploader** [here](https://github.com/katalon-studio/report-uploader/releases)
>     *   [Java JRE](https://www.java.com/en/download/manual.jsp) installed (How to set up Java environment [guide](https://www.tutorialspoint.com/java/java_environment_setup.htm))

> For Mac OS users, please change the **path** of Katalon Reports folder when using the syntax in **Terminal**

1.  Download Katalon Studio Reports Uploader [here](http://download.katalon.com/resources/katalon-report-uploader-0.0.3.jar).  
      
    
2.  In Katalon Analytics, navigate to **Settings > Projects**. Provide a **name** for the new project. Click **Create**. Once a project is **created**, Katalon Analytics will generate a **Project ID**. You will **need** this **ID** to **upload** Katalon Studio execution **report** later.  
      
    
3.  In Katalon Studio. Navigate to Test Explorers, select Report folder. Right-click > Open Containing Folder. Get the path of your Katalon Report folders.  
    i.e: C:\\Users\\abc\\Katalon Studio\\Web Sample\\Reports
4.  Start Command Prompt, use the below syntax to upload Katalon Report to Katalon Analytics

```groovy
java -jar katalon-report-uploader-0.0.4.jar --projectId=3 --path="d:\katalon-reports" --email=admin@mail.me --password=admin --type=katalon
```

  
_Where_

| projectId | Katalon Analytics project ID |
| path=" " | Local path of Katalon Studio Reports folder that you located from step 1 |
| email and password | Katalon Analytics credentials |
| type | Depending on the reports format. It can be one of the values: "katalon", "JUnit", or "katalon_recorder" |
