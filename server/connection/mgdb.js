
import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nisha:nisha123@cluster0.gt46x62.mongodb.net/customersData').then(() => console.log("MongoDB connected"))
}



