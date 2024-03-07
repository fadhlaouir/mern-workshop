/* -------------------------------------------------------------------------- */
/*                                Dependencies                              */
/* -------------------------------------------------------------------------- */

// Packages
const router = require("express").Router();

// Controllers
const workShopController = require("../controllers/WorkshopController");

/* -------------------------------------------------------------------------- */
/*                               Workshop Routes                              */
/* -------------------------------------------------------------------------- */

/**
 * @route POST /api/v1/workshop
 * @method POST
 * @description Create a new workshop in the database and return the workshop
 * @access Public (no authentication required)
 * @body {string} name - The name of the workshop.
 * @body {string} description - The description of the workshop.
 * @body {Date} date - The date of the workshop.
 * @return {object} The created workshop if successful.
 * @error {object} Error object if the request fails.
 */
router.post("/workshop", workShopController.createWorkshop);

/**
 * @route GET /api/v1/workshops
 * @method GET
 * @description Get all the workshops in the database and return them
 * @access Public (no authentication required)
 * @return {object[]} Array of workshops if successful.
 * @error {object} Error object if the request fails.
 */
router.get("/workshops", workShopController.getAllWorkshops);

/**
 * @route GET /api/v1/workshops/:id
 * @method GET
 * @description Get a specific workshop in the database and return it
 * @access Public (no authentication required)
 * @param {string} id - The ID of the workshop to retrieve.
 * @return {object} The requested workshop if successful.
 * @error {object} Error object if the request fails.
 */
router.get("/workshops/:id", workShopController.getWorkshopById);

/**
 * @route PUT /api/v1/workshops/:id
 * @method PUT
 * @description Update a specific workshop in the database and return it
 * @access Public (no authentication required)
 * @param {string} id - The ID of the workshop to update.
 * @body {string} name - The name of the workshop.
 * @body {string} description - The description of the workshop.
 * @body {Date} date - The date of the workshop.
 * @return {object} The updated workshop if successful.
 * @error {object} Error object if the request fails.
 */
router.put("/workshops/:id", workShopController.updateWorkshop);

/**
 * @route DELETE /api/v1/workshops/:id
 * @method DELETE
 * @description Delete a specific workshop in the database
 * @access Public (no authentication required)
 * @param {string} id - The ID of the workshop to delete.
 * @return {object} Success message if successful.
 * @error {object} Error object if the request fails.
 */
router.delete("/workshops/:id", workShopController.deleteWorkshop);

// Export the router
module.exports = router;
