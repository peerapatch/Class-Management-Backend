const router = require('express').Router()
const Subject = require('../schemas/major')

router.get('/api/major', (req, res) => {
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

router.post('/api/major', (req, res) => {
  console.log('req.body', req.body)
  Subject.create({
    Majorname: req.body.Majorname,
    Department: req.body.Department,
    Year: req.body.Year

  })
  res.send('create success')
})

router.put('/api/major', async (req, res) => {
  const query = { _id: req.body._id }
  const update = {
    Majorname: req.body.Majorname,
    Department: req.body.Department,
    Year: req.body.Year

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

router.delete('/api/major', async (req, res) => {
  const query = { _id: req.body._id }
  const test = await Subject.findOneAndDelete(query)
  if (test) {
    return res.status(200).send('Delete Success')
  } else {
    return res.status(400).send('Delete Fail')
  }
})

module.exports = router
