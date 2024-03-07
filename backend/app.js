/* -------------------------------------------------------------------------- */
/*                                Dependencies                              */
/* -------------------------------------------------------------------------- */

// Express is used to create the server.
const express = require("express");

// Mongoose is used to connect to the database.
const mongoose = require("mongoose");

// Body-parser is used to parse the body of the request.
const bodyParser = require("body-parser");

// Morgan is used to log the requests.
const morgan = require("morgan");

// CORS is used to allow cross-origin resource sharing.
const cors = require("cors");

// Dotenv is used to load environment variables from a .env file.
const dotenv = require("dotenv");

/* -------------------------------------------------------------------------- */
/*                                 App Config                                 */
/* -------------------------------------------------------------------------- */

// Load environment variables from a .env file.
dotenv.config();

// Create the Express server.
const app = express();

// Middleware
app.use(morgan("dev")); // Log requests to the console for development purposes.
app.use(bodyParser.urlencoded({ extended: false })); // Parse application/x-www-form-urlencoded requests to the body of the request object as req.body.
app.use(bodyParser.json()); // Parse application/json requests to the body of the request object as req.body (JSON format).
app.use(cors()); // Allow cross-origin resource sharing for all routes and origins.

// DB Config
const MONGO_URI = process.env.MONGO_URI;

// Mongoose Config
mongoose.set("strictQuery", false); // Allow for partial search queries to be sent to the database and return results that match the query string.

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((error) => {
    console.error("Could not connect to database:", error);
  });

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

// Workshop Routes
const workshopRoutes = require("./src/routes/WorkshopRoutes");
app.use("/api/v1/", workshopRoutes); // Use the workshop routes with the base URL /api/v1/.

module.exports = app;
