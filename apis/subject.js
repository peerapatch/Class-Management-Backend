const router = require('express').Router()
const Subject = require('../schemas/subject')

router.get('/api/subject', async (req, res) => {
  const result = await Subject.find({})
  if (result) {
    return res.status(200).send(result)
  } else {
    return res.status(400).send({ result: {} })
  }
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

router.post('/api/subject', async (req, res) => {
  console.log('req.body', req.body)
  const result = await Subject.create({
    code: req.body.code,
    name: req.body.name,
    credit: req.body.credit,
    section: req.body.section,
    capacity: req.body.capacity,
    lecturer: req.body.lecturer,
    major: req.body.major,
    remark: req.body.remark,
    period: req.body.period
    // classroom: req.body.classroom,
    // timeStart: new Date(),
    // timeEnd: new Date()
  })
  if (result) {
    return res.status(200).send({ result: result })
  } else {
    return res.status(400).send({ result: {} })
  }
})

router.put('/api/subject/editSubject/:id', async (req, res) => {
  console.log(req.params.id)
  const update = {
    code: req.body.code,
    name: req.body.name,
    credit: req.body.credit,
    section: req.body.section,
    capacity: req.body.capacity,
    lecturer: req.body.lecturer,
    major: req.body.major,
    classroom: req.body.classroom
  }

  console.log(update)
  const test = await Subject.findOneAndUpdate(
    { _id: req.params.id },
    update
  )
  if (test) {
    return res.status(200).send('update success')
  } else {
    return res.status(400).send('update fail')
  }
})

router.delete('/api/subject/:id', async (req, res) => {
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
