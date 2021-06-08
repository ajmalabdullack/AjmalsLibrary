const express = require("express");
const Userdata = require('../model/Userdata');
const signupRouter = express.Router();


function router(nwnav){

    signupRouter.get('/',function(req,res){

        res.render('signup',{
            nwnav,
            title:'Library'
        });
    });

    signupRouter.post('/add',function(req,res){
        var item = {
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
         
        }
       var data = Userdata(item);
       data.save(); //saving to database
       res.redirect('/login');

     });
    return signupRouter;

}
module.exports = router;

