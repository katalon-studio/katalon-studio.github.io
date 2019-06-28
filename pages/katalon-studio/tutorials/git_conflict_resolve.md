---
title: "Resolve Git conflicts using Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/git_conflict_resolve.html
redirect_from:
    - "/katalon-studio/tutorials/git_conflict_resolve.html"
description: "Git conflicts occur when two people make changes to the same file concurrently. This article will show you how to resolve Git conflicts using Katalon Studio"
---
Why do we have Git conflicts?
-----------------------------

In a source control system like Git, conflicts may occur when two or more people make changes to the same file concurrently. The conflicts may appear at a member's local repository or Git remote repository. In order to avoid conflicts, the team must collaborate following several Git practices. For example, before pushing new source code to the Git remote repository, one must remember to fetch the latest version from Git remote repository, resolve any conflicts and merge the code with local version.
The chart below demonstrates how conflicts may occur when Tom and Emma are working in the same project. The conflicts occur when Tom and Emma try to push new code to the Git remote repository without updating the changes from each other.

![Git conflicts Katalon Studio](../../images/katalon-studio/tutorials/git_conflict_resolve/Git-conflict.png)

Resolve Git conflicts using Katalon Studio
------------------------------------------

Let's consider the following situation: Tom and Emma are working on the same test case in a test project. Emma added a new comment ("EMMA ADDED THIS COMMENT"), then committed and pushed the change to the Git remote repository.

![Resolve Git Conflict Katalon Studio](../../images/katalon-studio/tutorials/git_conflict_resolve/Git-conflict-2.png)

At almost the same time, Tom also added a  new comment ("TOM ADDED THIS COMMENT"), then committed and tried to push to the Git remote repository.

![Resolve Git Conflict Katalon Studio](../../images/katalon-studio/tutorials/git_conflict_resolve/Resolve-Git-conflict-2.png)

Unfortunately, since Emma had pushed the code before Tom, so the version of code in Git was different from the version of code in Tom's local repository and therefore, Git rejected Tom's  "push" action.

_What should Tom do to have push its change to the Git remote control?_

First, Tom has to "pull" the code from the Git remote repository to his local machine.

![](../../images/katalon-studio/tutorials/git_conflict_resolve/Resolve-Git-conflict-3.png)

Obviously, Tom will see a message about the conflict:

![Resolve Git conflict](../../images/katalon-studio/tutorials/git_conflict_resolve/Resolve-Git-conflict-4.png)

In the "Script" mode of the test case "**TC2_Verify Successful Appointment**" in Tom's Katalon Studio project, there are errors with indicators such as "<<<<<<<" (convention from Git). Let's look at the script more carefully:

![Resolve Git conflict](../../images/katalon-studio/tutorials/git_conflict_resolve/Resolve-Git-conflict-5.png)

Recall that the comments were added by Tom and Emma, and the "conflict" is now on Tom's Katalon Studio project. Everything within **"<<<<<<< HEAD"** and **"======="** is the change from Tom. And, everything within **"======="** and **">>>>>>\> branch 'master'…"** comes from Emma, which is currently in the Git remote repository.

Now Tom has to decide which change is correct, or both are correct or wrong. Tom has to replace these lines of code by the correct one, e.g., "THIS IS THE CORRECT COMMENT":

![Resolve Git conflict](../../images/katalon-studio/tutorials/git_conflict_resolve/Resolve-Git-conflict-6.png)

After resolving the conflict, Tom is now able to commit and push the change to the Git remote repository.

### Notes

In order to minimize the conflict in a team having more than one members, you should define a process from the very beginning so that all team members are on the same page when using Git. Here are some suggestions for good practices:

*   **Commit often**: do not wait until a huge amount of scripts created to commit and push to the Git remote repository. The smaller set of the scripts is pushed, the easier you resolve the conflict.
*   **Pull** changes from the Git remote repository **before** working on new scripts and before **committing**.
*   Each member works on **each feature at a time**.