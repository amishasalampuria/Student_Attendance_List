// const express = require('express')
import mongoose from 'mongoose'
import express from 'express'
import { addData, getData, attendance, deleteStudent } from '../Controller.js/userController.js'


const app = express()

const userRouter = express.Router()

userRouter.post('/data', addData)
userRouter.get('/list', getData)
userRouter.post('/attendance', attendance)
userRouter.post('/delete', deleteStudent)
// userRouter.post('/create', createStudent)


export default userRouter