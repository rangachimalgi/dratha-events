import Package from "../models/Package.js";

export const getAllPackages = async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
};

export const getPackageById = async (req, res) => {
  try {
    const packageId = req.params.id;
    const pkg = await Package.findById(packageId);

    if (!pkg) {
      return res.status(404).json({ error: 'Package not found' });
    }

    res.json(pkg);
  } catch (err) {
    console.error('Error fetching package by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createPackage = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      guests,
      venue,
      foodType,
      features,
      extraDetails
    } = req.body;

    const image = req.files?.image?.[0]?.path || '';
    const galleryImages = req.files?.galleryImages?.map(file => file.path) || [];

    const newPackage = new Package({
      title,
      image,
      description,
      price,
      guests,
      venue,
      foodType,
      galleryImages,
      features: JSON.parse(features || '[]'),
      extraDetails: JSON.parse(extraDetails || '[]')
    });

    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    console.error('Error creating package:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      guests,
      venue,
      foodType,
      features,
      extraDetails
    } = req.body;

    const updates = {
      title,
      description,
      price,
      guests,
      venue,
      foodType,
      features: JSON.parse(features || '[]'),
      extraDetails: JSON.parse(extraDetails || '[]')
    };

    if (req.files?.image?.[0]) {
      updates.image = req.files.image[0].path;
    }

    if (req.files?.galleryImages) {
      updates.galleryImages = req.files.galleryImages.map(file => file.path);
    }

    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.json(updatedPackage);
  } catch (err) {
    console.error('Error updating package:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deletePackage = async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
