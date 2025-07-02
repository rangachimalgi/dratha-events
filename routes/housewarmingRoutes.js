import {
    getAllHousewarmingPlans,
    getHousewarmingPlan,
    createHousewarmingPlan,
    updateHousewarmingPlan,
    deleteHousewarmingPlan
  } from '../controllers/housewarmingController.js';
  
  import express from 'express';
  import upload from '../middelware/upload.js';
  
  const router = express.Router();
  
  router.get('/', getAllHousewarmingPlans);
  router.get('/:id', getHousewarmingPlan);
  router.post('/', upload.array('images', 3), createHousewarmingPlan);
  router.put('/:id', upload.array('images', 3), updateHousewarmingPlan);
  router.delete('/:id', deleteHousewarmingPlan);
  
  export default router;