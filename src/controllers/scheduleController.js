const nodeCron = require('node-cron')
const scheduleModel = require('../models/scheduleModel')


let obj = [
    {
        text: "Task 1",
        dateTime: "2023-02-15 12:01:00"
    },
    {
        text: "Task 2",
        dateTime: "2023-02-15 12:02:00"
    },
    {
        text: "Task 3",
        dateTime: "2023-02-15 12:03:00"
    },
    {
        text: "Task 4",
        dateTime: "2023-02-15 12:04:00"
    },
    {
        text: "Task 5",
        dateTime: "2023-02-15 12:05:00"
    },
    {
        text: "Task 6",
        dateTime: "2023-02-15 12:06:00"
    },
    {
        text: "Task 7",
        dateTime: "2023-02-15 12:07:00"
    },
    {
        text: "Task 8",
        dateTime: "2023-02-15 12:08:00"
    },
    {
        text: "Task 9",
        dateTime: "2023-02-15 12:09:00"
    },
    {
        text: "Task 10",
        dateTime: "2023-02-15 12:10:00"
    },
]


const getSchedule = async function (_, res) {
    try {
        obj.forEach(event => {
            let text = event.text
            let n = text.length
            let dateTime = event.dateTime
            let [date, time] = dateTime.split(" ");
            let [year, month, day] = date.split("-");
            let [hour, min, sec] = time.split(":")
            const schedule = nodeCron.schedule(`${n} ${min} ${hour} ${day} ${month} *`, () => {
                let textArr = text.split("")
                let reverseArr = textArr.reverse()
                let joinArr = reverseArr.join("")
                console.log(joinArr);

            })
        })
        return res.status(200).send({ status: true, message: "Task scheduled" })

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}










// const createSchedule = async function (req, res) {
//     try {
//         let data = req.body;
//         let { text, dateTime } = data;

//         if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "No data given" })

//         let scheduleCreated = await scheduleModel.create(data)
//         return res.status(201).send({ status: true, data: scheduleCreated })
//     }
//     catch (err) {
//         return res.status(500).send({ status: false, message: err.message })
//     }
// }




// const getSchedule = async function (_, res) {
//     try {

//         let getEvent = await scheduleModel.find()
//         if (!getEvent) return res.statue(404).send({ status: false, message: "Event not found" })

//         getEvent.forEach(event => {
//             let text = event.text
//             let n = text.length
//             let dateTime = event.dateTime
//             let [date, time] = dateTime.split(" ");
//             let [year, month, day] = date.split("-");
//             let [hour, min, sec] = time.split(":")
//             const schedule = nodeCron.schedule(`${n} ${min} ${hour} ${day} ${month} *`, () => {
//                 let textArr = text.split("")
//                 let reverseArr = textArr.reverse()
//                 let joinArr = reverseArr.join("")
//                 console.log(joinArr);

//             })
//         })
//         return res.status(200).send({ status: true, message: "Task scheduled" })

//     }
//     catch (err) {
//         return res.status(500).send({ status: false, message: err.message })
//     }
// }


module.exports = {  getSchedule }
