const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('My application web'))

app.listen(3000)