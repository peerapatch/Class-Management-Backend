const router = require('express').Router()
const Subject = require('../schemas/lecturer')

router.get('/api/lecturer', (req, res) => {
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

router.post('/api/lecturer', (req, res) => {
  console.log('req.body', req.body)
  Subject.create({
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Department: req.body.Department,
    Type: req.body.Type

  })
  res.send('create success')
})

router.put('/api/lecturer/:id', async (req, res) => {
  const query = { _id: req.params.id }
  const update = {
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Department: req.body.Department,
    Type: req.body.Type
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

router.delete('/api/lecturer/:id', async (req, res) => {
  const query = { _id: req.params.id }
  console.log(query)
  const test = await Subject.findOneAndDelete(query)
  if (test) {
    return res.status(200).send('Delete Success')
  } else {
    return res.status(400).send('Delete Fail')
  }
})

module.exports = router
