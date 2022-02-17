const mongoose = require("mongoose")
const { Schema } = mongoose
const classroomSchema = new Schema({
    //subjectID: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    classroomID: String,
    capacity: Number,
    type: String,
    accessory: String,

})
module.exports = mongoose.model('classroom', classroomSchema)