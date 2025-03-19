require("dotenv").config()
const express = require('express')
const cors = require("cors")

const app =  express()

const PORT = process.env.BACKEND_PORT


app.use(cors())

app.get('/',(req,res)=>{
    res.send('API is running')
})
app.get('/api/chat',(req,res)=>{
    res.send('API is running for chat')
})

app.listen(PORT, () => {
    console.log("Server running on the PORT", PORT)
})
