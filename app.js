 const express = require("express");
 const app = express();
 
 const port = process.env.PORT || 5000;
 const nav = [
        {
            link:'/home',name:'Home'
        },
        {
         link:'/books',name:'Books'
        },
        {
            link:'/author',name:'Authors'
        },

        {
        link:'/addBook',name:'Add Book'
        },
        {
        link:'/addAuthor',name:'Add Author'
        }
 ];

 const navusr = [
     {
         link:'/user/userhome',name:'Home'
     },
    {
        link:'/user/userbooks',name:'Books'
       },
       {
           link:'/user/userauthors',name:'Authors'
       }
 ];
const nwnav =[
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'SignUp'
    }
];
 const booksRouter = require('./src/routes/bookRoutes')(nav)
 const authorsRouter = require('./src/routes/authorRoutes')(nav)
 const addBookRouter = require('./src/routes/addBookRoutes')(nav)
 const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav)
 const loginRouter = require('./src/routes/loginRoutes')(nwnav)
 const signupRouter = require('./src/routes/signupRoutes')(nwnav)
 
 const userRouter = require('./src/routes/userRoutes')(navusr)

 app.use(express.urlencoded({extended:true}));
 app.use(express.static('./public'));
 app.set("view engine","ejs");
 app.set("views","./src/views");
 app.use('/books',booksRouter);
 app.use('/author',authorsRouter);
 app.use('/addBook',addBookRouter);
 app.use('/addAuthor',addAuthorRouter);
 app.use('/login',loginRouter);
 app.use('/signup',signupRouter);
 
 app.use('/user',userRouter);
 

 app.get('/home',function(req,res){
     res.render('home',{
         nav,
         title:'library'
     })
 })

 app.get('/',function(req,res){
     res.render("index",
     {
          nwnav,
         title:'Library'
     });
 });

 

 app.listen(port,()=>{console.log("server Ready at"+ port)});