import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackageCard from '../components/ui/PackageCard';

const getImageUrl = (img) => {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  if (img.startsWith('/images/')) return img; // for static images in public
  if (img.startsWith('uploads/')) {
    return `${import.meta.env.VITE_API_BASE_URL}/${img}`;
  }
  return `${import.meta.env.VITE_API_BASE_URL}/uploads/${img}`;
};

const Birthday = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/packages`);
        setPackages(Array.isArray(res.data) ? res.data.filter(pkg => pkg.type === 'birthday') : []);
      } catch (err) {
        setError('Failed to load packages.');
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  return (
    <div className="mt-28 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-global-1">Birthday Packages</h2>
      {loading ? (
        <div className="text-center py-8">Loading packages...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <PackageCard key={pkg._id || idx} id={pkg._id} {...pkg} image={getImageUrl(pkg.image)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Birthday; 