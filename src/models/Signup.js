const mongooose = require('mongoose');


const registeruser = new mongooose.Schema({
    name:{type: String, unique: true, require: true},
    email:{type: String, unique: true, require: true},
    password:{type: String, unique: true, require: true}
})

const signup = mongooose.model('users',registeruser)
module.exports = signup;