const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    workouts: [
        {
            type: {
                type: String,
                trim: true,
                required: "type is required",
            },
            name: {
                type: String,
                trim: true,
                required: "name is required",
            },
            duration: {
                type: Number,
                trim: true,
                required: "duration is required",
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            distance: {
                type: Number,
                trim: true,
            }
        }
    ]
});
//     {
//         toJSON: { virtuals: true, },
//     }
// );

// WorkoutSchema.virtual("totalDuration").get(function () {
//     return this.workouts.reduce((total, workouts) => {
//         return total + workouts.duration;
//     }, 0);
// });

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;