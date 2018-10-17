const express = require('express')
const router = express.Router()

router.get('/', getCatData) //get the data of cats
router.post('/', createCatRoute)

let {getData, createAnimal} = require('../db/getData')

function createCatRoute(req, res, next) {
    const { name, address } = req.body
    createAnimal(name, address)
        .then(() => next())
        .catch(err => {
            res.status(500).send({ message: "Server error"})
        })
}

function getCatData(req, res) {
	getData()
		.then(data => {
			res.json(data)
		})
		.catch(err => res.status(500).send({ message: "Server Error 2" }))
}

// import db <getData>
// const db = require('../db/getData')

// router.get('/', (req,res) => {
    //res data
    // db.getData()
    // .then(data => {
        // res.json(data)
        // console.log(data)
    // })
    // res.json(db.getData())
// })

module.exports = router