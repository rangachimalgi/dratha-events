import HousewarmingPlan from '../models/HousewarmingPlan.js';

// Helper to parse JSON fields if sent as strings
function parseArrayField(field) {
  if (typeof field === 'string') {
    try {
      return JSON.parse(field);
    } catch {
      return [];
    }
  }
  return Array.isArray(field) ? field : [];
}

// Get all housewarming plans
export async function getAllHousewarmingPlans(req, res) {
  try {
    const plans = await HousewarmingPlan.find().sort({ createdAt: -1 });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

// Get a single housewarming plan by ID
export async function getHousewarmingPlan(req, res) {
  try {
    const plan = await HousewarmingPlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ error: 'Not found' });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

// Create a new housewarming plan
export async function createHousewarmingPlan(req, res) {
  try {
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map(f => f.path.replace('\\', '/'));
    }
    const plan = new HousewarmingPlan({
      title: req.body.title,
      description: req.body.description,
      images,
      chairTypes: parseArrayField(req.body.chairTypes),
      tentTypes: parseArrayField(req.body.tentTypes),
      pendalTypes: parseArrayField(req.body.pendalTypes),
      carpetTypes: parseArrayField(req.body.carpetTypes),
      foodTypes: parseArrayField(req.body.foodTypes),
    });
    await plan.save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update a housewarming plan
export async function updateHousewarmingPlan(req, res) {
  try {
    let images = req.body.images;
    if (req.files && req.files.length > 0) {
      images = req.files.map(f => f.path.replace('\\', '/'));
    }
    const update = {
      title: req.body.title,
      description: req.body.description,
      images,
      chairTypes: parseArrayField(req.body.chairTypes),
      tentTypes: parseArrayField(req.body.tentTypes),
      pendalTypes: parseArrayField(req.body.pendalTypes),
      carpetTypes: parseArrayField(req.body.carpetTypes),
      foodTypes: parseArrayField(req.body.foodTypes),
    };
    const plan = await HousewarmingPlan.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!plan) return res.status(404).json({ error: 'Not found' });
    res.json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete a housewarming plan
export async function deleteHousewarmingPlan(req, res) {
  try {
    const plan = await HousewarmingPlan.findByIdAndDelete(req.params.id);
    if (!plan) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
} 