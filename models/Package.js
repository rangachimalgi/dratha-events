import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  price: String,
  guests: String,
  venue: String,
  foodType: String,

  galleryImages: [String], // extra images
  features: [
    {
      icon: String,
      label: String,
      value: String
    }
  ],
  extraDetails: [
    {
      label: String,
      value: String
    }
  ]
});

export default mongoose.model('Package', packageSchema);
