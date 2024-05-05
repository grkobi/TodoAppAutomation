# TodoAppAutomation
Short explanation for running this project:

Step 1: Make sure you have Node.js and Node Package Manager (npm) installed on your machine (you can do it by running the command node -v npm -v to verify which version of npm installed). If there is no npm installed run the command: npm install -g npm (from CMD). In order to install Node.js follow the instruction written here: https://nodejs.org/en/download.

Step 2: From your GIT CMD, find your preffered location to clone the project, and run: git clone https://github.com/grkobi/TodoAppAutomation.git. This will clone the automation project into your local machine.

step 3: Run 'npm init' in order to initialize a new Node.js project and create a package.json file. This file will contain metadata about the project.

Step 4: Install Typescript (which is the language of the automated tests): install --save-dev typescript. You can run this command from your IDE terminal.

Step 5: Run the command: npm install. This command installs a package and any packages that the automation project depends on.

Step 6: Install Cypress on your machine by using this command: npm install cypress --save-dev. This will install Cypress locally as a dev dependency for your project.

Step 7: Cypress configuration phase. Run npm run runner in order to launch Cypress. First you'll be asked to choose a testing type: E2E Testing or Component Testing. We need the E2E Testing for our project. Then, on the next step, you will see a set of configuration files appropriate to your chosen testing type. Click Continue. Lastly, you're presented with the list of compatible browsers Cypress found on your system. Choose one of them.

Step 9: In order to enable Cypress to simulate hover action, which is required for this automation project, run this command: npm i cypress-real-events

Step 10: You are all set. Click on the todoAppTest.cy.ts to start running the automated tests.
