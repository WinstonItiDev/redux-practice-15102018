
const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getData() {
    return db('cats').select()
}

function createAnimal(name, address) {
    return db('cats')
        .insert({ name, address })
        .catch(err => reject(err))
}

module.exports = {
    getData,
    createAnimal
}