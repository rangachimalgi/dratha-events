import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import connectDB from './config/db.js';
import packageRoutes from "./routes/packages.js";
import housewarmingRoutes from './routes/housewarmingRoutes.js';
import "./keepAlive.js"
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Connect DB
console.log('PORT used =>', PORT);
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/admin', adminRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/housewarming', housewarmingRoutes);

// -----------------------------
// Serve frontend in production
// -----------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const staticUploadsDir = path.join(__dirname, 'static_uploads');
if (!fs.existsSync(staticUploadsDir)) {
  fs.mkdirSync(staticUploadsDir);
}

// Serve uploads folder statically
app.use('/static_uploads', express.static(path.join(__dirname, 'static_uploads')));

// Serve uploads folder statically for package images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

// Test route
app.get('/', (req, res) => {
  res.send('Admin backend is running 🚀');
});

// Test route for uploads
app.get('/test-uploads', (req, res) => {
  const uploadsPath = path.join(__dirname, 'uploads');
  const staticUploadsPath = path.join(__dirname, 'static_uploads');
  
  let files = [];
  let staticFiles = [];
  
  if (fs.existsSync(uploadsPath)) {
    files = fs.readdirSync(uploadsPath);
  }
  
  if (fs.existsSync(staticUploadsPath)) {
    staticFiles = fs.readdirSync(staticUploadsPath);
  }
  
  res.json({ 
    message: 'Uploads directory test',
    uploadsPath,
    staticUploadsPath,
    uploadsDirExists: fs.existsSync(uploadsPath),
    staticUploadsDirExists: fs.existsSync(staticUploadsPath),
    files,
    staticFiles
  });
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
