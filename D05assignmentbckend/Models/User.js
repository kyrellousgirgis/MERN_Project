const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: false, minLength: 3, maxLength: 20 },
  number: { type: String, required: false },
  email: { type:String, required: false ,minlength:5},
  img:{type:String},
  password:{type:String},
  country:{type:String}
});
const User = mongoose.model('Users', UserSchema);

module.exports = User;

