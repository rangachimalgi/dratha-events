import express from 'express';
import {
  getAllPackages,
  createPackage,
  updatePackage,
  deletePackage,
  getPackageById
} from '../controllers/packageController.js';
import upload from '../middelware/upload.js';

const router = express.Router();

router.get('/', getAllPackages);
router.get('/:id', getPackageById);

// for single image + optional gallery images
router.post('/', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'galleryImages', maxCount: 5 }
]), createPackage);

router.put('/:id', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'galleryImages', maxCount: 5 }
]), updatePackage);

router.delete('/:id', deletePackage);

export default router;
