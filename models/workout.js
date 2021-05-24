const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
        type: { 
            type: String,
            trim: true,
            required: 'Need a type of exercise.'
            },
        name: {
                type: String,
                trim: true,
                required: 'Need an exercise name.'
            },
        duration: {
            type: Number,
            required: 'Need exercise duration (minutes).'
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
        }
    ]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout