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
app.get("/", async (req, res)=>{
    res.r
})