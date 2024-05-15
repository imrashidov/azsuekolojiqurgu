const express = require("express");
const router = express.Router();
const Managements = require("../models/Managements");

// Fetch all gallery images (Read - All)
router.get("/", async (req, res) => {
  try {
    const managements = await Managements.find();
    res.status(200).json(managements);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
