const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

var port = process.env.PORT || 3000;

//ADDITION BEGINS HERE (GET & POST)

app.get('/add', (req, res, next) => {
	console.log("GET API for adding two numbers called");
	res.status(200).json([
		{number1:req.query.number1},{number2:req.query.number2}
		,res.send(number1+number2)
	])
	
});

app.post('/add',(req,res) => {
	console.log("POST API for adding two numbers called");
	const {number1,number2}=req.body
	res.status(200).json([
		number1+number2
	])

});

//SUBTRACTION BEGINS HERE (GET & POST)
app.get('/sub', (req, res) => {
	console.log("GET API for subtracting two numbers called");
	res.status(200).json([
		{number1:req.query.number1},{number2:req.query.number2}
		,res.send(number1-number2)
	])
	
});

app.post('/sub',(req,res) => {
	console.log("POST API for subtracting two numbers called");
	const {number1,number2}=req.body
		res.status(200).json([
		number1-number2
	])
});

//MULTIPLICATION BEGINS HERE (GET & POST)

app.get('/mul', (req, res) => {
	console.log("GET API for multiplying two numbers called");
	res.status(200).json([
		{number1:req.query.number1},{number2:req.query.number2}
		,res.send(number1*number2)
	])
	
});

app.post('/mul',(req,res) => {
	console.log("POST API for multiplying two numbers called");
	const {number1,number2}=req.body
		res.status(200).json([
		number1*number2
	])
});

//DIVISION BEGINS HERE (GET & POST)

app.get('/devi', (req, res) => {
	console.log("GET API for dividing two numbers called");
	res.status(200).json([
		{number1:req.query.number1},{number2:req.query.number2}
		,res.send(number1/number2)
	])
	
});

app.post('/devi',(req,res) => {
	console.log("POST API for dividing two numbers called");
	const {number3,number4}=req.body
		res.status(200).json([
		number1/number2
	])
});



app.listen(port, () => {
	console.log('Running on port' + port);
});
