---
title: "How to handle Drop-down menu"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/how_handle_drop_down_menu.html
redirect_from:
    - "katalon-studio/tutorials/how_handle_drop_down_menu.html"
description: "A drop-down menu contains a list of options. This tutorial illustrates how to handle the drop-down list using Katalon Studio built-in keywords."
---
What is Drop-down?
------------------

A drop-down list (abbreviated drop-down; also known as a drop-down menu) is a graphical control element, similar to a list box, that allows the user to choose one value from a list. When a drop-down list is inactive, it displays a single value. When activated, it displays a list of values, from which the user may select one. When the user selects a new value, the control reverts to its inactive state, displaying the selected value. It is often used in the design of graphical user interfaces, including web design.

This tutorial illustrates how to handle the drop-down list using Katalon Studio built-in keywords.

The below image shows what the sample select command has.

1.  _Index:_ The index of the option to be selected/deselected.
2.  _Value:_ Thevalue of the "value" attribute.
3.  _Label:_ The exactly displayed text of a particular option

![DropDown Methods Explanation](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/DropDown_Methods_Explanation.png)

Deselect All Options
--------------------

We have a multi-select drop down as the following, values in a multi-select combo box include Admin, HR, Networking, Developer, Tester. This drop-down allows users to select multiple items.

![Multiple Attribute drop-down](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Multiple_Attribute_Image1.png)

We already have several items selected, for example, and now we want all selected items to be deselected. How can we accomplish this using Katalon?

We have a keyword called "deselectAllOption". This will deselect all the selected items in a combo box.

**Manual Mode:**

![DeSelectAll Manual mode](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/DeSelectAll_Manual.png)

**Script Mode:**

```groovy
'Launch Browser'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\DropDown\\\\MultiSelection_dropDown.html')
 
'Maximize the window'
 
WebUI.maximizeWindow()
 
'Select all the Options'
 
WebUI.selectAllOption(findTestObject('comboBox_Role'))
 
'Deselect all the options'
 
WebUI.deselectAllOption(findTestObject('comboBox_Role'))
 
'Taking the count of number of Selected Options and Storing it in a variable'
 
NoOfSelectedOptions = WebUI.getNumberOfSelectedOption(findTestObject('comboBox_Role'))
 
'After Deselect verifying the Number of Selected options with Actual result to Expected'
 
WebUI.verifyEqual(NoOfSelectedOptions, 0)

```

Get the number of selected options ('getNumberOfTotalOption')
-------------------------------------------------------------

This keyword returns a Count of number of options which are being selected in the combo box

For example, let's say in the combo box below the values Admin, HR are selected. If we want to get the number of selected options, we can use the keyword 'getNumberOfTotalOption'. In this case, it will return 2.

![Get-Number-Of-Selected-Options-Example](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Get-Number-Of-Selected-Options-Example.png)

**Manual Mode:**

![Get_Number_of_Selected_Option_manual](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Get_Number_of_Selected_Option_manual.png)

**Script Mode:**

```groovy
'Launch Browser'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\DropDown\\\\MultiSelection_dropDown.html')
 
'Maximize the window'
 
WebUI.maximizeWindow()
 
'Select All values available in the dropdown by Select All option'
 
WebUI.selectAllOption(findTestObject('comboBox_Role'))
 
'Capturing the Number of selected Values and storing it in a variable'
 
SelectedItems = WebUI.getNumberOfTotalOption(findTestObject('comboBox_Role'))
 
println('No of Selected Roles are ' + SelectedItems)
 
'Verifying the number of Options selected with Expected result'
 
WebUI.verifyEqual(SelectedItems, 5)

```

Get Number of Total Option (getNumberOfTotalOption)
---------------------------------------------------

This keyword returns the number of options listed in the combo box.

Example:

We have a drop-down and want to get the total number of available options in a drop-down then we will use 'getNumberOfTotalOption'.

![Total_Options_Image](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Total_Options_Image.png)

As it has 5 options in the dropdown it will return a value 5.

**Manual Mode:**

![Get Number of Total Options Manual](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Get_Number_of_Total_Options_Manual.png)

**Script Mode:**

```groovy
'Launch Browser'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\DropDown\\\\MultiSelection_dropDown.html')
 
'Maximize the window'
 
WebUI.maximizeWindow()
 
'Capturing the Toal Number of  Values in the dropdown and storing it in a variable'
 
TotalOptions = WebUI.getNumberOfTotalOption(findTestObject('comboBox_Role'))
 
println('No of Roles are :' + TotalOptions)
 
'Verifying the number of Options in the dropdown with Expected result'
 
WebUI.verifyEqual(TotalOptions, 5)

```

