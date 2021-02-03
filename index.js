const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const route = require('./route');

mongoose.connect("mongodb+srv://duser:1234@cluster0.cxupx.mongodb.net/college?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use(bodyparser.urlencoded({extended:true}));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server has started");
        });
    }
);