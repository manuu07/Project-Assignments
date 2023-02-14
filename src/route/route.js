const express = require('express')
const router = express.Router();
const {createSchedule, getSchedule} = require('../controllers/scheduleController')

//router.post('/createEvent', createSchedule)


router.get('/getEvent', getSchedule)


module.exports = router