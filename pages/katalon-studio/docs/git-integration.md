---
title: "Git Integration"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/git-integration.html
redirect_from:
    - "/display/KD/Git+Integration/"
    - "/display/KD/Git%20Integration/"
    - "/x/foEw/"
    - "/katalon-studio/docs/git-integration/"
    - "/katalon-studio/tutorials/git_integration_introduction.html"
description:
---

> The Git integration feature is based on **EGit**. You can refer to [http://wiki.eclipse.org/EGit/User_Guide](http://wiki.eclipse.org/EGit/User_Guide) for detailed user guide regarding EGit.

What is Git?
------------

Git is a powerful and popular system for version control. It is one of the essential tools for collaboration in software development teams. If your Katalon Studio automation project involves several or more members, you should use Git or another source control system for managing change and configuration on your project. Below are several specific benefits of using Git for your Katalon Studio projects.  

*   Git allows to undo mistakes
    *   The undo ability gives project teams the courage to try out ideas and concepts without worrying about the risk of breaking stuff, and thus, fosters a culture of innovation.
*   Git makes the team progress clearer
    *   A commit in Git refers to a change in automation scripts that a team member makes, indicating the progress of tasks.
    *   Git supports comparing versions of code to show differences between commits. It is useful to review a commit before it officially becomes final.
*   Git supports working offline
    *   Being to work offline makes your team more fail-safe. Each member can perform everything on his/her computer, independent from possible infrastructure downtime.
*   Never losing data ever again
    *   As daily work can be committed to the remote Git server, every team member working on a project has a full-fledged copy on his/her machine, including the project's complete change history.
    *   If any backup breaks down: just restore it using any team member's local repository or Git repository.

With Git, a repository can be shared to multiple members in a team to help to improve the team's collaboration and productivity.

Katalon Studio integration with Git introduction
------------------------------------------------

Git Integration is a powerful feature of Katalon Studio for collaboration between team members in test automation projects using Git. This tutorial presents a typical workflow for Git integration with Katalon Studio:

![workflow working with Git in Katalon](../../images/katalon-studio/tutorials/git_integration_introduction/Katalon-and-Git.png)

Configuration
-------------

1.  **Enable Git Integration.** In order to access all Git features, you need to enable Git Integration first. The option is available at following settings: **Window > Katalon Studio Preferences > Katalon > Git**. Once enabled, you can start using Git at Katalon Studio main toolbar.
    ![](../../images/katalon-studio/tutorials/git_integration_introduction/Enable-Git-integration-in-Katalon-Studio-2.png)

2. Now the Git integration feature should be **enabled**. We are ready to use Git from Katalon Studio.

![Enable Git integration in Katalon Studio](../../images/katalon-studio/tutorials/git_integration_introduction/Enable-Git-integration-in-Katalon-Studio.png)

3.  Advanced configurations are available at **Window > Preferences > Team > Git** in case you want more specific setups.
    ![](../../images/katalon-studio/docs/git-integration/image2017-6-29-163A563A16.png)


Clone a Katalon Studio project from a Git repository
----------------------------------------------------

After enabling Git Integration, you can clone an existing **Git repository** into a newly created directory on the local machine.

1.  Select **Clone Project** from **Git** menu of the main toolbar.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-143A13A12.png)

2.  The **Source Git Repository** dialog will be displayed. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-143A33A4.png)
    Where:

    | Field | Description |
    | --- | --- |
    | Repository URL | The URL to your Git repository (Should be in HTTPS protocol). |
    | Username | The username to access the Git repository. |
    | Password | The password to access the Git repository. |

    Enter all required information and click the **Next** button to let Katalon Studio gets details about your repository.

    > If you cannot access the repository after clicking **Next** button, the connection may have issues with SSL verification. You can use below command to bypass SSL verification (NOT recommended):
    >
    > ```groovy
    > git config --global http.sslVerify false
    > ```

3.  At **Branch Selection** screen, you can choose which branches to be checked out as local branches. Click the **Next** button to continue.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-163A303A51.png)

4.  At **Local Destination** dialog, specify the local location for cloning as well as the initial branch.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-163A323A6.png)

    Where:

    | Field | Description |
    | --- | --- |
    | Directory | The local storage location you want to store your Git's repository. |
    | Initial branch | All selected branches from the previous step will be displayed here. Select the branch to be used initially from this list. |

5.  Click **Finish** when you are done. Katalon Studio will automatically open your cloned project. 

6.  To verify settings, go to **Window > Katalon Studio Reference > Repository Settings**. Ensure that the Repository is selected correctly with URL specified.

![Integration with Git is completed](../../images/katalon-studio/tutorials/git_integration_introduction/Test-Project-is-ready-for-working1.png)


