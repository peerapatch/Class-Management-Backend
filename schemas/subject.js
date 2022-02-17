const mongoose = require('mongoose')
const { Schema } = mongoose
const subjectSchema = new Schema({
  code: { type: String },
  name: { type: String },
  credit: { type: String },
  section: { type: Number },
  capacity: { type: Number },
  lecturer: { type: String },
  major: { type: String },
  period: { type: Array },
  remark: { type: String }
  // classroom: { type: String },
  // timeStart: { type: Date },
  // timeEnd: { type: Date }
})
module.exports = mongoose.model('subject', subjectSchema)
