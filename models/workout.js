const mongoose = require('mongoose');

const workoutSchema = new workoutSchema({
    day: {
        type: Date,
    },
    exercises:
        [
            {
                type: {
                    type: String,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,

                },
                weight: {
                    type: Number,

                },
                sets: {
                    type: Number,

                },
                reps: {
                    type: Number,

                },
                duration: {
                    type: Number,

                },
                distance: {
                    type: Number,

                },
            }
        ]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;