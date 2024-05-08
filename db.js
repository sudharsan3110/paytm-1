const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://msudhar007:l5nZxPexfZwmAf5C@cluster0.znysavg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase:true,
    min:3,
    max:30
  },
  password:{
    type:String,
    required:true,
    min:3,
  },
  firstName:{
    type:String,
    required:true,
    trim: true,
    min:3,
    max:30
  },
  lastName:{
    type:String,
    required:true,
    trim: true,
    min:3,
    max:30
  }
})

const User = mongoose.model('User', userSchema)
module.exports = {
    User
};