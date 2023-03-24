const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "welcome to fameux" });
});

app.get("*", (req, res) => {
  res.send({ status: 400, message: "not founs" });
});
app.listen(3000, () => {
  console.log("success");
});
