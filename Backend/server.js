const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/IriseHub").then(()=>{
    console.log("Data has been Connected to MongoDB")
})

// model
const viewnews = require('./model/viewnewes')

// multer middleware
const uploadImage = require('./middleware/multer')

app.post('/add/event', uploadImage.single('images'), async (req,res)=>{
    try {
        const newUpdateEvent = new viewnews({
            title: req.body.title,
            discription: req.body.discription,
            images: req.file.filename,
            data: req.body.data
        })

        const saveEventUpdates = await newUpdateEvent.save()
        res.send(saveEventUpdates)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})
