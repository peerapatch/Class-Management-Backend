const mongoose = require("mongoose")
const { Schema } = mongoose

const lecturerSchema = new Schema({
    first_name: String,
    last_name: String,
    faculty: String,
    type: Number,
})


module.exports = mongoose.model('lecturer', lecturerSchema)