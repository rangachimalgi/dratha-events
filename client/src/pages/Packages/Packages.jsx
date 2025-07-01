import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackageCard from '../../components/ui/PackageCard';
import CapsuleDropdown from '../../components/ui/CapsuleDropdown';

const getImageUrl = (img) => {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  if (img.startsWith('uploads/')) return `http://localhost:8080/${img}`;
  return img;
};

const eventTypes = ['All Events', 'Wedding', 'Birthday', 'Corporate', 'House Warming'];
const priceRanges = ['Any Price', 'Under ₹50,000', '₹50,000 - ₹1,00,000', 'Above ₹1,00,000'];
const guestCounts = ['Any Package', 'Basic', 'Premium', 'Luxury'];

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(eventTypes[0]);
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [selectedGuests, setSelectedGuests] = useState(guestCounts[0]);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('http://localhost:8080/api/packages');
        setPackages(Array.isArray(res.data) ? res.data : []);
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
      <h2 className="text-3xl font-bold mb-8 text-global-1">Packages</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        <CapsuleDropdown
          options={eventTypes}
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          placeholder="Event Type"
        />
        <CapsuleDropdown
          options={guestCounts}
          value={selectedGuests}
          onChange={(e) => setSelectedGuests(e.target.value)}
          placeholder="Guest Count"
        />
        <CapsuleDropdown
          options={priceRanges}
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          placeholder="Price Range"
        />
      </div>
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

export default Packages;
