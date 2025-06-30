import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  guests: Number,
  venue: String,
  foodType: String,
  price: String
}, { timestamps: true });

export default mongoose.model('Package', PackageSchema);
