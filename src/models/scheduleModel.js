const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        trim:true
    },
    dateTime:{
        type:String
    }
})


module.exports = mongoose.model('Schedule' , scheduleSchema)