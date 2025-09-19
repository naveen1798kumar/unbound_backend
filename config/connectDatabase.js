import mongoose from 'mongoose';

export const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    }).catch((err) => {
        console.error('Database connection error:', err);
        process.exit(1); // Exit process with failure
    });
}