const router = require('express').Router()
const Lecturer = require('../schemas/lecturer')

router.get('/api/lecturer', async (req, res) => {
  try {
    const result = await Lecturer.find({})
    return res.status(200).send({ msg: true, data: result })
  } catch (err) {
    return res.status(400).send({ msg: false, data: [] })
  }
})

router.post('/api/lecturer', async (req, res) => {
  try {
    await Lecturer.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      faculty: req.body.faculty,
      type: req.body.type
    })

    return res.status(200).send({ status: true, msg: 'Create Lecturer Success!' })
  } catch (err) {
    return res.status(400).send({ status: false, msg: 'Create Lecturer Failed!' })
  }
})

router.put('/api/lecturer/:id', async (req, res) => {
  const query = { _id: req.params.id }
  const update = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    faculty: req.body.faculty,
    type: req.body.type
  }
  const test = await Lecturer.findOneAndUpdate(
    query,
    update
  )
  if (test) {
    return res.status(200).send({ status: true, msg: 'update success' })
  } else {
    return res.status(400).send({ status: false, msg: 'update fail' })
  }
})

router.delete('/api/lecturer/:id', async (req, res) => {
  const query = { _id: req.params.id }
  const test = await Lecturer.findOneAndDelete(query)
  if (test) {
    return res.status(200).send({ status: true, msg: 'Delete Success' })
  } else {
    return res.status(400).send({ status: false, msg: 'Delete Fail' })
  }
})

module.exports = router
