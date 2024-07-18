// const express = require('express')
// const mongoose = require('mongoose')

import mongoose from 'mongoose'
import express from 'express'


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    attendance: { type: String, default: '' },
    date: { type: Date, default: Date.now }

})

const userModel = mongoose.models.userslist || mongoose.model('userslist', userSchema)

export default userModel
