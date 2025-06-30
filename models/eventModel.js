import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Wedding', 'Birthday', 'Corporate', 'HouseWarming', 'Engagement', 'Other']
  },
  images: [{
    url: String,
    alt: String
  }],
  maxGuests: {
    type: Number,
    required: true
  },
  features: [{
    title: String,
    description: String,
    icon: String
  }],
  pricing: {
    basePrice: Number,
    currency: {
      type: String,
      default: 'USD'
    },
    includes: [String]
  },
  services: [{
    name: String,
    included: Boolean
  }],
  rating: {
    score: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
eventSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Event', eventSchema); 