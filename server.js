const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

var port = process.env.PORT || 3000;

//TOKEN
const validateToken = require('./validate').validateToken
//app.use(validateToken)


//ADDITION BEGINS HERE (GET & POST)

app.get('/add', validateToken, (req, res, next) => {
	console.log("GET API for adding two numbers called");
	const number1 = parseInt(req.query.number1) 
	const number2 = parseInt(req.query.number2)
	if(number1!=null & number2!=null)
	{
		res.status(200).json([
			number1+number2
		])
	}
	else
	{
		res.status(400).json([
			"Enter values for a and b"
		])
	}
	
	
});

app.post('/add',validateToken, (req,res) => {
	console.log("POST API for adding two numbers called");
	const {number1,number2}=req.body
	if(number1!=null & number2!=null)
	{
		res.status(200).json([
			number1+number2
		])
	}
	else
	{
		res.status(400).json([
			"Enter values for a and b"
		])
	}

});

//SUBTRACTION BEGINS HERE (GET & POST)
app.get('/sub', validateToken, (req, res) => {
	console.log("GET API for subtracting two numbers called");
	const number1 = parseInt(req.query.number1)
	const number2 = parseInt(req.query.number2)
	if(number1>number2)
	{
	res.status(200).json([
		number1-number2
	])
	}
	else
	{
		res.status(400).json([
			"a should be greater than b"
		])
	}
	
});

app.post('/sub',validateToken, (req,res) => {
	console.log("POST API for subtracting two numbers called");
	const {number1,number2}=req.body
	if(number1>number2)
	{
	res.status(200).json([
		number1-number2
	])
	}
	else
	{
		res.status(400).json([
			"a should be greater than b"
		])
	}
});

//MULTIPLICATION BEGINS HERE (GET & POST)

app.get('/mul', validateToken, (req, res) => {
	console.log("GET API for multiplying two numbers called");
	const number1 = parseInt(req.query.number1) 
	const number2 = parseInt(req.query.number2)
	if(number1>0 & number2>0)
	{
	res.status(200).json([
		number1*number2
	])
	}
	else
	{
		res.status(400).json([
			"a and b both should be greater than 0"
		])
	}
	
});

app.post('/mul',validateToken, (req,res) => {
	console.log("POST API for multiplying two numbers called");
	const {number1,number2}=req.body
	if(number1>0 & number2>0)
	{
	res.status(200).json([
		number1*number2
	])
	}
	else
	{
		res.status(400).json([
			"a and b both should be greater than 0"
		])
	}
});

//DIVISION BEGINS HERE (GET & POST)

app.get('/devi', validateToken, (req, res) => {
	console.log("GET API for dividing two numbers called");
	const number1 = parseInt(req.query.number1) 
	const number2 = parseInt(req.query.number2)
	if(number2>0)
	{
	res.status(200).json([
		number1/number2
	])
	}
	else
	{
		res.status(400).json([
			"b both should be greater than 0"
		])
	}
});

app.post('/devi',validateToken, (req,res) => {
	console.log("POST API for dividing two numbers called");
	const {number1,number2}=req.body
	if(number2>0)
	{
	res.status(200).json([
		number1/number2
	])
	}
	else
	{
		res.status(400).json([
			"b both should be greater than 0"
		])
	}
});



app.listen(port, () => {
	console.log('Running on port' + port);
});
