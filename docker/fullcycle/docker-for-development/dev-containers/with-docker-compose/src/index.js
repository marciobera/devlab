const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || "Hello, World!";

app.get("/", (req, res) => {
  res.send(message);
});

app.get('/test-db', async (req, res) => {
  const mysql = require('mysql2')
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  })
  connection.connect(error => {
    if (error) {
      console.error('Error connecting to database: ', error)
      return;
    }

    res.send('Connected to DB');
  })
})

app.get('/external-api', async (req, res) => {
  // const address = 'http://host.docker.internal:8000/products'
  const address = 'http://external-api:8000/products'
  const response = await fetch(address)
  const data = await response.json()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Server is running ON http://localhost:${port}`);
});
