---
title: "How to perform Database Testing using Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/connect_db_gui_testing.html
redirect_from:
    - "/katalon-studio/tutorials/connect_db_gui_testing.html"
description: "Katalon Studio allows users to create custom keywords to address specific needs. With custom keywords, you can connect and perform database testing."
---
Katalon Studio allows users to [create custom keywords](/katalon-studio/tutorials/advanced/create-custom-keyword/) to address specific needs. With custom keywords, you can connect to databases and perform database testing. This tutorial describes details on how to create custom keywords for database testing in Katalon Studio.

Below is a code sample demonstrating how to

*   establish a database connection
*   execute a query
*   close  the connection

```groovy
package com.database
 
import java.sql.DriverManager
 
import java.sql.ResultSet
 
import java.sql.Statement
 
import com.kms.katalon.core.annotation.Keyword
 
import com.mysql.jdbc.Connection
 
public class DemoMySql {
 
private static Connection connection = null;
 
/**
 
* Open and return a connection to database
 
* @param dataFile absolute file path
 
* @return an instance of java.sql.Connection
 
*/
 
//Establishing a connection to the DataBase
 
@Keyword
 
def connectDB(String url, String dbname, String port, String username, String password){
 
//Load driver class for your specific database type
 
String conn = "jdbc:mysql://" + url + ":" + port + "/" + dbname
 
//Class.forName("org.sqlite.JDBC")
 
//String connectionString = "jdbc:sqlite:" + dataFile
 
if(connection != null && !connection.isClosed()){
 
connection.close()
 
}
 
connection = DriverManager.getConnection(conn, username, password)
 
return connection
 
}
 
/**
 
* execute a SQL query on database
 
* @param queryString SQL query string
 
* @return a reference to returned data collection, an instance of java.sql.ResultSet
 
*/
 
//Executing the constructed Query and Saving results in resultset
 
@Keyword
 
def executeQuery(String queryString) {
 
Statement stm = connection.createStatement()
 
ResultSet rs = stm.executeQuery(queryString)
 
return rs
 
}
 
//Closing the connection
 
@Keyword
 
def closeDatabaseConnection() {
 
if(connection != null && !connection.isClosed()){
 
connection.close()
 
}
 
connection = null
 
}
 
/**
 
* Execute non-query (usually INSERT/UPDATE/DELETE/COUNT/SUM...) on database
 
* @param queryString a SQL statement
 
* @return single value result of SQL statement
 
*/
 
@Keyword
 
def execute(String queryString) {
 
Statement stm = connection.createStatement()
 
boolean result = stm.execute(queryString)
 
return result
 
}
 
}

```

_Tips: Press "_**_Ctrl + Shift + o_**_" to automatically import missing libraries in test scripts._

The Custom Keywords file will look like the following:

![Katalon Custom Keywords](../../images/katalon-studio/tutorials/connect_db_gui_testing/Test-Explorer_Custom-Keywords.png)

You can add the sample code above to your keyword file and modify the details as appropriated. Refer to these links for the formats of database connection strings:

*   For MSSQL: [https://www.connectionstrings.com/sql-server/](https://www.connectionstrings.com/sql-server/)
*   For Oracle: [https://www.connectionstrings.com/oracle/](https://www.connectionstrings.com/oracle/)

**Use Defined Keywords in Test Cases for DB Testing**

1\. Create new custom keywords for database connection (see above).

2\. Copy the DB script provided above and paste it into the new keyword editor as illustrated below:![Katalon Defined Keywords](../../images/katalon-studio/tutorials/connect_db_gui_testing/DB-Testing.png)