const PORT = 8000
const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
require('dotenv').config()

app.use(express.json())

app.get('/', (req,res) => {
    res.json('this is our backend')
})

//get all the scores
app.get('/scores', (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': process.env.ASTRA_TOKEN
        }
    }
    axios(`${process.env.URL}?page-size=20`, options)
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json({message: err}))
})

app.post('/addscore', (req,res) => {
    const bodyContent = req.body

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': process.env.ASTRA_TOKEN,
            'Content-Type': 'application/json'
        },
        data: bodyContent
    }
    axios(process.env.URL, options)
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json({message: err}))
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

// * small differences do exist



