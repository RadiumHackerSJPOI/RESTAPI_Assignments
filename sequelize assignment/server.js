const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

var port = process.env.PORT || 5000;

app.get('/employee/',(req,res)=>{
    const users = await sequelize.query("SELECT * FROM "employee", { type: QueryTypes.SELECT })
    }).then((data)=>{
        res.status(200).json({data});
    })
})

app.get('/employee/:id',(req,res)=>{
    const { id } = req.params;
    Employee.findOne({
        where: {id:id}
    }).then((data)=>{
        res.status(200).json({data});
    })
})

app.post('/employee',(req,res)=>{
     Employee.create({
        name: 'Saurabh Jain',
        department:'information-security',
        salary:30000,
        isActive: true
    }).then((data)) => {
        res.status(200).json('Employee Creatd Successfully')
    })
})




app.put('/employee/:id',(req,res) =>{
    const { id } = req.headers.body;
    Employee.update(
        {
            name : 'New Name',
            department: 'New Department',
            salary: 20000,
            isActive: true
        }).then((data)=>{
            res.status(200).json('Employee Updated SUccessfully')
        })
})

app.delete('/employee/:id',(req,res) =>{
    const { id } = req.headers.body;
    Employee.destory(
        {
            
        }).then((data)=>{
            res.status(200).json('Employee Deleted Successfully')
        })
})
app.listen(port, () => {
	console.log('Running on port' + port);
});
