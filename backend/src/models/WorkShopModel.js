/* -------------------------------------------------------------------------- */
/*                                 Dependencies                              */
/* -------------------------------------------------------------------------- */

// Packages
const mongoose = require("mongoose");

/* -------------------------------------------------------------------------- */
/*                              Workshop Schema                              */
/* -------------------------------------------------------------------------- */

/**
 * @name workshopSchema
 * @description Schema for the workshop model
 * @type {object}
 * @property {string} name - The name of the workshop.
 * @property {string} description - The description of the workshop.
 * @property {Date} date - The date of the workshop.
 */
const workshopSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
});

// Export the model
module.exports = mongoose.model("Workshop", workshopSchema);
