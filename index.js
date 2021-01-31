const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

mongoose.connect("mongodb+srv://duser:1234@cluster0.cxupx.mongodb.net/college?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server has started on 3000");
        });
    }
);