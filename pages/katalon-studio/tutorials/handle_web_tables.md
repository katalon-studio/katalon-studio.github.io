---
title: "How to handle Web Tables"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle_web_tables.html
redirect_from:
    - "katalon-studio/tutorials/handle_web_tables.html"
description: "A Web table is a collection of rows and columns. This article will show you how to handle web tables using Katalon Studio."
---
What is Web Tables?
-------------------

A Web table is a collection of rows and columns. For a Web table, data is stored in cells. Tables are used not only in data sheets but also in organizing web pages.

A Web table normally contains the following tags:

*   table – indicates a table.
*   tbody – defines a container for rows and columns.
*   tr – specifies a row in the table.
*   td / th – table data/table header indicating columns in respective table rows.

**A basic web table**

![basic web table](../../images/katalon-studio/tutorials/handle_web_tables/A-Basic-Webtable.png)

**A basic web table's HTML code looks like below:**

![web table html](../../images/katalon-studio/tutorials/handle_web_tables/web-tables-HTML-code.png)

Handling Web tables is perhaps much more complicated than any other elements or controls. This article will show you how to handle web tables using Katalon Studio.

Handle web tables with Katalon Studio
-------------------------------------

### Example 1: You want to get a text from a Web table and verify it.

**Scenario:**  Let's say we need to find out which country the 'Pay talk' company in the above table belongs to.

First of all, we will find the location of table then we will store all table elements in the list. Next, we will run a loop and iterate through each row and column and capture the value in each cell.

**Script Mode:**

```groovy
import org.openqa.selenium.By as By
 
import org.openqa.selenium.WebDriver as WebDriver
 
import org.openqa.selenium.WebElement as WebElement
 
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
WebUI.openBrowser('D:\\\\Katalon Tutorial\\\\Katalon Tutorial\\\\WebTable_Handling_Scenario1.html')
 
WebUI.maximizeWindow()
 
WebDriver driver = DriverFactory.getWebDriver()
'Expected value from Table'
String ExpectedValue = "Pay Talk";
'To locate table'
WebElement Table = driver.findElement(By.xpath("//table/tbody"))
'To locate rows of table it will Capture all the rows available in the table'
List<WebElement> rows_table = Table.findElements(By.tagName('tr'))
'To calculate no of rows In table'
int rows_count = rows_table.size()
 
'Loop will execute for all the rows of the table'
Loop:
for (int row = 0; row < rows_count; row++) {
'To locate columns(cells) of that specific row'
List<WebElement> Columns_row = rows_table.get(row).findElements(By.tagName('td'))
 
'To calculate no of columns(cells) In that specific row'
int columns_count = Columns_row.size()
 
println((('Number of cells In Row ' + row) + ' are ') + columns_count)
 
'Loop will execute till the last cell of that specific row'
for (int column = 0; column < columns_count; column++) {
'It will retrieve text from each cell'
String celltext = Columns_row.get(column).getText()
 
println((((('Cell Value Of row number ' + row) + ' and column number ') + column) + ' Is ') + celltext)
 
'Checking if Cell text is matching with the expected value'
if (celltext == ExpectedValue) {
'Getting the Country Name if cell text i.e Company name matches with Expected value'
println('Text present in row number 3 is: ' + Columns_row.get(2).getText())
 
'After getting the Expected value from Table we will Terminate the loop'
break Loop;
}
}
}

```

**Manual Mode:**

Switch to **manual mode** tab to view test case step by step.

** ![Handle-webtable](../../images/katalon-studio/tutorials/handle_web_tables/Handle-webtable.png)**

### Example 2: You want to perform actions on the Web table below

![Web-table](../../images/katalon-studio/tutorials/handle_web_tables/Web-table.png)

**Scenario: **

Let's say we need to edit a student record that has the graduation year of 2018

**Script Mode:**

```groovy
import org.openqa.selenium.By as By
 
import org.openqa.selenium.WebDriver as WebDriver
 
import org.openqa.selenium.WebElement as WebElement
 
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
WebUI.openBrowser('D:\\\\Katalon Tutorial\\\\Katalon Tutorial\\\\WebTable_Handling_Scenario2.html')
 
WebUI.maximizeWindow()
 
'Expected value from Table'
 
String ExpectedValue = '2018'
 
WebDriver driver = DriverFactory.getWebDriver()
 
'To locate table'
 
WebElement Table = driver.findElement(By.xpath('//table/tbody'))
 
'To locate rows of table it will Capture all the rows available in the table '
 
List<WebElement> Rows = Table.findElements(By.tagName('tr'))
 
println('No. of rows: ' + Rows.size())
 
'Find a matching text in a table and performing action'
 
'Loop will execute for all the rows of the table'
 
table: for (int i = 0; i < Rows.size(); i++) {
 
'To locate columns(cells) of that specific row'
 
List<WebElement> Cols = Rows.get(i).findElements(By.tagName('td'))
 
for (int j = 0; j < Cols.size(); j++) {
 
'Verifying the expected text in the each cell'
 
if (Cols.get(j).getText().equalsIgnoreCase(ExpectedValue)) {
 
'To locate anchor in the expected value matched row to perform action'
 
Cols.get(4).findElement(By.tagName('a')).click()
 
table: break
 
}
 
}
 
}

```

**Manual Mode:**

Switch to **manual mode** tab to view test case step by step.

![Handle-webtable-2](../../images/katalon-studio/tutorials/handle_web_tables/Handle-webtable-2.png)

Examples above provide a basic understanding on how to handle web tables in Katalon Studio. If you are new to automation testing, it is recommended to take advantage of Manual Mode in Katalon Studio. For advanced testers, Script Mode provides you flexibility in creating and manipulating tests. Please download the source code [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, please refer to [Katalon Studio Tutorials](/katalon-studio/tutorials/) and [Katalon Forum](https://forum.katalon.com/).