const express = require('express')
const fs = require('fs')

const app = express()

let numberOfRequest = 0

app.get('/', (req, res) => {
    res.send('My application web')

    numberOfRequest++

    fs.writeFile("tmp/log.txt", `My application web, total de request = ${numberOfRequest}`, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log("The file was saved!")
    })
})

app.listen(3000)