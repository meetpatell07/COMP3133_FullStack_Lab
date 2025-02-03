const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  city: String,
  restaurant_id: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
