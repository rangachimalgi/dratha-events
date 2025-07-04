import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const emptyType = { label: '', price: '' };

const ManageHouseWarming = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // File objects
  const [imagePreviews, setImagePreviews] = useState([]);
  const [chairTypes, setChairTypes] = useState([{ ...emptyType }]);
  const [tentTypes, setTentTypes] = useState([{ ...emptyType }]);
  const [pendalTypes, setPendalTypes] = useState([{ ...emptyType }]);
  const [carpetTypes, setCarpetTypes] = useState([{ ...emptyType }]);
  const [foodTypes, setFoodTypes] = useState([{ ...emptyType }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setImages(files);
    setImagePreviews(files.map(file => URL.createObjectURL(file)));
  };

  // Dynamic type handlers
  const handleTypeChange = (setter, idx, field, value) => {
    setter(types => types.map((t, i) => i === idx ? { ...t, [field]: value } : t));
  };
  const addType = (setter) => setter(types => [...types, { ...emptyType }]);
  const removeType = (setter, idx) => setter(types => types.filter((_, i) => i !== idx));

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      images.forEach(img => formData.append('images', img));
      formData.append('chairTypes', JSON.stringify(chairTypes.filter(t => t.label && t.price)));
      formData.append('tentTypes', JSON.stringify(tentTypes.filter(t => t.label && t.price)));
      formData.append('pendalTypes', JSON.stringify(pendalTypes.filter(t => t.label && t.price)));
      formData.append('carpetTypes', JSON.stringify(carpetTypes.filter(t => t.label && t.price)));
      formData.append('foodTypes', JSON.stringify(foodTypes.filter(t => t.label && t.price)));
      await axios.post(`${BASE_URL}/api/housewarming`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess('Plan created successfully!');
      setTitle('');
      setDescription('');
      setImages([]);
      setImagePreviews([]);
      setChairTypes([{ ...emptyType }]);
      setTentTypes([{ ...emptyType }]);
      setPendalTypes([{ ...emptyType }]);
      setCarpetTypes([{ ...emptyType }]);
      setFoodTypes([{ ...emptyType }]);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create plan');
    } finally {
      setLoading(false);
    }
  };

  // Render dynamic type fields
  const renderTypeFields = (label, types, setter) => (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      {types.map((type, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Label"
            className="border rounded px-2 py-1 flex-1"
            value={type.label}
            onChange={e => handleTypeChange(setter, idx, 'label', e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="border rounded px-2 py-1 w-24 text-right font-mono"
            value={type.price}
            onChange={e => handleTypeChange(setter, idx, 'price', e.target.value.replace(/^0+(?!$)/, ''))}
          />
          {types.length > 1 && (
            <button type="button" className="text-red-500 font-bold px-2" onClick={() => removeType(setter, idx)}>-</button>
          )}
        </div>
      ))}
      <button type="button" className="text-blue-600 font-semibold text-sm mt-1" onClick={() => addType(setter)}>+ Add {label.slice(0, -1)}</button>
    </div>
  );

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Create Housewarming Plan</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            className="border rounded px-3 py-2 w-full"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="border rounded px-3 py-2 w-full min-h-[80px]"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Images (up to 3)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mb-2"
          />
          <div className="flex gap-2">
            {imagePreviews.map((src, idx) => (
              <img key={idx} src={src} alt="preview" className="w-20 h-20 object-cover rounded border" />
            ))}
          </div>
        </div>
        {renderTypeFields('Chair Types', chairTypes, setChairTypes)}
        {renderTypeFields('Tent Types', tentTypes, setTentTypes)}
        {renderTypeFields('Pendal Types', pendalTypes, setPendalTypes)}
        {renderTypeFields('Carpet Types', carpetTypes, setCarpetTypes)}
        {renderTypeFields('Food Types', foodTypes, setFoodTypes)}
        {error && <div className="text-red-500 font-semibold">{error}</div>}
        {success && <div className="text-green-600 font-semibold">{success}</div>}
        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition-colors font-bold"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Create Plan'}
        </button>
      </form>
    </div>
  );
};

export default ManageHouseWarming;
