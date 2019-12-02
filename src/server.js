const express = require('express')
const app = express()
const router = express.Router()
const config = require('./config')
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'frontcamp'

mongoose.connect(`${url}/${dbName}`, {useNewUrlParser: true})

const newsModel = new mongoose.Schema({
    id: Number,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
    content: String
})

const News = mongoose.model('News', newsModel)

const errorHandler = (err, req, res, next) => {
    res.status(500);
    res.render('error', { error: err.message });
}

router.use((req, res, next) =>{
    console.log('Time:', Date.now())
    next()
})

router.get("/news", (req, res, next)=>{
    console.log("Get news")

    News.find({}).then((data)=>{
        res.send(data)
    })
})

router.get("/news/:id", (req, res, next)=>{
    console.log("Get news by id")

    const ident = req.params.id

    News.findOne({ id: ident }).then((data) => {
        if(data){
            res.send(data)
        }else{
            res.status(404).send('Not Found')
        }
    })
})

router.post("/news", (req, res, next)=>{
    console.log("Add one news")
    res.sendStatus(200)
})

router.put("/news/:id", (req, res, next)=>{
    console.log("Edit one news. id:", req.params.id)
    res.sendStatus(200)
})

router.delete("/news/:id", (req, res, next)=>{
    console.log("Delete one news. id:", req.params.id)
    res.sendStatus(200)
})

app.use(errorHandler)

app.use("/", router)
app.listen(config.port)