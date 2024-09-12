require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());   
app.use(express.json());
const Port =process.env.PORT || 3000 


// connecting to the db
mongoose.connect(URI=process.env.Mongodb_Uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


app.listen(Port,(req,res)=>{
    console.log(`Your Server is Listen on ${Port}`)
})