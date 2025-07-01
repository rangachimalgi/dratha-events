import React, { useState } from 'react';
import axios from 'axios';

const initialPackageForm = {
  title: '',
  image: '',
  description: '',
  price: '',
  guests: '',
  venue: '',
  foodType: '',
  galleryImages: '', // comma-separated URLs
  features: [
    { icon: '', label: '', value: '' }
  ],
  extraDetails: [
    { label: '', value: '' }
  ],
};

const hardcodedPackages = [
  {
    title: 'Elite Wedding Package',
    image: '/images/luxuryWedding.png',
    description: 'Premium wedding experience with full coverage.',
    price: '₹2,50,000',
    guests: '300',
    venue: 'Banquet Hall',
    foodType: 'Veg & Non-Veg',
    galleryImages: ['/images/luxuryWedding.png','/images/luxuryWedding.png','/images/luxuryWedding.png'],
    features: [
      { icon: '/images/img_f1svg.svg', label: 'Guests', value: '300' },
      { icon: '/images/img_f2svg.svg', label: 'Catering', value: 'Veg & Non-Veg' },
      { icon: '/images/img_f3svg.svg', label: 'Venue Type', value: 'Banquet Hall' },
      { icon: '/images/img_f4svg.svg', label: 'Decoration', value: 'Theme Based' },
      { icon: '/images/img_f1svg.svg', label: 'Photography', value: 'Full Coverage' },
      { icon: '/images/img_f2svg.svg', label: 'Event Type', value: 'Wedding' }
    ],
    extraDetails: [
      { label: 'Package ID', value: 'WE48' },
      { label: 'Price', value: '₹2,50,000' },
      { label: 'Venue Size', value: '5000 Sq Ft' },
      { label: 'Guests Capacity', value: 'Up to 300 Guests' },
      { label: 'Catering', value: 'Veg & Non-Veg' },
      { label: 'Decoration', value: 'Theme Based' },
      { label: 'Photography', value: 'Full-Day Coverage' },
      { label: 'Event Type', value: 'Wedding' },
      { label: 'Package Status', value: 'Available' }
    ]
  }
];

