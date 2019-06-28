---
title: "Contributing Guidelines" 
sidebar: katalon_studio_docs_sidebar
permalink: katalium-server/docs/katalium-contributing.html 
description: User guide for Katalium developer.
---

## Frontend

The GUI of Katalium Server is built with ReactJS and [Create React App (CRA)](https://github.com/facebook/create-react-app). This GUI is only enabled in Grid mode.

The recommended NodeJS version is `10.16.0` or newer.

Executing the following commands to start:

```
cd web
npm install
npm run start
```

CRA scripts will start a server at http://localhost:3000 with API requests forwarded to Selenium Grid at http://localhost:4444.

## Backend

Importing as Maven project into `IntelliJ IDEA`, `Visual Studio Code` or `Eclipse`.

To start the server in standalone mode, use entry class `com.katalon.kata.server.KatalonServer`.


To start the server as a hub, use entry class `com.katalon.kata.server.KatalonServer` with arguments `
-role hub -servlets com.katalon.kata.servlet.ListSessionsServlet,com.katalon.kata.servlet.KatalonConsole,com.katalon.kata.servlet.ScreenShotsServlet,com.katalon.kata.servlet.ConfigSessionsServlet,com.katalon.kata.servlet.SessionServlet`.

To start the server as a node, use entry class `com.katalon.kata.server.KatalonServer` with arguments `-role node -hub http://localhost:4444/grid/register -proxy com.katalon.kata.proxy.KatalonProxy`.

![](../../images/katalium-server/docs/katalium-contributing/1-katalium.png)

## Package

For more detailed infomation please refer to `Jenkinsfile`.

## References

Selenium Grid https://www.seleniumhq.org/docs/07_selenium_grid.jsp.