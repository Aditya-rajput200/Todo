const { createToken } = require('../middleware/auth');
const User = require('../models/usersModal')
const bcrypt = require('bcrypt')


function compare(plainPassword, storedPassword) {
    if (plainPassword === storedPassword) {
      return { success: true, message: 'Passwords match!' };
    } else {
      return { success: false, message: 'Passwords do not match!' };
    }
  }

exports.SignUp = async (req,res)=>{
   try {
    const { name, email, phone, password } = req.body;

    if(!name || !email || !password|| !phone){
        return res.status(401).json("Please Provide All Required Fields")
    }

    // cicking if user Exists
    const userExist = await User.findOne({email})
    if(userExist){
        return res.status(401).json("User Already Exists")
    }

    // Creating the user 
    const user = await new User({name, email, phone, password})
    await user.save();
    res.json(user)
    console.log(user)
   } catch (error) {
    console.error(error);
   }
   
      
}


exports.Login = async (req, res)=>{
   // user login using phone or email 
try {
    const {email ,password}   = req.body
    // findig user in db
    const userExist = await User.findOne({email})
    if(!userExist){
        return res.status(401).json("User Does Not Exist")
    }
    // checking the password
    const isPassword = await compare(password, userExist.password);
    if(!isPassword){
        return res.status(401).json("Invalid Password")
    }
    // if all is fine , create and send jwt token
    const token = createToken(userExist._id)
    res.json({token})
  //  localStorage.setItem('token', token)
} catch (error) {
    console.error(error)
}
  
}
exports.All = async (req, res)=>{
    try {
        const users = await User.find({})
        res.json({users})
    } catch (error) {
        console.log(error)
    }
}
exports.Me = async (req, res)=>{
    try {
        const token = localStorage.getItem('token')|| req.header.token;
        const users = await User.findOne({token})
        res.json({users})
    } catch (error) {
        console.log(error)
    }
}

