import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from "./routes/adminRoutes.js";
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

console.log("PORT used =>", PORT);
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Admin backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
