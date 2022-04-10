const router = require('express').Router()
const ClassRoom = require('../schemas/classroom')

router.get('/api/classroom', (req, res) => {
  try {
    ClassRoom.find({}, function (err, result) {
      return res.status(200).send({ status: true, data: result });
    })
  } catch (err) {

    return res.status(404).send({ status: false, message: "Get Classroom failed!" })
  }
})

router.post('/api/classroom', (req, res) => {
  try {
    ClassRoom.create({
      classroom_no: req.body.classroom_no,
      capacity: req.body.capacity,
      type: req.body.type,
      accessories: req.body.accessories
    })
    return res.status(200).send({ status: true, message: "Create Classroom Done!" })
  }
  catch (err) {
    return res.status(404).send({ status: false, message: "Create Classroom failed!" })
  }

})

router.put('/api/classroom/:id', async (req, res) => {
  try {
    const query = { _id: req.params.id }
    const update = {
      classroom_no: req.body.classroom_no,
      capacity: req.body.capacity,
      type: req.body.type,
      accessories: req.body.accessories
    }
    const test = await ClassRoom.findOneAndUpdate(
      query,
      update
    )
    if (test) {
      return res.status(200).send({ status: true, msg: 'Update Success' })
    } else {
      return res.status(400).send({ status: false, msg: 'Update Failed' })
    }
  } catch (err) {

    return res.status(400).send({ status: false, msg: 'Update Failed!' })
  }
})


router.delete('/api/classroom/:id', async (req, res) => {

  try {
    const query = { _id: req.params.id }
    await ClassRoom.findOneAndDelete(query)
    return res.status(200).send({ status: true, msg: "Delete Class Room Done!" })
  } catch (err) {

    return res.status(404).send({ status: false, msg: "Delete Class Room Failed!" })
  }


})

module.exports = router
