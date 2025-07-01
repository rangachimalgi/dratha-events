import React, { useEffect, useState } from 'react';
import axios from 'axios';

const emptyEditForm = {
  _id: '', title: '', image: '', description: '', price: '', guests: '', venue: '', foodType: '', galleryImages: '', features: [], extraDetails: []
};

const getImageUrl = (img) => {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  if (img.startsWith('uploads/')) return `http://localhost:8080/${img}`;
  return img;
};

const PackagesList = ({ onBack }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState(emptyEditForm);
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState('');

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get('http://localhost:8080/api/packages');
        setPackages(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setError('Failed to fetch packages.');
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;
    setDeletingId(id);
    try {
      await axios.delete(`http://localhost:8080/api/packages/${id}`);
      setPackages((prev) => prev.filter((pkg) => pkg._id !== id));
    } catch {
      alert('Failed to delete package.');
    } finally {
      setDeletingId(null);
    }
  };

  const startEdit = (pkg) => {
    setEditId(pkg._id);
    setEditError('');
    setEditForm({
      ...pkg,
      galleryImages: Array.isArray(pkg.galleryImages) ? pkg.galleryImages.join(', ') : '',
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  // Features handlers for edit
  const handleFeatureChange = (idx, field, value) => {
    setEditForm((prev) => {
      const features = prev.features.map((f, i) =>
        i === idx ? { ...f, [field]: value } : f
      );
      return { ...prev, features };
    });
  };
  const addFeature = () => {
    setEditForm((prev) => ({ ...prev, features: [...(prev.features || []), { icon: '', label: '', value: '' }] }));
  };
  const removeFeature = (idx) => {
    setEditForm((prev) => ({ ...prev, features: prev.features.filter((_, i) => i !== idx) }));
  };

  // ExtraDetails handlers for edit
  const handleExtraDetailChange = (idx, field, value) => {
    setEditForm((prev) => {
      const extraDetails = prev.extraDetails.map((d, i) =>
        i === idx ? { ...d, [field]: value } : d
      );
      return { ...prev, extraDetails };
    });
  };
  const addExtraDetail = () => {
    setEditForm((prev) => ({ ...prev, extraDetails: [...(prev.extraDetails || []), { label: '', value: '' }] }));
  };
  const removeExtraDetail = (idx) => {
    setEditForm((prev) => ({ ...prev, extraDetails: prev.extraDetails.filter((_, i) => i !== idx) }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);
    setEditError('');
    // Parse galleryImages
    const galleryImages = editForm.galleryImages
      ? editForm.galleryImages.split(',').map((s) => s.trim()).filter(Boolean)
      : [];
    const payload = {
      ...editForm,
      galleryImages,
    };
    try {
      const res = await axios.put(`http://localhost:8080/api/packages/${editForm._id}`, payload);
      setPackages((prev) => prev.map((pkg) => pkg._id === editForm._id ? res.data : pkg));
      setEditId(null);
    } catch {
      setEditError('Failed to update package.');
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <div className="mt-28 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Packages</h2>
        {onBack && (
          <button onClick={onBack} className="text-indigo-600 font-semibold">← Back</button>
        )}
      </div>
      {loading ? (
        <div className="text-center py-8">Loading packages...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : packages.length === 0 ? (
        <div className="text-center py-8">No packages found.</div>
      ) : (
        <div className="space-y-4">
          {packages.map((pkg) => (
            <div key={pkg._id} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between relative">
              {editId === pkg._id ? (
                <form onSubmit={handleEditSubmit} className="w-full">
                  <div className="flex flex-col gap-2 mb-2">
                    <input type="text" name="title" value={editForm.title} onChange={handleEditInputChange} className="border rounded px-2 py-1" placeholder="Title" required />
                    <input type="text" name="image" value={editForm.image} onChange={handleEditInputChange} className="border rounded px-2 py-1" placeholder="Image URL" required />
                    <textarea name="description" value={editForm.description} onChange={handleEditInputChange} className="border rounded px-2 py-1" placeholder="Description" required />
                    <input type="text" name="price" value={editForm.price} onChange={handleEditInputChange} className="border rounded px-2 py-1" placeholder="Price" required />
                    <input type="number" name="guests" value={editForm.guests} onChange={handleEditInputChange} className="border rounded px-2 py-1" placeholder="Guests" required />
                    <input type="text" name="venue" value={editForm.venue} onChange={handleEditInputChange} className="border rounded px-2 py-1" placeholder="Venue" required />
                    <input type="text" name="foodType" value={editForm.foodType} onChange={handleEditInputChange} className="border rounded px-2 py-1" placeholder="Food Type" required />
                    <input type="text" name="galleryImages" value={editForm.galleryImages} onChange={handleEditInputChange} className="border rounded px-2 py-1" placeholder="Gallery Images (comma separated)" />
                  </div>
                  {/* Features dynamic fields */}
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Features</label>
                    {editForm.features && editForm.features.map((feature, idx) => (
                      <div key={idx} className="flex flex-wrap gap-2 mb-2 items-center">
                        <input type="text" placeholder="Icon URL" value={feature.icon} onChange={e => handleFeatureChange(idx, 'icon', e.target.value)} className="border rounded px-2 py-1 w-32" />
                        <input type="text" placeholder="Label" value={feature.label} onChange={e => handleFeatureChange(idx, 'label', e.target.value)} className="border rounded px-2 py-1 w-32" />
                        <input type="text" placeholder="Value" value={feature.value} onChange={e => handleFeatureChange(idx, 'value', e.target.value)} className="border rounded px-2 py-1 w-32" />
                        <button type="button" onClick={() => removeFeature(idx)} className="text-red-500 font-bold px-2">×</button>
                      </div>
                    ))}
                    <button type="button" onClick={addFeature} className="text-indigo-600 font-semibold mt-1">+ Add Feature</button>
                  </div>
                  {/* Extra Details dynamic fields */}
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Extra Details</label>
                    {editForm.extraDetails && editForm.extraDetails.map((detail, idx) => (
                      <div key={idx} className="flex flex-wrap gap-2 mb-2 items-center">
                        <input type="text" placeholder="Label" value={detail.label} onChange={e => handleExtraDetailChange(idx, 'label', e.target.value)} className="border rounded px-2 py-1 w-40" />
                        <input type="text" placeholder="Value" value={detail.value} onChange={e => handleExtraDetailChange(idx, 'value', e.target.value)} className="border rounded px-2 py-1 w-40" />
                        <button type="button" onClick={() => removeExtraDetail(idx)} className="text-red-500 font-bold px-2">×</button>
                      </div>
                    ))}
                    <button type="button" onClick={addExtraDetail} className="text-indigo-600 font-semibold mt-1">+ Add Extra Detail</button>
                  </div>
                  {editError && <div className="text-red-500 font-semibold mb-2">{editError}</div>}
                  <div className="flex gap-2 mt-2">
                    <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" disabled={editLoading}>{editLoading ? 'Saving...' : 'Save'}</button>
                    <button type="button" onClick={() => setEditId(null)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  <div>
                    <div className="font-bold text-lg">{pkg.title}</div>
                    <div className="text-gray-600">{pkg.description}</div>
                    <div className="text-sm text-gray-500">Price: {pkg.price}</div>
                    <div className="text-sm text-gray-500">Guests: {pkg.guests}</div>
                    <div className="text-sm text-gray-500">Venue: {pkg.venue}</div>
                  </div>
                  {pkg.image && <img src={getImageUrl(pkg.image)} alt={pkg.title} className="w-32 h-20 object-cover rounded mt-2 md:mt-0" />}
                  <div className="flex flex-col gap-2 md:ml-4 mt-2 md:mt-0">
                    <button onClick={() => startEdit(pkg)} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold hover:bg-yellow-200">Edit</button>
                    <button onClick={() => handleDelete(pkg._id)} className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold hover:bg-red-200" disabled={deletingId === pkg._id}>{deletingId === pkg._id ? 'Deleting...' : 'Delete'}</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PackagesList; 