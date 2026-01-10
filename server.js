const express = require("express");
const app = express();
const Car = require("./models/car");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const carController = require("./controllers/carController");

// middlewares
require("./db/connection");
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// routes

// landing page
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.use(carController);

// route to catch undefined urls
app.get("/*splat", (req, res) => {
  res.render.apply("404.ejs", { url: req.url });
});

app.listen(3000, () => {
  console.log("Listening to the open road on port 3000");
});
