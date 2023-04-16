const express = require('express');
const mongoose = require('mongoose');
const Data = require('./Data');
const Videos = require('./DBModel');
//const dotenv = require('dotenv');
const cors = require('cors');

const connection_url = 'mongodb+srv://tiktok:tiktok@cluster0.3sgqim1.mongodb.net/?retryWrites=true&w=majority';

const app = express();
const port = 9000;
app.use(cors());

app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

mongoose.connect(connection_url).then(()=>{
    console.log("DB Connected!");
})

app.get("/", (req, res, next)=>{
    res.status(200).send("Hello world!");
})

app.get("/v1/post", (req, res, next)=>{
    res.status(200).send(Data);
})

app.get("/v2/post", (req, res)=>{
    //const dbVideos = req.body;
    console.log("Entered!");
    Videos.find()
        .then((data)=>{
            res.status(201).send(data);
        }).catch((err)=>{
            res.status(500).send(err);

        })
        
    })

app.post("/v2/post", (req, res)=>{
    const dbVideos = req.body;
    Videos.create(dbVideos)
        .then((data)=>{
            res.status(201).send(data);
        }).catch((err)=>{
            res.status(500).send(err);

        })
        
    })

app.listen(port, ()=>{
    console.log(`listing to port ${port}`);
})