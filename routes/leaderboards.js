const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const LeaderBoard = require("../models/LeaderBoard");

router.get("/", (req, res) => {
  LeaderBoard.find()
    .sort({ score: -1 })
    .limit(10)
    .exec((err, leaderboards) => {
      if (err) {
        console.log(err);
      } else {
        res.json(leaderboards);
      }
    });
});

router.post("/", (req, res) => {
  const leaderboard = new LeaderBoard(req.body);
  leaderboard
    .save()
    .then((leaderboard) => {
      res.status(200).json({ leaderboard: "leaderboard added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new leaderboard failed");
    });
});

module.exports = router;
