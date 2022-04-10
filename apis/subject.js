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


  const result = await Subject.create(


    {

      "major": req.body.major,
      "faculty": req.body.faculty,
      "subject_code": req.body.subject_code,
      "subject_name": req.body.subject_name,
      "lecturer": req.body.lecturer_name,
      "section": req.body.section,
      "credit": req.body.credit,
      "period": req.body.period,
      "remark": req.body.remark,
    }

  )
  if (result) {
    return res.status(200).send({ result: result })
  } else {
    return res.status(400).send({ result: {} })
  }
})

router.put('/api/subject/editSubject/:id', async (req, res) => {

  const update = {
    subject_code: req.body.subject_code,
    name: req.body.name,
    credit: req.body.credit,
    section: req.body.section,
    capacity: req.body.capacity,
    lecturer: req.body.lecturer,
    faculty: req.body.faculty,
    major: req.body.major,
    remark: req.body.remark,
    period: req.body.period,
    classroom: req.body.classroom,
    time_start: req.body.time_start,
    time_end: req.body.time_end
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
/// *


module.exports = router
