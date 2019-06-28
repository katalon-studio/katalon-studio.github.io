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

Download **Reports Uploader** [here](https://github.com/katalon-studio/report-uploader/releases).

Install [Java JRE](https://www.java.com/en/download/manual.jsp).

Get the path to your Katalon Report folders, e.g. `C:\Users\alex\Katalon Studio\Web Sample\Reports\Test Suite\20190523_143946`.

Start Command Prompt, use the following command to upload Katalon Report to Katalon Analytics:

```
java -jar katalon-report-uploader-0.0.5.jar --projectId=3 --path="d:\katalon-reports" --email=admin@mail.me --password=admin --type=katalon
```

Where:

* `projectId`: Katalon Analytics project ID
* `path`: Local path of Katalon Studio Reports folder that you located from step 1
* `email`: Email that is used for logging into Katalon Analytics
* `password`: API Key (recommended)
* `type`: one of the values "katalon", "JUnit", or "katalon_recorder"