Select All Option
-----------------

It will select all options from the list.

**Manual Mode:**

![SelectAll Manual](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/SelectAll_Manual.png)

**Script Mode:**

```groovy
'Launch Browser'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\DropDown\\\\MultiSelection_dropDown.html')
 
'Maximize the window'
 
WebUI.maximizeWindow()
 
'Selecting all Options'
 
WebUI.selectAllOption(findTestObject('comboBox_Role'))
 
'Capturing the Number of selected Values and storing it in a variable'
 
SelectedOptions = WebUI.getNumberOfSelectedOption(findTestObject('comboBox_Role'))
 
'Verifying the number of selected options with Expected result'
 
WebUI.verifyEqual(SelectedOptions, 5)

```

Select Option By Index
----------------------

It will select the option at the given index. Index always starts from 0.

Example 1:

If we want a select 'Feb' from the below drop down then we will pass input 2 in the value.

Here in this example, we are Validating verify Option Selected By Index Also.

![Select by Index Example](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Select_by_Index_Example.png)

**Manual Mode:**

![SelectbyIndex manual](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/SelectbyIndex_manual.png)

**Script Mode:**

```groovy
'Open browser'
 
WebUI.openBrowser('file:///C:/Users/User/Desktop/Dropdown.html')
 
'Maximize the Window'
 
WebUI.maximizeWindow()
 
'Select the dropdown value by Select option By index Method'
 
WebUI.selectOptionByIndex(findTestObject('dropdown_Month'), 2)
 
'Verifying the Option is Selected by Index option'
 
WebUI.verifyOptionSelectedByIndex(findTestObject('dropdown_Month'), 2, 60)

```

Example 2:

If we want a select  Feb to Apr from the below combo box then we will pass input as Value 2-4 and Value type as String.

![Select_options_by_passing_Range_value](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Select_options_by_passing_Range_value.png)

![Input_Dialog_Box](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Input_Dialog_Box.png)

Select Option By Label
----------------------

It will select the option which has the exactly displayed text of a particular option.

**Example:**

If we want to select 'Apr' from the drop-down then we need to pass exactly visible text from it.

In this Example we are also verifying the option is select by Label Value by using Verify option Selected By Label.

![SelectByLabel_Expample](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/SelectByLabel_Expample.png)

**Manual Mode:**

![Select_option_By_label_Manual](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Select_option_By_label_Manual.png)

**Script Mode:**

```groovy
'Open browser'
 
WebUI.openBrowser('file:///C:/Users/User/Desktop/Dropdown.html')
 
'Maximize the Window'
 
WebUI.maximizeWindow()
 
'Select the dropdown value by Select option By Label Method'
 
WebUI.selectOptionByLabel(findTestObject('dropdown_Month'), 'Apr', false)
 
'Verifying the Option is Selected by Label option'
 
WebUI.verifyOptionSelectedByLabel(findTestObject('dropdown_Month'), 'Apr', false, 60)
 
WebUI.closeBrowser()

```

Select Option by Value
----------------------

It will Select the option which has value of the "value" attribute.

Example:

If we want to select 'Mar' from the drop-down then we need to pass the value as 3 as "Mar" has the value as 3 for Value attribute.

Here in this example we are Validating verify Option Selected By Value Also.

![SelectByValue Example](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/SelectByValue_Exp.png)

**Manual Mode:**

![](../../images/katalon-studio/tutorials/how_handle_drop_down_menu/Select_By_Value_Manual.png)

**Script Mode :**

```groovy
'Open browser'
 
WebUI.openBrowser('file:///C:/Users/User/Desktop/Dropdown.html')
 
'Maximize the window'
 
WebUI.maximizeWindow()
 
'Selecting the month from Select By value method'
 
WebUI.selectOptionByValue(findTestObject('dropdown_Month'), '3', false)
 
'Verifying the Option is Selected by Value option'
 
WebUI.verifyOptionSelectedByValue(findTestObject('dropdown_Month'), '3', false, 60)
 
WebUI.closeBrowser()

```

Using Katalon built-in keywords we can simple handle dropdowns, we will look into other scenarios of dropdowns such as 'verifying dropdown values are in alphabetical', 'verifying expected and actual dropdown values' using custom keywords. You may download the source code [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, please refer to [Katalon Studio WebUI](/display/KD/%5BWebUI%5D+Combo+box) tutorials.