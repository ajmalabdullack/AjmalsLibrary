//accessing Mogoose package
const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb+srv://userone<userone@ictakfiles.qlf3n.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema definition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:String,
    email:String,
    password:String
    
});

//Model creation
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;