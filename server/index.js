const express = require("express");
const path = require("path");
const morgan = require("morgan");
const colors = require("colors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(port, () => console.log(`SERVER ON @ ${port}!`.cyan));
