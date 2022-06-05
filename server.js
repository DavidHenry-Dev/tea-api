const { request } = require('express')
const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())
const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'You mommas House',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': true ,
        'flavor': 'delicious' 
    },
    'matcha': {
        'type': 'green',
        'origin': 'You mommas House',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': false,
        'flavor': 'delicious' 
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffeinated': true,
        'flavor': 'unknown' 
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const teaName = req.params.name.toLowerCase()
    if ( tea[teaName] ) {
        res.json(tea[teaName])
    } else {
        res.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}!`)
})
