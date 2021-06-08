const express = require("express");
const addAuthorRouter = express.Router();
const Authordata = require('../model/Authordata');
const multer = require('multer');

//set storage
const storage =   multer.diskStorage({
    destination: './public/images',
    filename: function (req, file, callback) {
      callback(null,file.originalname);
    }
  });
  //init upload
  const uploads = multer({ storage : storage }).single('image');
  

function router(nav){

    addAuthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
            
            nav,
            title:'Library'
        })
    })
    addAuthorRouter.post('/add',function(req,res){
        uploads(req,res,(err)=>{
        var item = {
         author: req.body.author,
         books: req.body.books,
         language: req.body.language,
         image: req.file.filename
        }
       var author = Authordata(item);
       author.save(); //saving to database
       res.redirect('/author');
     });
    });

    return addAuthorRouter;
}
module.exports = router;