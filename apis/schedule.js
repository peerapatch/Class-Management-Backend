const router = require('express').Router()
const Schedule = require('../schemas/schedule')

router.get('/api/schedules', async (req, res) => {
  const result = await Schedule.find({})
  if (result) {
    return res.status(200).send(result)
  } else {
    return res.status(400).send({ result: {} })
  }
})

router.post('/api/schedule', async (req, res) => {
  console.log('req.body', req.body)
  const result = await Schedule.create({
    year: req.body.year,
    semester: req.body.semester,
    subject: req.body.subject,
    creater: req.body.creater
  })
  if (result) {
    return res.status(200).send({ result: result })
  } else {
    return res.status(400).send({ result: {} })
  }
})

module.exports = router
