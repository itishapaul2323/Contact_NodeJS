// const express = require('express');
// const app = express();
// const dotenv = require('dotenv').config();

// const port = process.env.PORT || 5001;

// app.use('/api/contacts', require('./routes/contactRoutes'));

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });

const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});