const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require('./route/route')

app.use(express.json({extended:true}))
mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://manu_db:g7o90loK4x1HTpI7@cluster0.pqmg1aw.mongodb.net/scheduler ',
{useNewUrlParser:true})
.then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000, function(){
    console.log('Express is running on port',process.env.PORT || 3000)
})

