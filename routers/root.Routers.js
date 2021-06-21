const { moviesRouters } = require("./movies.Routers");
const express = require("express");
const rootRouters = express.Router();

rootRouters.use("/movies", moviesRouters);
module.exports = {
  rootRouters,
};
