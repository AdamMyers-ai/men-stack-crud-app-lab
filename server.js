const express = require("express");
const app = express();
const Car = require("./models/car");
const morgan = require("morgan");

// middlewares
require("./db/connection");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

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
