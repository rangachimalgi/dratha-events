import express from 'express';
import { loginAdmin, createAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/create', createAdmin); // 👈 ADD THIS

export default router;
