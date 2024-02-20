/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Models
const Workshop = require("../models/workshopModel");

/* -------------------------------------------------------------------------- */
/*                             WorkShop Contorller                            */
/* -------------------------------------------------------------------------- */

/**
 * get all workshops from the database and send it to the client side
 * @param {*} req  request object from the client side
 * @param {*} res  response object from the server side
 */
const getAllWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find();

    res.status(200).json({
      status: "success",
      results: workshops.length,
      data: {
        workshops,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message || "Some error occurred while retrieving workshops.",
    });
  }
};

/**
 * create a new workshop and save it to the database and send it to the client side
 * @param {*} req request object from the client side
 * @param {*} res response object from the server side
 */
const createWorkshop = async (req, res) => {
  const workshop = new Workshop({
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
  });

  await workshop
    .save()
    .then((data) => {
      succuess: true;
      message: "Workshop created successfully";
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Workshop.",
      });
    });
};

/**
 * get a workshop from the database and send it to the client side
 * @param {*} req request object from the client side
 * @param {*} res response object from the server side
 */
const getWorkshopById = async (req, res) => {
  try {
    // get the id from the request parameters
    const id = req.params.id;

    // find the workshop by id
    const workshop = await Workshop.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        workshop,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message:
        err.message || "Some error occurred while retrieving the workshop.",
    });
  }
};

/**
 * update a workshop in the database and send it to the client side
 * @param {*} req request object from the client side
 * @param {*} res response object from the server side
 */
const updateWorkshop = async (req, res) => {
  try {
    // get the id from the request parameters
    const id = req.params.id;

    // find the workshop by id and update it
    const workshop = await Workshop.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        workshop,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message:
        err.message || "Some error occurred while updating the workshop.",
    });
  }
};

/**
 * delete a workshop from the database and send it to the client side
 * @param {*} req request object from the client side
 * @param {*} res response object from the server side
 */
const deleteWorkshop = async (req, res) => {
  try {
    // get the id from the request parameters
    const id = req.params.id;

    // find the workshop by id and delete it
    const workshop = await Workshop.findById(id);

    if (!workshop) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    await workshop.remove();

    res.status(200).json({ status: "success", message: "Workshop deleted" });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message:
        err.message || "Some error occurred while deleting the workshop.",
    });
  }
};

/**
 * export all the functions to be used in the routes
 */
module.exports = {
  getAllWorkshops,
  createWorkshop,
  getWorkshopById,
  updateWorkshop,
  deleteWorkshop,
};
