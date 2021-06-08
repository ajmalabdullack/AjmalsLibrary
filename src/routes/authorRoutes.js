const express = require("express");
const authorsRouter = express.Router();
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
  
    
    authorsRouter.get('/',function(req,res){

        Authordata.find()
        .then(function(authors){
        res.render("authors",{
            
           nav,
           title:'Library',
           authors
        });
    });
})
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
        res.render('author',{
           nav,
           title:'Library',
           author
        });
    })
    })

    //delete author
    authorsRouter.get('/delete/:id',function(req,res){
        const id=req.params.id;
        Authordata.remove({_id:id})
        .then(function(){
            res.redirect('/author');
        consol.log("iam here");
        });
    });
  //update author
    authorsRouter.get('/editauthor/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
        res.render('editauthor',{
            nav,
            title:'New Library',
            author
        });
        console.log(author)
        });
        console.log(req.params.id)
    });
    
    authorsRouter.post('/update/:id',function(req,res){
        const id = req.params.id;
        uploads(req,res,(err)=>{
        var item = {
            author: req.body.author,
            books: req.body.books,
            language: req.body.language,
            image: req.body.image
           }
        Authordata.updateOne({_id:id},{$set:item})
        .then(function(){
            res.redirect('/author');
        });
    });
    });
  

    return authorsRouter;
    
}

module.exports = router;