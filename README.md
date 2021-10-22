# Simple Express Server for Publishing Salesforce platform events

Super Simple example of using Express with Salesforce Platform Events!

## Get Started

1. Clone the repo `gh repo clone agentgill/publish-platform-events-with-express`
2. Run `npm i` to install node dependencies
3. Create .env file and add your Salesforce login detils
4. Update line 42 in app.js `.sobject('RateRequest__e')` to be your own Platform Event object
5. Run `node app.js` or `npx nodemon app.js` to start your local server
6. Install VSCode Extension **Thunder Client** or download Postman
7. Post some JSON to the endpoint and watch it magically appear in your Salesforce Platform Event
8. Install Streaming Monitor in Salesforce to easily view Platform Events you post


## Example .env file

```env
username=mysalesforceuser@salesforce.com
password=mypassword
```

## Example Rest POST

```rest
POST https://localhost:3000 HTTP/1.1
content-type: application/json

{
    "Hello": "World",
}
```
