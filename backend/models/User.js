const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = User = mongoose.model("user", UserSchema)