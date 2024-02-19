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
 * export all the functions to be used in the routes
 */
module.exports = {
  createWorkshop,
  getAllWorkshops,
};
