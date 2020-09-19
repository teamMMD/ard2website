const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 1111;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../public/dist"));

app.listen(PORT, () => console.log("Server listening on PORT: ", PORT));
