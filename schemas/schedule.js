const mongoose = require('mongoose')
const { Schema } = mongoose
const scheduleSchema = new Schema({
  status: { type: Boolean, default: true },
  year: { type: Number },
  semester: { type: Number },
  subject: [{ type: Schema.Types.ObjectId, ref: 'subject' }]
//   creater: { type: Schema.Types.ObjectId, ref: 'user' }
})
module.exports = mongoose.model('schedule', scheduleSchema)