const ManagePackages = ({ onBack }) => {
  const [packageForm, setPackageForm] = useState(initialPackageForm);
  const [packages, setPackages] = useState(hardcodedPackages);
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handlePackageInputChange = (e) => {
    const { name, value } = e.target;
    setPackageForm((prev) => ({ ...prev, [name]: value }));
  };

  // Features handlers
  const handleFeatureChange = (idx, field, value) => {
    setPackageForm((prev) => {
      const features = prev.features.map((f, i) =>
        i === idx ? { ...f, [field]: value } : f
      );
      return { ...prev, features };
    });
  };
  const addFeature = () => {
    setPackageForm((prev) => ({ ...prev, features: [...prev.features, { icon: '', label: '', value: '' }] }));
  };
  const removeFeature = (idx) => {
    setPackageForm((prev) => ({ ...prev, features: prev.features.filter((_, i) => i !== idx) }));
  };

  // ExtraDetails handlers
  const handleExtraDetailChange = (idx, field, value) => {
    setPackageForm((prev) => {
      const extraDetails = prev.extraDetails.map((d, i) =>
        i === idx ? { ...d, [field]: value } : d
      );
      return { ...prev, extraDetails };
    });
  };
  const addExtraDetail = () => {
    setPackageForm((prev) => ({ ...prev, extraDetails: [...prev.extraDetails, { label: '', value: '' }] }));
  };
  const removeExtraDetail = (idx) => {
    setPackageForm((prev) => ({ ...prev, extraDetails: prev.extraDetails.filter((_, i) => i !== idx) }));
  };

  const handleAddPackage = async (e) => {
    e.preventDefault();
    setFormError('');
    setApiError('');
    // Validate required fields
    if (!packageForm.title || !packageForm.image || !packageForm.description || !packageForm.price) {
      setFormError('Please fill all required fields.');
      return;
    }
    // Parse galleryImages
    const galleryImages = packageForm.galleryImages
      ? packageForm.galleryImages.split(',').map((s) => s.trim()).filter(Boolean)
      : [];
    const payload = {
      ...packageForm,
      galleryImages,
    };
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8080/api/packages', payload);
      setPackages((prev) => [...prev, res.data]);
      setPackageForm(initialPackageForm);
    } catch (err) {
      setApiError('Failed to create package.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-28">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add New Package</h2>
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back to Dashboard
          </button>
        </div>
        <form onSubmit={handleAddPackage} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Package Name</label>
            <input
              type="text"
              name="title"
              value={packageForm.title}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={packageForm.image}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={packageForm.description}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={2}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={packageForm.price}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={packageForm.guests}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Venue</label>
            <input
              type="text"
              name="venue"
              value={packageForm.venue}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Food Type</label>
            <input
              type="text"
              name="foodType"
              value={packageForm.foodType}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Gallery Images (comma separated URLs)</label>
            <input
              type="text"
              name="galleryImages"
              value={packageForm.galleryImages}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="/images/img1.png, /images/img2.png"
            />
          </div>
          {/* Features dynamic fields */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Features</label>
            {packageForm.features.map((feature, idx) => (
              <div key={idx} className="flex flex-wrap gap-2 mb-2 items-center">
                <input
                  type="text"
                  placeholder="Icon URL"
                  value={feature.icon}
                  onChange={e => handleFeatureChange(idx, 'icon', e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 w-32"
                />
                <input
                  type="text"
                  placeholder="Label"
                  value={feature.label}
                  onChange={e => handleFeatureChange(idx, 'label', e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 w-32"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={feature.value}
                  onChange={e => handleFeatureChange(idx, 'value', e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 w-32"
                />
                <button type="button" onClick={() => removeFeature(idx)} className="text-red-500 font-bold px-2">×</button>
              </div>
            ))}
            <button type="button" onClick={addFeature} className="text-indigo-600 font-semibold mt-1">+ Add Feature</button>
          </div>
          {/* Extra Details dynamic fields */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Extra Details</label>
            {packageForm.extraDetails.map((detail, idx) => (
              <div key={idx} className="flex flex-wrap gap-2 mb-2 items-center">
                <input
                  type="text"
                  placeholder="Label"
                  value={detail.label}
                  onChange={e => handleExtraDetailChange(idx, 'label', e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 w-40"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={detail.value}
                  onChange={e => handleExtraDetailChange(idx, 'value', e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 w-40"
                />
                <button type="button" onClick={() => removeExtraDetail(idx)} className="text-red-500 font-bold px-2">×</button>
              </div>
            ))}
            <button type="button" onClick={addExtraDetail} className="text-indigo-600 font-semibold mt-1">+ Add Extra Detail</button>
          </div>
          {formError && (
            <div className="md:col-span-2 text-red-500 font-semibold">{formError}</div>
          )}
          {apiError && (
            <div className="md:col-span-2 text-red-500 font-semibold">{apiError}</div>
          )}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Package'}
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Packages List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <div key={idx} className="border rounded p-4 flex flex-col items-start w-full">
              <img src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover rounded mb-2" />
              <h3 className="font-bold text-lg mb-1">{pkg.title}</h3>
              <p className="text-gray-600 mb-1">{pkg.description}</p>
              <div className="text-sm text-gray-500 mb-1">Price: {pkg.price}</div>
              <div className="text-sm text-gray-500 mb-1">Guests: {pkg.guests}</div>
              <div className="text-sm text-gray-500 mb-1">Venue: {pkg.venue}</div>
              <div className="text-sm text-gray-500 mb-1">Food: {pkg.foodType}</div>
              <div className="text-sm text-gray-500 mb-1">Gallery Images: {Array.isArray(pkg.galleryImages) ? pkg.galleryImages.join(', ') : pkg.galleryImages}</div>
              <div className="text-sm text-gray-500 mb-1">Features: <pre className="whitespace-pre-wrap break-all">{JSON.stringify(pkg.features, null, 2)}</pre></div>
              <div className="text-sm text-gray-500 mb-1">Extra Details: <pre className="whitespace-pre-wrap break-all">{JSON.stringify(pkg.extraDetails, null, 2)}</pre></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagePackages; 