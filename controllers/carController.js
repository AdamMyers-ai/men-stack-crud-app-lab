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
router.get("/cars/new", (req, res) => {
  res.render("cars/new.ejs");
});

// Delete
router.delete("/cars/:carId", async (req, res) => {
  await Car.findByIdAndDelete(req.params.carId);
  res.redirect("/cars");
});

// Update

// Create

// Edit

// Show

module.exports = router;
