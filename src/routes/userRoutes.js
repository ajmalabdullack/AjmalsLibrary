const express = require("express");
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');
const userRouter = express.Router();

function router(navusr){
    userRouter.get('/userhome',function(req,res){
        res.render('userHome',{
            navusr,
            title:"Library"
        })
    })
    
    userRouter.get('/userbooks',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("userBooks",{
               
                navusr,
                title:'Library',
                books
             });
        })
        
    });
    userRouter.get('/userbooks/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('singleBook',{
                navusr,
                title:'Library',
                book
             });
        })
       
    })
    

    userRouter.get('/userauthors',function(req,res){

        Authordata.find()
        .then(function(authors){
        res.render("userAuthor",{
           navusr,
           title:'Library',
           authors
        });
    });
})

userRouter.get('/userauthors/:id',function(req,res){
    const id = req.params.id
    Authordata.findOne({_id:id})
    .then(function(author){
    res.render('singleAuthor',{
       navusr,
       title:'Library',
       author
    });
})
})
    
    return userRouter;
}

module.exports = router;