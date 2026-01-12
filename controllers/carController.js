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
router.put("/cars/:carId", async (req, res) => {
  if (req.body.isRoadworthy === "on") {
    req.body.isRoadworthy = true;
  } else {
    req.body.isRoadworthy = false;
  }

  await Car.findByIdAndUpdate(req.params.carId, req.body);

  res.redirect(`/cars/${req.params.carId}`);
});

// Create
router.post("/cars", async (req, res) => {
  if (req.body.isRoadworthy === "on") {
    req.body.isRoadworthy = true;
  } else {
    req.body.isRoadworthy = false;
  }

  await Car.create(req.body);
  res.redirect("/cars/new");
});

// Edit
router.get("/cars/:carId/edit", async (req, res) => {
  const car = await Car.findById({ _id: req.params.carId });
  res.render("cars/edit.ejs", { car });
});

// Show
router.get("/cars/:carId", async (req, res) => {
  const car = await Car.findOne({ _id: req.params.carId });
  res.render("cars/show.ejs", { car });
});

module.exports = router;
