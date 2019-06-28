---
title: "Katalium Server User Guide" 
sidebar: katalon_studio_docs_sidebar
permalink: katalium-server/docs/katalium-user-guide.html 
description: User guide for Katalium end-user.
---

Install Java. The recommended version is Java 8.

Download and extract the latest release of the Katalium Server at https://github.com/katalon-studio/katalium-server/releases. The `kata-server.jar` can be run in Standalone, Grid Hub, or Grid Node mode.

## Standalone mode

To start the server in standalone mode, execute `standalone.sh` file (in macOS and Linux) or `standalone.bat` file (in Windows).

```
cd katalium-server
standalone.bat
```

```
cd katalium-server
chmod u+x ./standalone.sh
```

![](../../images/katalium-server/docs/katalium-user-guide/1-standalone-mode.png)

Activate the server for the first time.

**KATALON_EMAIL**: Enter your Katalon account. You can sign up for a free account at https://www.katalon.com.

**KATALON_API_KEY**: Enter the API Key. You can generate new API keys at https://analytics.katalon.com. Go to **[Profile](https://analytics.katalon.com/user/profile)** > **Create API Key** > Input key name > Click **Create**.

## Grid mode

### Grid Hub

To start the server as a Grid Hub, execute `hub.sh` file (in macOS and Linux) or `hub.bat` file (in Windows).

```
cd katalium-server
hub.bat
```

```
cd katalium-server
chmod u+x ./hub.sh
```

See **Standalone mode** for activation steps.

### Grid Node

To start the server as a Grid Node, execute `node.sh` file (in macOS and Linux) or `node.bat` file (in Windows). Before executing the scripts, please set the `hubURL` so that Grid Nodes can register themselves with the above Grid Hub, e.g. `http://hub_ip:4444`.

```
cd katalium-server
node.bat
```

```
cd katalium-server
chmod u+x ./node.sh
```

See **Standalone mode** for activation steps.