Publish a local non-Git project as a Git repository
-------------------------------------------------

**Share Project** is a step to enable Git configuration for you new Katalon Studio project.

1.  Select **Share Project** from **Git** menu of the main toolbar.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-143A273A20.png)


2.  Folder **.git** and file **.gitignore** will be created within the Katalon project.
    ![](../../images/katalon-studio/docs/git-integration/image2016-9-1-153A553A54.png)


    > **`.gitignore`** tells Git which files (or patterns) it should ignore. By default, **.gitignore** content will contain these files and patterns:
    >
    > /bin
    > /Libs
    > .settings
    > .classpath
    > /.svn


Commit
------

The **Commit** option allows users to view all current changes and decide which changes to be stored in local branch. Refer to [https://git-scm.com/docs/git-commit](https://git-scm.com/docs/git-commit) for detailed Git documentation regarding Commit command.

1.  Select the **Commit** option from **Git** menu of the main toolbar. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-143A383A43.png)


2.  The **Git Staging** tab will be display for configuration.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-143A413A43.png)
    Where:

    | Field | Description |
    | --- | --- |
    | Unstaged Changes | Changes which have been made. |
    | Staged Changes | Selected changes from **Unstaged Changes.** These changes will be committed. |

3.  From the **Unstaged Changes** list, select the changes to be committed, then right-click on them and select **Add To Index**. Selected changes will be added to the **Staged Changes** list.


4.  Enter your comments into the **Commit Message** then click on **Commit** to store your staged changes into the local branch.

Manage Branches
---------------

### New Branch

1.  Select the **New Branch** option from **Git** menu of the main toolbar. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-143A573A48.png)


2.  The **Create Branch** dialog will be displayed. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A23A3.png)
    Where:

    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Source</td><td><p>Select either remote or local branch which will be your source branch.</p><p><img src="../../images/katalon-studio/docs/git-integration/image2017-2-22-163A83A31.png"></p></td></tr><tr><td>Branch name</td><td>The name to be used for the new branch.</td></tr><tr><td>Checkout new branch</td><td>Option to let Katalon Studio checkout that branch after created.</td></tr></tbody></table>

3.  Click **Finish** to create new branch.

### Checkout Branch

The **Checkout Branch** option allow you to switch from one branch to another.

1.  Select the **Checkout Branch** option from **Git** menu of the main toolbar. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A73A15.png)


2.  The **Select Source** dialog will be displayed. Select the local branch you want to check out to be current branch. The branch with √ icon is your current local branch.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A83A40.png)


3.  Click **OK** to finish checking out to new local branch.

### Delete Branch

1.  Select the **Delete Branch** option from **Git** menu of the main toolbar. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A103A10.png)


2.  On this dialog, both local and remote branches are displayed. Select a branch to be deleted then click **OK**.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-163A63A37.png)

Fetch
-----

Retrieve all information about changes occurred in remote branches. Refer to [https://git-scm.com/docs/git-fetch](https://git-scm.com/docs/git-fetch) for detailed Git documentation regarding Fetch command

1.  Select the **Fetch** option from **Git** menu of the main toolbar. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-163A273A32.png)


2.  It will automatically fetch remote branches, tags, and remote changes.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-163A573A18.png)


3.  Select **History** from main toolbar 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-173A23A17.png)


4.  Details regarding all the branches and tags you've just fetched will be displayed.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-173A63A5.png)

Pull
----

Incorporate changes from a remote repository into the current branch. Refer to [https://git-scm.com/docs/git-pull](https://git-scm.com/docs/git-pull) for detailed Git documentation regarding Pull command

1.  Select the **Pull** option from **Git** menu of the main toolbar. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A533A48.png)


2.  In the **Pull** dialog, select the remote branch to be pulled into your local branch. Click **Finish**. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A543A56.png)


3.  The **Pull Result** dialog will be displayed with all data about pulling request taken on the selected branch.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A563A21.png)

Push
----

Update remote branch using the local branch. Refer to [https://git-scm.com/docs/git-push](https://git-scm.com/docs/git-push) for detailed Git documentation regarding Push command

Before doing any push, you have to commit your changes first. 

1.  Select **Push** option from **Git** menu of the main toolbar. 
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A143A38.png)

2.  The** Push to Branch **dialog will be displayed. Choose from the **Remote branch** list which branch to be updated (All remote branches in your Git repository are listed here). 

    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A193A28.png)
    Click **Next** after finished selecting your remote branch.

    > If you enter a different name besides the listed branches, a new remote branch with that name will be created accordingly.

3.  The **Push Confirmation**Dialog will be displayed with details regarding your commit.
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22-153A273A45.png)
    Click on **Finish** to push your commits to the remote repository.