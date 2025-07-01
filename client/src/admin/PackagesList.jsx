import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PackagesList = ({ onBack }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
            <div key={pkg._id} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-bold text-lg">{pkg.title}</div>
                <div className="text-gray-600">{pkg.description}</div>
                <div className="text-sm text-gray-500">Price: {pkg.price}</div>
                <div className="text-sm text-gray-500">Guests: {pkg.guests}</div>
                <div className="text-sm text-gray-500">Venue: {pkg.venue}</div>
              </div>
              {pkg.image && <img src={pkg.image} alt={pkg.title} className="w-32 h-20 object-cover rounded mt-2 md:mt-0" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PackagesList; 