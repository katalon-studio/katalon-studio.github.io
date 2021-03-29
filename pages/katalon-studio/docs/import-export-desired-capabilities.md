---
title: "Desired Capabilities Management"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/import-export-desired-capabilities.html
---

From v8.0, Katalon Studio allows you to import and export desired capabilities in Katalon Studio project(s). These functions support you to work with **Desired Capabilities** more efficiently and less error-prone.

### Export Desired Capabilities

1. Go to **Project/Settings/Desired Capabilities** > choose the driver that you want to export its desired capabilities.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/azure-devops/desired-capabilities-management/desired-capabilities.png" width=65%>

2. Click **Export**. In the dialog box, select the destination folder to save the export file > **Save**.

    > **Note**
    > 
    > The export configuration will be saved as a **JSON file** to reduce your effort spent on modification and recreation capabilities in case you want to copy the configuration to multiple places with some minor changes.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/azure-devops/desired-capabilities-management/export-chrome-save.png" width=50%>

### Import Desired Capabilities

1. Create new desired capabilities configuration using **JSON file**.

2. Go to **Project/Settings/Desired Capabilities** > choose the driver that you want to import the desired capabilities.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/azure-devops/desired-capabilities-management/desired-capabilities.png" width=65%>

3. Click **Import**. In the dialog box, **Browse** the import JSON file > **OK**.

    By default, all current existing desired capabilities will be overridden by imported ones.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/azure-devops/desired-capabilities-management/import-json.png" width=55%>
