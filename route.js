const express = require('express');
const Book = require('./Model/book');
const router = express.Router();

router.get("/books",async (req,res)=>{
    const book = await Book.find()
    res.send(book);
});

router.post("/books",async (req,res)=>{

    try {
        const book = new Book({
            name:req.body.name,
            qty:req.body.qty
        }); 
        await book.save();
        res.send(book);
        
    } catch (error) {
        res.status(404).send(error);
    }
        
});

router.patch("/books/:id",async (req,res)=>{

    try {
        const book = await Book.findOne({_id:req.params.id});
        book.name = req.body.name;
        book.qty = req.body.qty;
        await book.save();
        res.send(book);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/books/:id",async (req,res)=>{

    try {
        await Book.deleteOne({_id:req.params.id});
        res.send("Deleted successfully");
            
    } catch (error) {
        res.status(404).send({error:"book is not found"});
    }
});

module.exports = router;