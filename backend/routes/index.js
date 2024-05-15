const express = require("express");
const router = express.Router();

// Other routes will go here
const newsRoute = require("./news");
const galleriesRoute = require("./galleries");
const managementsRoute = require("./managements");

router.use("/news", newsRoute);
router.use("/galleries", galleriesRoute);
router.use("/managements", managementsRoute);

module.exports = router;
