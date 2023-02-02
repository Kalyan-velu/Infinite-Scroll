import express from 'express'
import { createApi } from 'unsplash-js';
import  cors from 'cors'
import fetch from 'node-fetch';
global.fetch = fetch;
import ('dotenv/config')


const app=express()

const unsplash = createApi({
    accessKey: process.env.APP_ID || "JN9-JAuyD7yY3v0uwMM5hYO1rNT4ZY-CNqtvnpYVJug",
    fetch:fetch
});
app.use(cors())
app.get('/api/photos',(req,res)=>{
    unsplash.photos.list({page:req.query.start,perPage:req.query.count})
        .then(r =>{
            console.log(r)
            res.send(r.response)
        })
} )

const PORT=process.env.PORT||8000
app.listen(PORT,()=>{
    console.log(`On ${PORT}`)
})