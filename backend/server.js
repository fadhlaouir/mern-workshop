// Importe les packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log("MongoDB Error", err));

// Routes
const WorkshopRoutes = require("./src/routes/WorkShopRoutes");
app.use("/v1/api", WorkshopRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
