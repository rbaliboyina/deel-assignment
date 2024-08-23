1. download the code from given repository
2. navigate to root folder from command prompt
3. install cypress using following command
   npm install cypress --save--dev
4. run the scripts from command prompt in headless mode using follwoing command
   npx cypress run --spec 'cypress/e2e/growth-deel-tests/**.js'
5. video will get recorded and placed in cypress/videos folder - you can observe the running of the scirpt
6. screenshots got placed in cypress/screenshots - you can observe screenshots if any failures
7. Open cypress (open the cypress test runner) using following command for running head mode
   npx cypress open