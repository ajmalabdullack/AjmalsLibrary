const express = require("express");
const addBookRouter = express.Router();
const multer = require('multer');
const Bookdata = require('../model/Bookdata');
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

    addBookRouter.get('/',function(req,res){
        res.render('addBook',{
          
            nav,
            title:'Library'
        })
    })
    
    addBookRouter.post('/add',function(req,res){
     

      uploads(req,res,(err)=>{
        var item = {
          title: req.body.title,
          author: req.body.author,
          genre: req.body.genre,
          image: req.file.filename
         }
        var book = Bookdata(item);
        book.save(); //saving to database
        res.redirect('/books');
  
      });
      
      });
      

  


    // addBookRouter.post('/add',(req,res)=>{
      
    // })

    return addBookRouter;
}
module.exports = router;