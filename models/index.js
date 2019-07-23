const { Schema, model } = require('mongoose')

const db = {
    Articles: require('./topPicks.js')(Schema, model)
}

module.exports = db