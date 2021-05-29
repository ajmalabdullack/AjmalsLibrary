const express = require("express");
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            name: 'J.K.Rowling',
            language:'English',
            books: 'Harry Potter,Fantastic Beasts ',
            img:"j.k.rowling.jpg"
        },
        {
            name: 'Joseph Barbera',
            language:'English',
            books: 'Tom and Jerry',
            img:"joseph barbera.jpg"
       },
       {
        name: 'Vaikom Muhammad Basheer',
        language:'Malayalam',
        books: 'Pathummayude Aadu,Balyakalasakhi',
        img:"basheer.jpg"
       },
       {
        name: 'Chetan Bhagat',
        language:'English',
        books: '2 states,Half Girlfriend',
        img:"chetan bhagat.jpg"
       }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
          
           nav,
           title:'Library',
           authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
           nav,
           title:'Library',
           author: authors[id]
        })
    })
    return authorsRouter;
    
}

module.exports = router;