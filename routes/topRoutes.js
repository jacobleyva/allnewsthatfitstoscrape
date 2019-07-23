const { topPicks } = require('../models')

module.exports = app => {
    app.get('/topPicks', (req, res) => {
        topPicks.find({}, (e, topPicks) => {
            if(e) throw e
            res.json(topPicks)
        })

        //need post

        //need piut

        //need delete
    })
}