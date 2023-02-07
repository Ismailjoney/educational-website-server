const express = require(`express`);
const cors = require(`cors`); 
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();


//middleware
app.use(cors())
app.use(express.json());


const  coursenames = require('./data/coursename.json');
const coursedetails = require(`./data/coursedetails.json`);
 //const details  = require('./data/courseDetails.json'); 


app.get('/coursename', (req,res) =>{
    res.send(coursenames)
})

app.get('/coursedetails',(req,res) =>{
    res.send(coursedetails)
})
app.get('/course/:id',(req,res)=>{
    id = req.params.id;
    const selectedCourse= coursedetails.find(c => c.id === id)
    console.log(selectedCourse)
    res.send(selectedCourse)
}) 









//testing purpose
app.get('/', (req, res) => {
    res.send(`Educational website is running`)
})

app.listen(port, () => {
    console.log(`the port is running ${port}`);
})