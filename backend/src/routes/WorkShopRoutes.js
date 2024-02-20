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

/**
 * @route : /api/v1/workshops/:id
 * @method : GET (read)
 * @description : get a specific workshop in the database and return it
 * @access : public (no authentication required)
 * @return : { workshop } if the request is successful and the workshop is retrieved from the database
 * @error : { error } if the request is not successful or if there is an error in the database
 */
router.get("/workshops/:id", workShopController.getWorkshopById);

/**
 * @route : /api/v1/workshops/:id
 * @method : PUT (update)
 * @description : update a specific workshop in the database and return it
 * @access : public (no authentication required)
 * @body : { name, description, date} the name, description and date of the workshop
 * @return : { workshop } if the request is successful and the workshop is updated in the database
 * @error : { error } if the request is not successful or if there is an error in the database
 */
router.put("/workshops/:id", workShopController.updateWorkshop);

/**
 * @route : /api/v1/workshops/:id
 * @method : DELETE (delete)
 * @description : delete a specific workshop in the database
 * @access : public (no authentication required)
 * @return : { message } if the request is successful and the workshop is deleted from the database
 * @error : { error } if the request is not successful or if there is an error in the database
 */
router.delete("/workshops/:id", workShopController.deleteWorkshop);

// Export the router
module.exports = router;
