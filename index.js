const express = require("express");
const app = express();
require("dotenv").config();
require("./config/mongodb");

const PORT = process.env.PORT || 5556

const fileupload = require("express-fileupload");
app.use(fileupload());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", require("./routes/admin.routes"));

app.all("/", (req, res) => {
  res.send("Server is start successfully");
});

app.all("*", (req, res) => {
  return res.status(200).send({
    status: false,
    message: `URL not found`,
  });
});

app.use((err, req, res, next) => {
  console.log("error", err);
  res.status(err.status || 500);
  res.send({
    success: false,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
