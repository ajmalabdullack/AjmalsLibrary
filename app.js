 const express = require("express");
 const app = express();
 const port = process.env.PORT || 5000;
 const nav = [
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
        },
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
 const loginRouter = require('./src/routes/loginRoutes')(nav)
 const signupRouter = require('./src/routes/signupRoutes')(nav)


 app.use(express.static('./public'));
 app.set("view engine","ejs");
 app.set("views","./src/views");
 app.use('/books',booksRouter);
 app.use('/author',authorsRouter);
 app.use('/addBook',addBookRouter);
 app.use('/addAuthor',addAuthorRouter);
 app.use('/login',loginRouter);
 app.use('/signup',signupRouter);
 

 app.get('/',function(req,res){
     res.render("index",
     {
         nav,
         title:'Library'
     });
 });

 app.listen(port,()=>{console.log("server Ready at"+ port)});