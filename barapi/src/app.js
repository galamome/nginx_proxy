const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const serverName = "bar-api";

app.get('/', (req, res) => {
  return res.status(200).send({ "message": `Response from ${serverName}!` });
});

app.get('/app', (req, res) => {
  return res.status(200).send({ "message": `App Response from ${serverName}!` });
});

app.get('/app/v1', (req, res) => {
  return res.status(200).send({ "message": `App v1 Response from ${serverName}!` });
});

app.listen(5002, () => console.log('Server is up and running'));