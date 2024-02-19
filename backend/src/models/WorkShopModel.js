/* -------------------------------------------------------------------------- */
/*                                 Dependecies                                */
/* -------------------------------------------------------------------------- */
// Packages
// mongoose is a package that allows us to interact with MongoDB
const mongoose = require("mongoose");

// schema is a method of mongoose that allows us to create a schema
const Schema = mongoose.Schema;

/* -------------------------------------------------------------------------- */
/*                               Workshop Schema                              */
/* -------------------------------------------------------------------------- */

/**
 * @name : workshopSchema
 * @description : the schema of the workshop model
 * @fields : { name, description, date } the name, description and date of the workshop
 */
const workshopSchema = new Schema({
  name: String,
  description: String,
  date: Date,
});

// Export the model
module.exports = mongoose.model("Workshop", workshopSchema);
