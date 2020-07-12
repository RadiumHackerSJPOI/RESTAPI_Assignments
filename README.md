# RESTAPI_Assignments
This repository contains all of my REST API Assignments &amp; Projects

Problem Statement 1:
1. create middle ware method which check token key value = 'abc' in the request header and if token with value is not available return 401 status with message (Token must be provided)
2. Create api to calculate sum of a and b [a + b]
[get] /sum   - 	query
[post] /sum  -  body
3. Create api to subtract a and b [a - b]
validation : a should be greater than b else return 400 status with message (a should be greater than b)
[get] /sub 
[post] /sub
4. Create api to multiply a and b [a * b]
validation : a and b should be greater than 0  else return 400 status with message (a and b should be greater than 0)
[get] /multi -
[post] /multi
5. Create api to divide a and b.  [a / b]
validation :  b should be greater than 0 else return 400 status with message  b should be greater
[get] /devi  
[post] /devi


server.js contains GET & POST API implementations for adding, subtracting, dividing and multiplying two numbers. It has in-function input validation as well as a global validation via a middle-ware (validate.js) which checks for a specific token in the request header.


