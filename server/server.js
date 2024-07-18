// const express = require('express')
// const cors = require('cors')
// const connectDB = require('connectDB')
import express from "express"
import cors from "cors"
import { connectDB } from './connection/mgdb.js'
import userRouter from './routes/userRoute.js'
import bodyParser from "body-parser"
const app = express()
const port = 4000

//middleware
// app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))



connectDB()

app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.use('/api/customer', userRouter)


app.listen(port, (req, res) => {
    console.log(`Server started on http://localhost:${port}`)
})