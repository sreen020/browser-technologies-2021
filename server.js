import bodyParser from "body-parser";
import express from "express";

import fs from "fs";
const data = fs.readFileSync("./data.json");
const readableData = JSON.parse(data);

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
  const stringData = JSON.stringify(req.body);
  fs.writeFileSync("data.json", stringData, finished);

  function finished() {
    console.log("finished...");
  }
  const newData = fs.readFileSync("./data.json");
  const sendData = JSON.parse(newData);
  res.render("shopping-bag.ejs", { data: sendData });
});

// Start server
app.listen(port, () => console.log("Listening to port " + port));
