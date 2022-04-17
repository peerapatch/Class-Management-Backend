
const mongoose = require('mongoose')
const { Schema } = mongoose
const subjectSchema = new Schema({
  subject_code: { type: String },
  subject_name: { type: String },
  credit: { type: String },
  section: { type: Number },
  capacity: { type: Number },
  lecturer: { type: String },
  faculty: { type: String },
  major: { type: String },
  period: { type: Array },
  remark: { type: String }

})
module.exports = mongoose.model('subject', subjectSchema)
