const mongoose = require("mongoose")
const { Schema } = mongoose

const lecturerSchema = new Schema({
    Firstname: String,
    Lastname: String,
    Department: String,
    Type: String,
})


module.exports = mongoose.model('lecturer', lecturerSchema)