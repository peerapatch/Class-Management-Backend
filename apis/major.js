const router = require('express').Router()
const Major = require('../schemas/major')

router.get('/api/major', (req, res) => {
  Major.find({}, function (err, result) {
    res.send({ data: result })
  })
})

router.post('/api/major', (req, res) => {
  console.log('req.body', req.body)
  Major.create({
    faculty: req.body.faculty,
    major: req.body.major,
    year: req.body.year

  })
  res.send('create success')
})

router.put('/api/major/:id', async (req, res) => {
  console.log(req.params.id)
  const query = { _id: req.params.id }
  const update = {
    faculty: req.body.faculty,
    major: req.body.major,
    year: req.body.year

  }
  const test = await Major.findOneAndUpdate(
    query,
    update
  )
  if (test) {
    return res.status(200).send('update success')
  } else {
    return res.status(400).send('update fail')
  }
})

router.delete('/api/major/:id', async (req, res) => {
  console.log(req.params.id)
  const query = { _id: req.params.id }
  console.log(query)
  const test = await Major.findOneAndDelete(query)
  if (test) {
    return res.status(200).send('Delete Success')
  } else {
    return res.status(400).send('Delete Fail')
  }
})

module.exports = router
