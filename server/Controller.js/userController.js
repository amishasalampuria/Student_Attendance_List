import userModel from '../models/userModel.js'
import express from 'express'

const addData = async (req, res) => {
    // const { firstName, lastName, email, password } = req.body

    const newUser = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password

    })

    console.log('req.body', req.body)

    try {
        await newUser.save()
        res.json({ success: true, message: "Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })

    }
}


const getData = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.json({ success: true, data: { users } })
    } catch (error) {
        res.json({ success: false, message: "Error" })
    }
}


const attendance = async (req, res) => {
    const { index, status } = req.body;
    console.log(index, status)

    try {
        console.log('controller ', index, status)
        const user = await userModel.findById(index);
        console.log(user.attendance); 

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.attendance = status;

        await user.save();

        res.status(200).json({ message: 'Attendance marked successfully', user });
    } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ error: 'Failed to mark attendance' });
    }
};


const deleteStudent = async (req, res)=>{
    const { index } = req.body;
    console.log("deleteStudent ", index)
    try {
        await userModel.findByIdAndDelete(index);
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// module.exports = addData;
export { addData, getData, attendance, deleteStudent }