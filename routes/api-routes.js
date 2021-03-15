const Workout = require("../models/fitness");
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
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

  app.put("/api/fitness/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });
};
