---
title: "Slack Integration"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/slack-integration.html
redirect_from:
    - "/display/KD/Slack+Integration/"
    - "/display/KD/Slack%20Integration/"
    - "/x/boUw/"
    - "/katalon-studio/docs/slack-integration/"
description:
---

This feature has been moved to [Slack integration plugin](https://store.katalon.com/product/4/Slack-Integration) for Katalon Studio.

<details><summary>Deprecated Content</summary>

General Settings
----------------

You can receive Katalon Studio notifications for Slack by enabling Slack Integration. This setting is available at **Window > Katalon Studio Preferences > Katalon > Team Collaboration**.

![](../../images/katalon-studio/docs/slack-integration/image2017-6-29-163A573A34.png)

1.  Check on the **Using Slack** checkbox. The entire screen will be changed to editable mode. Where:

    | Field | Description |
    | --- | --- |
    | Authentication Token | The authentication token to make the connection to your Slack's account. Follow this [help](/display/KD/Slack+Integration#SlackIntegration-ObtainSlackauthenticationtoken) to obtain the Slack authentication token. |
    | Channel/Group | The channel/group of Slack to get messages regarding activities from Katalon Studio. |
    | Post the message as the authenticated user | Katalon Studio will use your Slack username when posting messages to Slack. |
    | Bot Username | You can provide another name here which Katalon Studio will use instead of your Slack username. |

2.  Provide all the required information above and click **Test Connection**. 
    If the connection from Katalon Studio to your Slack team space is successfully established, you can verify as below:
    ![](../../images/katalon-studio/docs/slack-integration/2.png)


3.  The **Send message to Slack when** displays all the actions in Katalon Studio, that will result in sending notifications to Slack.
    ![](../../images/katalon-studio/docs/slack-integration/3.png)


4.  Select your preferred actions to get the notification and click **OK** to save Slack configuration.

    > All the above preferences are saved into the file "**com.kms.katalon.composer.integration.slack.prefs**" under the "**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**" location in your Katalon Studio build folder. You can manually modify the values in this file to change how Katalon Studio works with Slack.


Obtain Slack authentication token
---------------------------------

Follow the steps below to obtain the Slack authentication token:

1. Open your web browser and log in your Slack team space. Navigate to [Slack API App](https://api.slack.com/apps) to create a Katalon Studio app which is a chat bot to send notification to your Slack Work Space. Read more about Slack App [here](https://api.slack.com/slack-apps).


![](../../images/katalon-studio/docs/slack-integration/slack-1.png)

2.  Click on OAuth & Permissions on the left menu to get the Token and define Scopes to the chat bot. An authentication token will be generated. For example:


![](../../images/katalon-studio/docs/slack-integration/Screen-Shot-2018-08-06-at-10.50.04-AM.png)

3.  Select the desired Scopes for the app. Once finished, copy the OAuth Access Token to Katalon Studio Slack integration setting.


![](../../images/katalon-studio/docs/slack-integration/slack-2.png)

4.  Click Test Connection in Katalon Studio


![](../../images/katalon-studio/docs/slack-integration/Screen-Shot-2018-08-06-at-1.07.16-PM.png)

Verify posted messages in Slack
-------------------------------

You can verify whether the messages are correctly sent to your Slack team space from your Katalon Studio, as below:

1.  Assume that Katalon Studio is configured to send a notification whenever a test case is created.
2.  Create an empty test case.
3.  Navigate to your chosen Slack channel/group, a message posted from Katalon Studio should be displayed.
    ![](../../images/katalon-studio/docs/slack-integration/6.png)

</details>