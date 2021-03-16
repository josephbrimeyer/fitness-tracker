const Workout = require("../models/workouts.js");
const mongojs = require("mongojs");
const db = require("../models");

//Get all workouts
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((workouts) => res.json(workouts))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workouts) => {
        res.json(workouts);
        console.log(workouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
