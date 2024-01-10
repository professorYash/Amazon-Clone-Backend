// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected'.cyan);

  } catch (err) {
    console.error('Database connection error'.red, err);
    process.exit(1);
  }
};

export default connectDB;
