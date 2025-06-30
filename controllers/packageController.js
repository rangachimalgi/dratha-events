import Package from "../models/Package.js";

export const getAllPackages = async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
};

export const createPackage = async (req, res) => {
  const newPkg = new Package(req.body);
  await newPkg.save();
  res.status(201).json(newPkg);
};

export const updatePackage = async (req, res) => {
  const updated = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deletePackage = async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
