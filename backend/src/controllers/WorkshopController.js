/* -------------------------------------------------------------------------- */
/*                                Dependencies                              */
/* -------------------------------------------------------------------------- */

// Models
const Workshop = require("../models/workshopModel");

/* -------------------------------------------------------------------------- */
/*                             Workshop Controller                           */
/* -------------------------------------------------------------------------- */

/**
 * Get all workshops from the database and send them to the client.
 * @param {Object} req - Request object from the client.
 * @param {Object} res - Response object from the server.
 * @returns {Object} - JSON response with workshops data.
 */
const getAllWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find();

    res.status(200).json({
      status: "success",
      results: workshops.length,
      data: { workshops },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message || "Error retrieving workshops.",
    });
  }
};

/**
 * Create a new workshop and save it to the database.
 * @param {Object} req - Request object from the client.
 * @param {Object} res - Response object from the server.
 * @returns {Object} - JSON response with created workshop data.
 */
const createWorkshop = async (req, res) => {
  try {
    const workshop = new Workshop({
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
    });

    const savedWorkshop = await workshop.save();

    res.status(201).json({
      status: "success",
      data: savedWorkshop,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message || "Error creating workshop.",
    });
  }
};

/**
 * Get a workshop by its ID from the database.
 * @param {Object} req - Request object from the client.
 * @param {Object} res - Response object from the server.
 * @returns {Object} - JSON response with workshop data.
 */
const getWorkshopById = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);

    if (!workshop) {
      return res.status(404).json({
        status: "fail",
        message: "Workshop not found.",
      });
    }

    res.status(200).json({
      status: "success",
      data: { workshop },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message || "Error retrieving workshop.",
    });
  }
};

/**
 * Update a workshop in the database.
 * @param {Object} req - Request object from the client.
 * @param {Object} res - Response object from the server.
 * @returns {Object} - JSON response with updated workshop data.
 */
const updateWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!workshop) {
      return res.status(404).json({
        status: "fail",
        message: "Workshop not found.",
      });
    }

    res.status(200).json({
      status: "success",
      data: { workshop },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message || "Error updating workshop.",
    });
  }
};

/**
 * Delete a workshop from the database.
 * @param {Object} req - Request object from the client.
 * @param {Object} res - Response object from the server.
 * @returns {Object} - JSON response with success message.
 */
const deleteWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndDelete(req.params.id);

    if (!workshop) {
      return res.status(404).json({
        status: "fail",
        message: "Workshop not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Workshop deleted.",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message || "Error deleting workshop.",
    });
  }
};

// Export all the functions to be used in the routes
module.exports = {
  getAllWorkshops,
  createWorkshop,
  getWorkshopById,
  updateWorkshop,
  deleteWorkshop,
};
