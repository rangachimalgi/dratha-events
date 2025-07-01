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
      image,
      description,
      price,
      guests,
      venue,
      foodType,
      galleryImages,
      features,
      extraDetails // 👈 add this
    } = req.body;

    const newPackage = new Package({
      title,
      image,
      description,
      price,
      guests,
      venue,
      foodType,
      galleryImages,
      features,
      extraDetails
    });

    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    console.error('Error creating package:', err);
    res.status(500).json({ error: 'Server error' });
  }
};


export const updatePackage = async (req, res) => {
  const updated = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deletePackage = async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
