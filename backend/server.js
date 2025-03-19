require("dotenv").config()
const express = require('express')

const app =  express()

const PORT = process.env.BACKEND_PORT

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.listen(PORT, () => {
    console.log("Server running on the PORT", PORT)
})
