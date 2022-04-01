const mongoose = require('mongoose')
const { Schema } = mongoose

const majorSchema = new Schema({
  faculty: String,
  major: String,
  year: String
})

module.exports = mongoose.model('major', majorSchema)
