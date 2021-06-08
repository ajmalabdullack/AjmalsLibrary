const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
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
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre: 'cartoon ',
    //         img:"tom.png"
    //     },
    //     {
    //        title: 'Harry Potter',
    //        author:'J K Rowling',
    //        genre: 'Fantasy ',
    //        img:"harry.jpg"
    //    },
    //    {
    //        title: 'Pathummayude Aadu',
    //        author:'Basheer',
    //        genre: 'Drama ',
    //        img:"pathummayude aadu.jpg"
    //    }
    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
               
                nav,
                title:'Library',
                books
             });
        })
        
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
             });
        })
       
    })
//delete book
    booksRouter.get('/delete/:id',function(req,res){
        const id=req.params.id;
        Bookdata.remove({_id:id})
        .then(function(){
            res.redirect('/books');
        consol.log("iam here");
        });
    });
//update book
booksRouter.get('/editbook/:id',function(req,res){
    const id=req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
    res.render('editbook',{
        nav,
        title:'New Library',
        book
    });
    console.log(book)
    });
    console.log(req.params.id)
});

booksRouter.post('/update/:id',function(req,res){
    const id = req.params.id;
    uploads(req,res,(err)=>{
    var item ={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.file.filename
    }
    Bookdata.updateOne({_id:id},{$set:item})
    .then(function(){
        res.redirect('/books');
    });
});
});


    return booksRouter;
    
}

module.exports = router;