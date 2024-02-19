const WorkShop = require("../models/WorkShopModel");

const createWorkshop = async (req, res) => {
  try {
    const workshop = new WorkShop(req.body);
    await workshop.save();
    res.status(201).send(workshop);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllWorkshops = async (req, res) => {
  try {
    const workshops = await WorkShop.find();
    res.status(200).send(workshops);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createWorkshop,
  getAllWorkshops,
};
