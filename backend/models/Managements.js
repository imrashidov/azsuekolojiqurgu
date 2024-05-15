const mongoose = require("mongoose");

const managementsSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Managements = mongoose.model("Managements", managementsSchema);
module.exports = Managements;
