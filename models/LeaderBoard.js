const mongoose = require("mongoose");

const LeaderBoardSchema = new mongoose.Schema({
  name: String,
  score: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LeaderBoard", LeaderBoardSchema);
