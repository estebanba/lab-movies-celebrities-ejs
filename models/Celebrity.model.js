const {model, Schema} = require("mongoose")

const CelebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celebrity = model("Celebrity", CelebSchema)

module.exports = Celebrity
