const { Schema, model } = require('mongoose')

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
    },
    createAt: {
        type: Date
    },
    username: {
        type: String
    },
    reactions: []
})

const Thought = model("Thought", UserSchema)

module.exports = Thought