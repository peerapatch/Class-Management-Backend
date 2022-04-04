const router = require('express').Router()
const Subject = require('../schemas/classroom')

router.get('/api/classroom', (req, res) => {
  Subject.find({}, function (err, users) {
    res.send({ users: users })
  })
})

// router.get("/api/subject/:id", (req, res) => {
//     Subject.findOne({ _id: req.params.id }).populate('chapterID').exec(function (err, user) {
//           if (user) {
//                 res.send(user)
//           } else {
//                 res.status(400).send("not found user")
//           }
//     })
// })

router.post('/api/classroom', (req, res) => {
  console.log('req.body', req.body)
  Subject.create({
    classroomID: req.body.classroomID,
    capacity: req.body.capacity,
    type: req.body.type,
    accessory: req.body.accessory

  })
  res.send('create success')
})

router.put('/api/classroom/:id', async (req, res) => {
  const query = { _id: req.params.id }
  const update = {
    classroomID: req.body.classroomID,
    capacity: req.body.capacity,
    type: req.body.type,
    accessory: req.body.accessory

  }
  const test = await Subject.findOneAndUpdate(
    query,
    update
  )
  if (test) {
    return res.status(200).send('update success')
  } else {
    return res.status(400).send('update fail')
  }
})

router.delete('/api/classroom/:id', async (req, res) => {
  const query = { _id: req.params.id }
  const test = await Subject.findOneAndDelete(query)
  if (test) {
    return res.status(200).send('Delete Success')
  } else {
    return res.status(400).send('Delete Fail')
  }
})

module.exports = router
