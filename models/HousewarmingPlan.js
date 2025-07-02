import mongoose from 'mongoose';

const HousewarmingPlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }], // Expect 3 images
  chairTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  tentTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  pendalTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  carpetTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  foodTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
}, { timestamps: true });

const HousewarmingPlan = mongoose.model('HousewarmingPlan', HousewarmingPlanSchema);
export default HousewarmingPlan; 