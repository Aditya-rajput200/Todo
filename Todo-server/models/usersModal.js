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
   phone:{
      type: String,
    required: true,
   },
   password:{
   type: String,
    required: true,
    minlength: 8,
    maxlength: 20,
    select: false,
   }

});

     const User = module.exports = mongoose.model('User', UserSchema);

module.exports = User;