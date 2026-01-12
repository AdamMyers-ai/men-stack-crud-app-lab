const Car = require("../models/car.js");
const express = require("express");
const router = express.Router();

// I.N.D.U.C.E.S

// Index
router.get("/cars", async (req, res) => {
  const allCars = await Car.find();
  res.render("cars/index.ejs", { cars: allCars });
});

// New

// Delete

// Update

// Create

// Edit

// Show

module.exports = router;
