import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jwidener08:UWV73CQLM5LGTHq@cluster0.55fv6.mongodb.net/');
        console.info('Connected to MongoDB');
    } catch (error) {
        console.error('DB connect error', error);
    }
} 