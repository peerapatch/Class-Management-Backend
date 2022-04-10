// const http = require('http')
const express = require('express')
const cors = require('cors')
// const hostname = '127.0.0.1'
const bp = require('body-parser');
const Mongoose = require('mongoose')
const app = express()
const mongoUrl = 'mongodb://classSchedule:classSchedule2565@cluster0-shard-00-00.tti87.mongodb.net:27017,cluster0-shard-00-01.tti87.mongodb.net:27017,cluster0-shard-00-02.tti87.mongodb.net:27017/Schedule?ssl=true&replicaSet=atlas-8hfb5u-shard-0&authSource=admin&retryWrites=true&w=majority'
const opts = { useNewUrlParser: true, useUnifiedTopology: true }
const corsOptions = {
  origin: '*'
}
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions))


Mongoose.connect(mongoUrl, opts)
  .then(() => {
    const port = 9000

    app.listen(port, () => {
      console.log(`SERVER IS RUNNING AT PORT ${port}.`)
    })
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

app.get('/test', function (req, res) {
  res.send('OK')
})
app.use(express.json())
app.use(require('./apis/lecturer'))
app.use(require('./apis/subject'))
app.use(require('./apis/classroom'))
app.use(require('./apis/major'))
app.use(require('./apis/schedule'))
app.use(require('./apis/user'))
app.use(require('./apis/utils'))
