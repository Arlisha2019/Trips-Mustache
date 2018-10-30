const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')

let trips = []

app.use(express.static('css'))

app.use(bodyParser.urlencoded({ extended: false }))

app.engine('mustache',mustacheExpress())

app.set('views','./trips')

app.set('view engine','mustache')

app.get('/',function(req,res) {

  res.render('add-trips')
})

app.get('/trips',(req,res) => {

  res.render('trips', { tripList : trips })

})

app.get('/add-trips', function(req, res) {

  res.render('add-trips')
})


app.post("/add-trips",function(req,res) {

  let title = req.body.tripTitle
  let image = req.body.tripImage
  let beginDate = req.body.departureDate
  let endDate = req.body.returnDate

  trips.push({title : title, image : image, beginDate : beginDate, endDate : endDate })

  res.redirect("/trips")

})

app.listen(port, function() {
  console.log("Welcome Back");
})
