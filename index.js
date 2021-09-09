const exec = require('child_process').exec;
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  exec('sh ~/press.sh', function (error, stdout, stderr) {})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
