const mongoose = require("mongoose")
const { Schema } = mongoose

const majorSchema = new Schema({
    Majorname: String,
    Department: String,
    Year: String,
})


module.exports = mongoose.model('major', majorSchema)