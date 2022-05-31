const {model, Schema} = require("mongoose")

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const CelebModel = model("Celebrity", celebSchema)

module.exports = CelebModel
