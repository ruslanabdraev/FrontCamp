const express = require('express')
const app = express()
const router = express.Router()
const news = require('./data/news')
const config = require('./config')

const checkExist = (id, res) =>{
    if(id < 1 || id > 10){
        throw new Error("News not found. id:" + id)
    }
}

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
    res.send(news)
})

router.get("/news/:id", (req, res, next)=>{
    
    checkExist(req.params.id, res)

    const article = news.articles.filter(item => item.id == req.params.id)
    res.send(article)
})

router.post("/news", (req, res, next)=>{
    console.log("Add one news")
    res.sendStatus(200)
})

router.put("/news/:id", (req, res, next)=>{
    checkExist(req.params.id, res)

    console.log("Edit one news. id:", req.params.id)
    res.sendStatus(200)
})

router.delete("/news/:id", (req, res, next)=>{
    checkExist(req.params.id, res)

    console.log("Delete one news. id:", req.params.id)
    res.sendStatus(200)
})

app.use(errorHandler)

app.use("/", router)
app.listen(config.port)