const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// 1. Get all restaurants with optional sorting
router.get("/", async (req, res) => {
  try {
    const { sortBy } = req.query;
    let sortQuery = {};
    if (sortBy === "ASC") sortQuery = { restaurant_id: 1 };
    if (sortBy === "DESC") sortQuery = { restaurant_id: -1 };

    const restaurants = await Restaurant.find().sort(sortQuery);
    res.json(restaurants);
  } catch (err) {
    console.error("Error fetching restaurants:", err);
    res.status(500).json({ message: err.message });
  }
});

// 2. Add a new restaurant
router.post("/", async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    console.error("Error adding restaurant:", error);
    res.status(400).json({ message: error.message });
  }
});

// 3. Get restaurants by cuisine
router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    const restaurants = await Restaurant.find({ cuisine: cuisine });
    res.json(restaurants);
  } catch (err) {
    console.error("Error fetching by cuisine:", err);
    res.status(500).json({ message: err.message });
  }
});

// 4. Get specific columns and sort by restaurant_id
router.get("/sorted", async (req, res) => {
  try {
    const { sortBy } = req.query;
    let sortOrder = sortBy === "ASC" ? 1 : -1;

    const restaurants = await Restaurant.find({}, "cuisines name city restaurant_id")
      .sort({ restaurant_id: sortOrder });

    res.json(restaurants);
  } catch (err) {
    console.error("Error fetching sorted restaurants:", err);
    res.status(500).json({ message: err.message });
  }
});

// 5. Get restaurants with cuisine = Delicatessen and city != Brooklyn
router.get("/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: "Delicatessen",
      city: { $ne: "Brooklyn" },
    }).select("cuisines name city").sort({ name: 1 });

    res.json(restaurants);
  } catch (err) {
    console.error("Error fetching Delicatessen restaurants:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;