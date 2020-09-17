// Calls in our dependencies...
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//  Sets up the workout schema...
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type: resistance or cardio",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// sets Workout to the workout schema...
const Workout = mongoose.model("Workout", workoutSchema);

//  Exports the schema to be used elsewhere...
module.exports = Workout;
