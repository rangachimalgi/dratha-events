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
      foodTableTypes: parseArrayField(req.body.foodTableTypes),
      chapraStandardTypes: parseArrayField(req.body.chapraStandardTypes),
      pandalWaterproofPakodaTypes: parseArrayField(req.body.pandalWaterproofPakodaTypes),
      jamkanaTypes: parseArrayField(req.body.jamkanaTypes),
      thomalaForDoorsTypes: parseArrayField(req.body.thomalaForDoorsTypes),
      welcomeBoardTypes: parseArrayField(req.body.welcomeBoardTypes),
      railingDecorsTypes: parseArrayField(req.body.railingDecorsTypes),
      chapraPremiumTypes: parseArrayField(req.body.chapraPremiumTypes),
      foodLunchTypes: parseArrayField(req.body.foodLunchTypes),
      foodBreakfastTypes: parseArrayField(req.body.foodBreakfastTypes),
      foodNightDinnerTypes: parseArrayField(req.body.foodNightDinnerTypes),
      garlandsTypes: parseArrayField(req.body.garlandsTypes),
      poojaBackdropsTypes: parseArrayField(req.body.poojaBackdropsTypes),
      matressTypes: parseArrayField(req.body.matressTypes),
      flowerBouquetsTypes: parseArrayField(req.body.flowerBouquetsTypes),
      goldenIronStandBouquetsTypes: parseArrayField(req.body.goldenIronStandBouquetsTypes),
      lightingTypes: parseArrayField(req.body.lightingTypes),
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
      foodTableTypes: parseArrayField(req.body.foodTableTypes),
      chapraStandardTypes: parseArrayField(req.body.chapraStandardTypes),
      pandalWaterproofPakodaTypes: parseArrayField(req.body.pandalWaterproofPakodaTypes),
      jamkanaTypes: parseArrayField(req.body.jamkanaTypes),
      thomalaForDoorsTypes: parseArrayField(req.body.thomalaForDoorsTypes),
      welcomeBoardTypes: parseArrayField(req.body.welcomeBoardTypes),
      railingDecorsTypes: parseArrayField(req.body.railingDecorsTypes),
      chapraPremiumTypes: parseArrayField(req.body.chapraPremiumTypes),
      foodLunchTypes: parseArrayField(req.body.foodLunchTypes),
      foodBreakfastTypes: parseArrayField(req.body.foodBreakfastTypes),
      foodNightDinnerTypes: parseArrayField(req.body.foodNightDinnerTypes),
      garlandsTypes: parseArrayField(req.body.garlandsTypes),
      poojaBackdropsTypes: parseArrayField(req.body.poojaBackdropsTypes),
      matressTypes: parseArrayField(req.body.matressTypes),
      flowerBouquetsTypes: parseArrayField(req.body.flowerBouquetsTypes),
      goldenIronStandBouquetsTypes: parseArrayField(req.body.goldenIronStandBouquetsTypes),
      lightingTypes: parseArrayField(req.body.lightingTypes),
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