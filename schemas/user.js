const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  tel: { type: String },
  name: { type: String }
})

module.exports = mongoose.model('user', userSchema)
