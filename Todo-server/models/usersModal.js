const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name:{
    type: String,
    required: true,
    
   },
   email:{
    type: String,
    required: true,
    unique: true,
    
   },
   password:{
   type: String,
    required: true,
    minlength: 8,
    maxlength: 20,
    select: false,
   },
   profile:{
type:String,
   }
});

module.exports = mongoose.model('User', UserSchema);