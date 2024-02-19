/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
const router = require("express").Router();

// Controllers
const workShopController = require("../controllers/WorkshopController");

/* -------------------------------------------------------------------------- */
/*                               WorkShop Route                               */
/* -------------------------------------------------------------------------- */

/**
 * @route : /api/v1/workshop
 * @method : POST (create)
 * @description : create a new workshop in the database and return the workshop
 * @access : public (no authentication required)
 * @body : { name, description, date} the name, description and date of the workshop
 * @return : { workshop } if the request is successful and the workshop is created in the database
 * @error : { error } if the request is not successful or if there is an error in the database
 */
router.post("/workshop", workShopController.createWorkshop);

/**
 * @route : /api/v1/workshops
 * @method : GET (read)
 * @description : get all the workshops in the database and return them
 * @access : public (no authentication required)
 * @return : { workshops } if the request is successful and the workshops are retrieved from the database
 * @error : { error } if the request is not successful or if there is an error in the database
 */
router.get("/workshops", workShopController.getAllWorkshops);

// Export the router
module.exports = router;
