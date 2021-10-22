require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const jsforce = require('jsforce');
const conn = new jsforce.Connection({
  loginUrl: 'https://test.salesforce.com',
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/event', async (req, res) => {
  console.log('Hello Event!');
  res.json(req.body);
  loginSalesforce(req.body);
});

app.listen(PORT, () =>
  console.log(`✅ API Server started: http://${HOST}:${PORT}`)
);

async function loginSalesforce(message) {
  let loginDetails = await conn.login(
    process.env.username,
    process.env.password,
    function (err, userInfo) {
      if (err) {
        return console.error(err);
      }
    }
  );
  console.log(loginDetails);
  let results = await createEvent(message);
  console.dir(results);
}

async function createEvent(message) {
  let results;
  await conn
    .sobject('RateRequest__e')
    .create({ Message__c: JSON.stringify(message) }, (err, result) => {
      if (err) {
        console.err;
      }
      results = result;
    });
  return results;
}
