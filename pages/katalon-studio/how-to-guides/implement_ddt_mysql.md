---
title: "How to implement Data-driven Testing with MySQL?"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/how-to-guides/how-to-implement-ddt-mysql.html
redirect_from:
    - "/katalon-studio/tutorials/how-to-implement-ddt-mysql.html"
description:
---

Prior to v8.0.0, MySQL is one of the libraries having a built-in JDBC driver in Katalon Studio. From v8.0.0 onwards, its executable jar file is removed from our bundled libraries, giving you flexibility in choosing which MySQL version to connect. 

To keep the MySQL database in use, you need to add its driver to the external library for establishing the database connection. See which libraries Katalon Studio supports built-in JDBC drivers [here](https://docs.katalon.com/katalon-studio/docs/database-settings.html#introduce-database-connection).

This document shows you how to add a driver for the MySQL database connection.

**Requirements**

- Katalon Studio v8.0.0+.
- You already set up MyQSL Database.
- MySQL Database is running.

### Add an external JDBC driver for MySQL database connection

Do as follows:

1. Download MySQL executable jar file [here](https://dev.mysql.com/downloads/connector/j/). The version of JDBC driver must be compatible with MySQL version.

2. Go to **Project/Settings/Library Management** > **Add** the jar file to the external library.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/how-to-guides/configure_mysql/mysql-jar.png" width=70%>

3. In **Project Settings**, go to **Database** to configure the database connection.

    - Select **Secure User and Password** to enable **User** and **Password** for editing.
    - Input **User** name and **Password** used for authentication.
    - Enter **Connection URL**.

        <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/how-to-guides/configure_mysql/connect-with-my-sql-db.png" width=70%>

    - Click **Test Connection** to verify whether your database is connected successfully.
    - Click **Apply and Close** to complete the connection process.

Next: See [Manage Test Data](https://docs.katalon.com/katalon-studio/docs/manage-test-data.html#create-a-database-data).
