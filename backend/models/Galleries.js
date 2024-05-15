const mongoose = require("mongoose");

const galleriesSchema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
  },
});

const Galleries = mongoose.model("Galleries", galleriesSchema);
module.exports = Galleries;
