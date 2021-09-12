const exec = require('child_process').exec
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.get('/', cors({origin: '*'}), (req, res) => {
  res.send('Hello you!')
  exec('sh ~/press.sh', function (error, stdout, stderr) {})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
