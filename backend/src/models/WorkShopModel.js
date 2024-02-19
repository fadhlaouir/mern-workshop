const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkShopSchema = new Schema({
  title: String,
  description: String,
  date: String,
});

module.exports = mongoose.model("WorkShop", WorkShopSchema);
