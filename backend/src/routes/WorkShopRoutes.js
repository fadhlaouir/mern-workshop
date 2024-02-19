const router = require("express").Router();
const WorkshopController = require("../controllers/WorkshopController");

router.post("/workshop", WorkshopController.createWorkshop);

router.get("/workshops", WorkshopController.getAllWorkshops);

// router.get("/workshops/:id", WorkshopController.getWorkshopById);

// router.put("/workshops/:id", WorkshopController.updateWorkshop);

// router.delete("/workshops/:id", WorkshopController.deleteWorkshop);

module.exports = router;
