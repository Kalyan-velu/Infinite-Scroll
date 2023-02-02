const express=require('express')
const { createApi }=require ('unsplash-js');
require('dotenv/config')
const app=express()

const unsplash = createApi({
    accessKey: process.env.APP_ID,
    fetch: fetch,
});

app.get('/api/photos',(req,res)=>{
    unsplash.photos.list({page:req.query.start,perPage:req.query.count})
        .then(r =>{
            res.send(r.response)
        })
} )

const PORT=process.env.PORT||8000
app.listen(PORT,()=>{
    console.log(`On ${PORT}`)
})