const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  image:String,
  username: String,
  email: String,
  password: String,
  password_cf: String
})

const UsersModel = mongoose.model("users" , UsersSchema)
module.exports = UsersModel