import express from 'express';
import colors from 'colors';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';
import connectDB from './models/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "https://amazon-clone-frontend-two.vercel.app/",
  allowedHeaders: ["GET", "PUT", "PATCH"]
}));

connectDB();

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'vvb');
});

// Listening to  server
app.listen(port, () => console.log(`Listening on local host:${port}`));