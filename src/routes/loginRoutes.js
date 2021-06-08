const express = require("express");
const Userdata = require("../model/Userdata");
const loginRouter = express.Router();

function router(nwnav){

    loginRouter.get('/',function(req,res){
        res.render('login',{
            nwnav,
            title:'Library'
        })
    })

    loginRouter.post("/add",function(req,res){
        var useremail=req.body.Email
        var userpwd = req.body.password
        Userdata.findOne({"email":useremail})
        .then(function(data){
            console.log(data)
            if(useremail=='admin@library.com' && userpwd=='Admin@123'){
                
                res.redirect('/home')
                console.log('loggined as admin')
            }
            
           else if(useremail==data?.email && userpwd==data?.password){
               
                res.redirect('/user/userhome')
                console.log('"logged in as user');
                
            }
            else{
                res.redirect('/login');
                console.log("Invalid User");
                
            }
        }).catch(err=>console.log(err))
    })
    return loginRouter;
}
module.exports = router;