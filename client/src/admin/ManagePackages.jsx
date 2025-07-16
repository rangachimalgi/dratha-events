import React, { useState } from 'react';
import axios from 'axios';
import PackagesList from './PackagesList';

const initialPackageForm = {
  title: '',
  image: '',
  description: '',
  price: '',
  guests: '',
  venue: '',
  foodType: '',
  type: 'wedding', // default to wedding
  galleryImages: '', // comma-separated URLs
  features: [
    { icon: '', label: '', value: '' }
  ],
  extraDetails: [
    { label: '', value: '' }
  ],
};

const ManagePackages = ({ onBack }) => {
  const [packageForm, setPackageForm] = useState(initialPackageForm);
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [showList, setShowList] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryWarning, setGalleryWarning] = useState('');

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
    setPackageForm((prev) => ({ ...prev, features: [...prev.features, { icon: '/images/img_f2svg.svg', label: '', value: '' }] }));
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

  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0] || null);
  };
  const handleGalleryFilesChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setGalleryWarning('');
    setGalleryFiles(prev => {
      const total = prev.length + newFiles.length;
      if (total > 2) {
        setGalleryWarning('You can only upload up to 2 gallery images.');
        // Only add up to 2 images
        return [...prev, ...newFiles].slice(0, 2);
      }
      return [...prev, ...newFiles];
    });
  };
  const handleRemoveGalleryFile = (idx) => {
    setGalleryFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const handleAddPackage = async (e) => {
    e.preventDefault();
    setFormError('');
    setApiError('');
    if (!packageForm.title || (!packageForm.image && !imageFile) || !packageForm.description || !packageForm.price) {
      setFormError('Please fill all required fields and provide an image (file or URL).');
      return;
    }
    // Parse galleryImages from URLs
    const galleryImagesFromUrl = packageForm.galleryImages
      ? packageForm.galleryImages.split(',').map((s) => s.trim()).filter(Boolean)
      : [];
    const formData = new FormData();
    formData.append('title', packageForm.title);
    formData.append('description', packageForm.description);
    formData.append('price', packageForm.price);
    formData.append('guests', packageForm.guests);
    formData.append('venue', packageForm.venue);
    formData.append('foodType', packageForm.foodType);
    formData.append('type', packageForm.type);
    formData.append('features', JSON.stringify(packageForm.features));
    formData.append('extraDetails', JSON.stringify(packageForm.extraDetails));
    // Main image: file or URL
    if (imageFile) {
      formData.append('image', imageFile);
    } else if (packageForm.image) {
      formData.append('imageUrl', packageForm.image); // backend should handle this
    }
    // Gallery images: files and/or URLs
    galleryFiles.forEach((file) => {
      formData.append('galleryImages', file);
    });
    galleryImagesFromUrl.forEach((url) => {
      formData.append('galleryImageUrls', url); // backend should handle this
    });
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/packages`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setPackageForm(initialPackageForm);
      setImageFile(null);
      setGalleryFiles([]);
    } catch (err) {
      setApiError('Failed to create package.');
    } finally {
      setLoading(false);
    }
  };

  if (showList) {
    return <PackagesList onBack={() => setShowList(false)} />;
  }

  return (
    <div className="mt-28">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowList(true)}
          className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded font-semibold hover:bg-indigo-200"
        >
          View All Packages
        </button>
      </div>
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
            <label className="block text-sm font-medium mb-1">Event Type</label>
            <select
              name="type"
              value={packageForm.type}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="babyshower">Baby Shower</option>
            </select>
          </div>
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
            <label className="block text-sm font-medium mb-1">Image (Upload or URL)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageFileChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-1"
            />
            <input
              type="text"
              name="image"
              value={packageForm.image}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Image URL (optional if uploading)"
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
            <label className="block text-sm font-medium mb-1">Gallery Images (Upload up to 2 images, or enter comma separated URLs)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryFilesChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-1"
            />
            {galleryWarning && (
              <div className="text-red-500 text-sm mb-1">{galleryWarning}</div>
            )}
            {/* Gallery image previews */}
            {galleryFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {galleryFiles.map((file, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-20 h-20 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveGalleryFile(idx)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-80 group-hover:opacity-100"
                      title="Remove image"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <input
              type="text"
              name="galleryImages"
              value={packageForm.galleryImages}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="/images/img1.png, /images/img2.png (optional if uploading)"
            />
          </div>
          {/* Features dynamic fields */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Features</label>
            {packageForm.features.map((feature, idx) => (
              <div key={idx} className="flex flex-wrap gap-2 mb-2 items-center">
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
    </div>
  );
};

export default ManagePackages; 