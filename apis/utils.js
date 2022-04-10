const router = require('express').Router()
const Major = require('../schemas/major')
const Lecturer = require('../schemas/lecturer')




router.post('/api/utils/get_major_by_faculty', async (req, res) => {
  console.log(req.body)
  const result = await Major.find({ faculty: req.body.faculty })

  if (result) {
    return res.status(200).send({ data: result })
  } else {
    return res.status(400).send({ data: result })
  }
})

router.post('/api/utils/get_lecturers_by_faculty', async (req, res) => {

  // const result = await Lecturer.find({ faculty: req.body.faculty })
  const agg = [
    {
      '$project': {
        '_id': 0, 
        'name': {
          '$concat': [
            '$first_name', ' ', '$last_name'
          ]
        }, 
        'faculty': 1, 
        'type': 1
      }
    }, {
      '$match': {
        'faculty': req.body.faculty
      }
    }
  ]
  const result = await Lecturer.aggregate(agg)
  if (result) {

   
    console.log(result)
    return res.status(200).send({ data: result })
  } else {
    return res.status(400).send({ data: [] })
  }
})



module.exports = router