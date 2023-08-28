import mongoose from "mongoose";

const databaseUrl = process.env.DATABASE_URL ?? '';

export const connectToDB = async () => {
    try {
        await mongoose.connect(databaseUrl);
        console.info('Connected to MongoDB');
    } catch (error) {
        console.error('DB connect error', error);
    }
} 