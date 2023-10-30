const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const serverName = "foo-api";
const PORT = 5001;

app.get('/', (req, res) => {
  return res.status(200).send({ "message": `Response from ${serverName}!` });
});

app.get('/app', (req, res) => {
  return res.status(200).send({ "message": `App Response from ${serverName}!` });
});

app.get('/app/v1', (req, res) => {
  return res.status(200).send({ "message": `App v1 Response from ${serverName}!` });
});

app.listen(PORT, () => console.log('Server is up and running'));