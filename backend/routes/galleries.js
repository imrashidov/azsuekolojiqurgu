const express = require("express");
const router = express.Router();
const Galleries = require("../models/Galleries");

// Fetch all gallery images (Read - All)
router.get("/", async (req, res) => {
  try {
    const galleries = await Galleries.find();
    res.status(200).json(galleries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
