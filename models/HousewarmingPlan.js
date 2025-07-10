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
  
  foodTableTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  chapraStandardTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  pandalWaterproofPakodaTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  jamkanaTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  thomalaForDoorsTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  welcomeBoardTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  railingDecorsTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  chapraPremiumTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  foodLunchTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  foodBreakfastTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  foodNightDinnerTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  garlandsTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  poojaBackdropsTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  matressTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  flowerBouquetsTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  goldenIronStandBouquetsTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  lightingTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  transportationTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ],
  photographyTypes: [
    {
      label: { type: String, required: true },
      price: { type: Number, required: true },
      sessionDuration: { type: Number, required: true }, // hours per session
    }
  ],
}, { timestamps: true });

const HousewarmingPlan = mongoose.model('HousewarmingPlan', HousewarmingPlanSchema);
export default HousewarmingPlan; 