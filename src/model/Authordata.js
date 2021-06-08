//accessing Mogoose package
const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.qlf3n.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    author:String,
    books:String,
    language:String,
    image:String

});

//Model creation
var Authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = Authordata;