const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/IriseHub").then(() => {
    console.log("Data has been Connected to MongoDB")
})

// model
const viewnews = require('./model/viewnewes')

// multer middleware
const uploadImage = require('./middleware/multer')

app.use('/images', express.static('images'));


app.post('/add/event', uploadImage.single('images'), async (req, res) => {
    try {
        const newUpdateEvent = new viewnews({
            title: req.body.title,
            discription: req.body.discription,
            images: req.file.filename,
            data: req.body.data
        })

        const saveEventUpdates = await newUpdateEvent.save()
        res.json(saveEventUpdates)
    } catch (error) {
        res.json({message: error.message})
    }
})


// get xogta meesha lagu soo bandhigaayo

app.get('/allEvents', async (req, res) => {
    try {
        const getEvents = await viewnews.find()
        if (getEvents) {
            res.json(getEvents)
        }
    } catch (error) {
        res.json({message: error.message})
    }

})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})
