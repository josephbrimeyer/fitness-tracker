// Calls in our dependencies...
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//  Sets up the workout schema...
const workoutSchema = new Schema(
  {
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
          required: "Enter an exercise name:",
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes:",
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// sets Workout to the workout schema and calculates duration of exercises...
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);

//  Exports the schema to be used elsewhere...
module.exports = Workout;
