---
title: "Web Element Locators - How to group elements into a unique block"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/how_to_handle_web_element_block_locators.html
redirect_from:
    - "katalon-studio/tutorials/how_to_handle_web_element_block_locators.html"
description: "Web Element Locators - How to group elements into a unique block"
---

Very often, a web page has many elements that use the same formats and styles. One locator may identify more than one element, making it more difficult for developers to identify unique elements. See the example below:

![Agoda Hotels](../../images/katalon-studio/tutorials/how_to_handle_web_element_block_locators/agoda_list.png)

_(Source: https://www.agoda.com)_

In the example above, there are three ‘Select’ buttons, three ‘Outstanding’ hyperlinks, and other elements presented with the same labels or icons. If you use the ‘Select’ button as the locator, then at least three elements are identified. So the problem is how to deal with such situations to locate elements accurately.

**Absolute XPath**

The first option you might consider is using Absolute XPath:
```html
//*[@id='searchResult']/ul/li[2]/div/div[4]/div[2]/a
```
This option works. However, it is unable to identify which 'Select' button to locate; or if the order of the list has changed, users are very likely to click the wrong 'Select' button.

**Relative XPath for groups of elements**

Let’s look at the page again. You can see there are three grouped elements (three blocks) on the list. The structure of each item looks similar to that of one another. There are three ‘Select’ buttons and three ‘Outstanding’ links—however, these items are not the same. Users decide which ‘Select’ button and ‘Outstanding’ link to choose based on the associated name of the hotel. The hotels’ names are unique elements and can be good candidates for locators.

Here is the HTML code (I simplified it to demonstrate the case) of an item in the example.
``` html
<li class='hotel-link hotel-link-l clearfix' data-hotelid='995079'>
        <div class='hotel-info map-info'>
<h3 class='hotel-name'>
                <strong>
                    <a href='/mandarin-orchard-singapore' title='Mandarin Orchard Singapore'>
                        Mandarin Orchard Singapore
                    </a>
                </strong>
            </h3>
            <div class='hotel-grade'>
                <div class='c-reviews-box'>
                    <a href='/mandarin-orchard-singapore' target='_blank' class='hotel-review'>
                        <span class='rating'>Outstanding</span>
                        <span class='review-link' data-reviewlab='Reviews'>(1,465 Reviews)</span>
                    </a>
                    <span class='reviews-box-temp'></span>
                </div>                
            </div>
            <div class='price-box'>
                <div class='select-btn'>
                    <a data-index='1' href='/mandarin-orchard-singapore' target='_blank' >Select</a>
                </div>
            </div>
        </div>
    </li>
```
In order to define the boundary of a group of elements, you may need to find the element that encloses the group. In this example, the boundary is ```<li>``` and all of the elements are inside the ```<li>``` element.

Then, you need to determine a locator for this boundary. As a result, it is easier to locate the elements inside, which are now unique to each boundary. 

```html
//li[.//a[contains(., 'Mandarin Orchard Singapore')]]
```
(the locator of the 'Outstanding' link)
```html
//li[.//a[contains(., 'Mandarin Orchard Singapore')]]//a[contains(., 'Outstanding')]
```

(the locator of the 'Select' button)
```html
//li[.//a[contains(., 'Mandarin Orchard Singapore')]]//a[contains(., 'Select')]
```
Now, if you want to locate elements in another hotel, replace the hotel’s name with the one you want to access. Since there is no index being used, the locators still work well if the order of the hotels in the list is changed. This makes our locators more stable and easier to maintain.

**More examples**

Making a group of elements into a unique block is an essential task in Web UI testing. These groups of elements appear in many places in Web applications with different displays. For example:

**Issue list in JIRA**

![Issue list in JIRA](../../images/katalon-studio/tutorials/how_to_handle_web_element_block_locators/jira_list.png)

Unique block:
Each row in the table is a unique block
Key is a good candidate for unique identifier

**Reused controls**

![Dropdown control](../../images/katalon-studio/tutorials/how_to_handle_web_element_block_locators/dropdown.png)

**Unique block:**

 - Each instance of the control is a unique block
 - Control’s label is a good candidate for unique identifier

This article discusses the strategies of locating Web Elements on a webpage in different situations. These locator strategies reflect the mindset of a tester when performing UI automation tests: first, think about simple static locators, then gradually increase the complexity of the solution when simple methods are no longer feasible. 

It is important to mention that this following principle must be held in deciding locators: a locator must be unique, readable, and maintainable. If a locator does not uniquely represent the target element, problems will arise during the maintenance phase as there is no way to know which locator should be changed. 

Trong Bui - QAA at KMS-Technology

