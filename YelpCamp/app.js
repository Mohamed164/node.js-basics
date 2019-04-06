var express = require('express')
var app = express()
app.set('view engine', 'ejs')

app.get('/', function (req,res) {
  res.render('landing')
})
var im = "https://media.architecturaldigest.com/photos/5c65b6362a81d22dc23c8473/16:9/w_1280,c_limit/GettyImages-818535592.jpg"
app.get('/campgrounds', function(req, res){
                      campgrounds = [
                     {name: "Camp 2", image: im},
                     {name: "Camp 3", image: im},
                     {name: "Camp 4", image: im}]
  res.render('campgrounds', {campgrounds: campgrounds})
})

app.listen(3000, '127.0.0.1', function() {
  console.log('yelpcamp server!');
})
