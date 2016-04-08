var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var Chat = Promise.promisifyAll(mongoose.model('Chat'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');

var FlashCardModel = require('./models/flash-card-model');

app.use(express.static(publicPath));

app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});


app.get('/cards', function (req, res) {

    var modelParams = req.query.category ? { category: req.query.category } : {};

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});

app.post('/newCard', function(req, res, next) {
	console.log(req.body);
	FlashCardModel.create(req.body).then(function(newCard) {
		console.log('created', newCard);
		res.json(newCard)
	})
})