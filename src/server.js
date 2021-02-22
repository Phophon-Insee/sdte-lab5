const express = require("express");
const app = express();

app.get("/studentId", (req, res) => {
  res.send("61070133");
});

module.exports = app;
