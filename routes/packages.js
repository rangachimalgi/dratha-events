import express from 'express';
import {
  getAllPackages,
  createPackage,
  updatePackage,
  deletePackage,
  getPackageById
} from '../controllers/packageController.js';

const router = express.Router();

router.get('/', getAllPackages);
router.post('/', createPackage);
router.get('/:id', getPackageById);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

export default router;
