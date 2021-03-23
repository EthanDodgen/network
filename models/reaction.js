const { Schema, model } = require('mongoose')

const ReactionSchema = new Schema({
    reactionId: {
        type: ObjectId
    },
    reactionBody: {
        type: String
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date
    }
})

const Reaction = model("Reaction", UserSchema)

module.exports = Reaction