import bodyParser from "body-parser";
import express, { query } from "express";

import fs from "fs";
import { request } from "http";

const app = express();
const port = process.env.PORT || 5000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// static files
app.use(express.static("public"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  if (req.query.edit) {
    const readableData = JSON.parse(fs.readFileSync("./data.json"));
    const excistingShirt = readableData.data.find(
      ({ id }) => id == req.query.edit
    );

    res.render("index.ejs", { excistingShirt, id: req.query.edit });
  } else {
    res.render("index.ejs", { excistingShirt: undefined, id: Date.now() });
  }
});

app.get("/shoppingBag", (req, res) => {
  const readableData = JSON.parse(fs.readFileSync("./data.json"));
  const amount = readableData.data.length;

  res.render("shopping-bag.ejs", { data: readableData, amount: amount });
});

app.post("/addShoppingBag", urlencodedParser, (req, res) => {
  const readableData = JSON.parse(fs.readFileSync("./data.json"));
  const excistingShirt = readableData.data.find(({ id }) => id == req.body.id);
  if (excistingShirt) {
    excistingShirt.shirtColor = req.body.shirtColor;
    excistingShirt.gender = req.body.gender;
    excistingShirt.shirtSize = req.body.shirtSize;
    excistingShirt.userText = req.body.userText;
    excistingShirt.amount = req.body.amount;
  } else {
    readableData.data.push(req.body);
  }

  const stringData = JSON.stringify(readableData, null, 2);
  fs.writeFileSync("data.json", stringData);
  const amount = readableData.data.length;

  res.redirect("/shoppingBag");
});

// Start server
app.listen(port, () => console.log("Listening to port " + port));
