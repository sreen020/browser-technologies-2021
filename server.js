import bodyParser from "body-parser";
import express from "express";

import fs from "fs";

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
  res.render("index.ejs");
});

app.get("/shoppingBag", (req, res) => {
  const readableData = JSON.parse(fs.readFileSync("./data.json"));
  const amount = readableData.data.length;

  res.render("shopping-bag.ejs", { data: readableData, amount: amount });
});

app.post("/addShoppingBag", urlencodedParser, (req, res) => {
  const readableData = JSON.parse(fs.readFileSync("./data.json"));

  readableData.data.push(req.body);

  const stringData = JSON.stringify(readableData, null, 2);
  fs.writeFileSync("data.json", stringData);
  const amount = readableData.data.length;
  console.log(amount);

  res.render("shopping-bag.ejs", { data: readableData, amount: amount });
});

// Start server
app.listen(port, () => console.log("Listening to port " + port));
