---
title: "TestOps Subscription via Website"
sidebar: katalon_analytics_docs_sidebar
permalink: katalon-analytics/docs/testops-subscription-via-Website.html 
description: 
---
## TestOps Subscription via Website

Choose the relevant instructions if you are:
1. A user who has registered a Katalon account but not signed in:
* For signed-in user who has only one organization
* For signed-in user who has multiple organizations
2. A user who has not yet registered a Katalon account  

### For users with Katalon account but not signed in
Start the following steps to log in:
1. Go to TestOps Pricing Website 
2. Choose **Plan** and click **Get Started**
3. Navigate to **Login** screen 

After logging in successfully, check if you fall in the following categories:

*For signed-in user with only one organization*:
* Navigate users to the **Katalon TestOps Plan** screen that displays your specified orders earlier, click **Subscribe**

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-april-release-subscription/subscription-1.png" width=70%>

* Click **Check Out** to review the order.
* Fill in **Billing information**. You must fill all required fields.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-april-release-subscription/subscription-2.png" width=70%>

*For signed-in user with multiple organizations*:
* Navigate to choose the organization
* Click **Check Out** to review the order.
* Fill in **Billing information**. You must fill all required fields.

### For users without Katalon account 
Start the following steps to register:
* Go to TestOps Pricing website
* Choose **Plan** and click **Get Started**
* Navigate to **Sign Up** screen

After signing up, an organization is automatically created with your email as the organization name. Continue the following steps: 
* Navigate to **Katalon TestOps Plan** screen that displays your specified orders earlier

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-april-release-subscription/subscription-1.png" width=70%>

* Click **Check Out** to review the order
* Fill in **Billing information**. You must fill all required fields.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-april-release-subscription/subscription-2.png" width=70%>

### Successful payment process 
If payment is successful, the screen displays as follow: 

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-april-release-subscription/subscription-3.png" width=70%>

Continue the following steps:
* Send a request to Recurly to create a new subscription immediately
* Send a request to Stripe to create a new invoice.


If payment fails, it could be the following reasons:
* Invalid card. "Invalid card number” error displays and restricts checking out
* Other reasons. Errors from Stripe display and restrict checking out

If the card validation process has passed but the system fails in charging the card, start [dunning process](https://docs.recurly.com/docs/dunning-management).
* If successful, continue the subscription
* If failed, terminate the subscription
