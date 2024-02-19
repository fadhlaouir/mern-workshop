/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// express is used to create the server
const express = require("express");

// mongoose is used to connect to the database
const mongoose = require("mongoose");

// body-parser is used to parse the body of the request
const bodyParser = require("body-parser");

// morgan is used to log the requests
const morgan = require("morgan");

// cors is used to allow cross origin resource sharing
const cors = require("cors");

// dotenv is used to load environment variables from a .env file
const dotenv = require("dotenv");

/* -------------------------------------------------------------------------- */
/*                                 app config                                 */
/* -------------------------------------------------------------------------- */
// load environment variables from a .env file
dotenv.config();
// create the express server
const app = express();

// Middleware
app.use(morgan("dev")); // log requests to the console for development purposes
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded requests to the body of the request object as req.body
app.use(bodyParser.json()); // parse application/json requests to the body of the request object as req.body (json format)
app.use(cors()); // allow cross origin resource sharing for all routes and origins

// db config
const MONGO_URI = process.env.MONGO_URI;

/**
 * mongoose config:
 * @strictQuery : false to allow for partial search queries to be sent to the database and return results that match the query string
 * @MONGO_URI : the connection string to the database
 * @useNewUrlParser : to use the new url parser
 * @useUnifiedTopology : to use the new topology engine
 * @then : to log a success message if the connection is successful
 * @catch : to log an error message if the connection is not successful
 * @see https://mongoosejs.com/docs/guide.html#strict
 */
mongoose.set("strictQuery", false); // allow for partial search queries to be sent to the database and return results that match the query string
mongoose.connect(MONGO_URI).then(
  () => {
    console.log("Database connected successfully ");
  },
  (error) => {
    console.log("Could not connect to database : " + error);
  }
);

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */
/**
 * @workshopRoutes : the routes for the workshop api
 * @app.use : to use the routes
 * @/api/v1/ : the base url for the api
 */
const workshopRoutes = require("./src/routes/WorkshopRoutes");
app.use("/api/v1/", workshopRoutes);

/**
 * port config: to set the port for the server
 */
const port = process.env.PORT || 5000;
/**
 * @app.listen : to start the server
 * @port : the port to listen on
 * @console.log : to log a message to the console
 */
app.listen(port, () => console.log(`Server running on port ${port}`));
