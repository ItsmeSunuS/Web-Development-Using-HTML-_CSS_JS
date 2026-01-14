Exploring Backend Basics with Node.js

a. Package Managers
1.What is a Package Manager?

A package manager is a tool that helps developers install, update, remove, and manage external libraries (packages) that a project depends on.

Example:
Instead of writing all code from scratch, we can use ready-made libraries like boxen, express, etc., using a package manager.

2.Why do we need Package Managers in Backend Development?
In backend development:

Projects depend on many external libraries
Each library may depend on other libraries
Managing all this manually is difficult

Package managers:
Automatically download required libraries
Manage versions
Save time and reduce errors

3.Problems Faced If Package Managers Are Not Used

If package managers are not used:
Developers must manually download libraries
Version conflicts may occur
Project setup becomes slow and confusing
Team members may use different versions of libraries
Application may break unexpectedly

b.What is NPM?

NPM (Node Package Manager) is the default package manager for Node.js.
It allows developers to install and manage JavaScript libraries for Node.js projects.

=>npm install boxen

4.Why is NPM Important for Node.js Applications?

NPM is important because it:
Provides access to millions of packages
Makes dependency management easy
Helps maintain consistent project structure
Simplifies collaboration between developers

5.How NPM Helps in Managing Dependencies.?

Installs dependencies automatically
Stores dependency details in package.json
Locks exact versions using package-lock.json
Allows easy updates or removal of packages
=> npm install express

c. Backend Project Initialization

6.What is the command used to initialize a backend (Node.js) project?

Command Used to Initialize a Backend (Node.js) Project
=>npm init

Explain what npm init and npm init -y do

=> npm init

Starts an interactive setup.
Asks questions like project name, version, description, etc.
Creates a package.json file based on user input.

=>npm init -y

Skips all questions.
Creates package.json with default values.
Faster and commonly used.

d. Files and Folders Created After Project Initialization.?

1. package.json
   
Purpose:
Stores project metadata
Lists dependencies
Contains scripts to run the project

Importance:
Helps others understand the project.
Required to install dependencies.

2.node_modules

Purpose:
Contains all installed packages and their dependencies.

Importance:
Required for the application to run.
Automatically recreated using npm install.

3.package-lock.json

Purpose:
Locks exact versions of installed dependencies.

Importance:
Ensures same dependency versions across all environments
Improves consistency and reliability.

4.Files/Folders That Should NOT Be Pushed to GitHub

node_modules/

Reason:
Very large in size.
Can be recreated using npm install.

Files That MUST Be Committed,

package.json.
package-lock.json.
Source files (e.g., index.js).

Reason:
These files define the project structure.
Required for others to run the project correctly.
