const axios = require('axios')
const { join } = require('path')
const cheerio = require('cheerio')
const db = require('mongojs')('forbes_db')
const express = require('express')
const app = express()
const request = require('request');
const cheerio = require('cheerio');

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

require('./routes')(app)

require('mongoose').connect('mongodb://localhost/forbes_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(3000))
  .catch(e => console.log(e))

axios.get('https://www.forbes.com/#614ed492254c')
.then(({ data }) => {
  const $ = cheerio.load(data)
  const topPic = []
  $('.editors-picks').each((i, el => {
    const title = $(el)
    .find('editors-pick')
    .text()
})