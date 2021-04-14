
## Plan Test Suite

Before we run a test suite, we need to create multiple automated test cases in line with the test suite goal. This helps prevent chaos and restructuring of test cases.

As a test suite is a collection of multiple different or duplicate test cases, executing a test suite means that each test case is run successively and automatically.

Planning test suite process before creating automated test cases:
* **Define test suite goals** and group actions of a particular web experience together. A test suite could compile a series of actions depicting a particular user experience on our website. For example, to test user’s online shopping experience on your website, your test suite might include the following actions:
1. Signup/login test case
2. Enter shopping cart test case
3. Checkout test case
4. Order confirmation test case

* **Plan test cases** by deciding which action/group of actions each test case performs, run test cases for double checking. Name and put test cases in a test suite accordingly. This creates a test suite flow and minimizes errors when running a test batch. 

* **Plan test suite operation** by setting the time it is run. If there are hundreds of test cases, running the batch overnight is time-saving. *It is highly recommended that failure handling options such as [self-healing](https://docs.katalon.com/katalon-studio/docs/self-healing.html#tutorial-and-usage-example) and [smart wait](https://docs.katalon.com/katalon-studio/docs/webui-smartwait.html) are enabled to avoid operation failures at night when no one is available for checking*.

* **View test suite reports** to see operation results and check whether there is a test failure. If yes, find out where and why it failed. Katalon Studio logs test suite results in different formats and provides a full account of the test suite process to help spot errors and reduce test case restructuring time. 

The test suite is successful if each test case runs through successfully. 
