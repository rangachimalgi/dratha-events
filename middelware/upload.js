import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('Multer destination called for file:', file.originalname);
    cb(null, 'uploads/'); // 🔥 save in `uploads/` folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = uniqueSuffix + path.extname(file.originalname);
    console.log('Multer filename generated:', filename);
    cb(null, filename); // eg: 12345678.jpg
  }
});

const upload = multer({ storage });

export default upload;
