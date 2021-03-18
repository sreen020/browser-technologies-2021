import bodyParser from "body-parser";
import express from "express";
import data from "./data.json";

import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// static files
app.use(express.static("public"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/shoppingBag", (req, res) => {
  res.render("shopping-bag.ejs");
});

app.post("/shoppingBag", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render("shopping-bag.ejs", { data: req.body });
});

// Start server
app.listen(port, () => console.log("Listening to port " + port));
