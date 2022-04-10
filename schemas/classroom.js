const mongoose = require('mongoose')
const { Schema } = mongoose
const classroomSchema = new Schema({
  classroom_no: String,
  capacity: Number,
  type: Number,
  accessories: Array
})
module.exports = mongoose.model('classroom', classroomSchema)
