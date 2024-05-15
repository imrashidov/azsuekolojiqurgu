const express = require("express");
const router = express.Router();
const News = require("../models/News");

// Create a news (Create)
router.post("/", async (req, res) => {
  try {
    const myData = req.body;
    console.log(myData);
  } catch (error) {
    console.log(error);
  }
});

// Fetch all news (Read - All)
router.get("/", async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Fetch a news by id (Read - One)
router.get("/:newsId", async (req, res) => {
  const newsId = req.params.newsId;
  try {
    const news = await News.findById(newsId);
    res.status(200).json(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
