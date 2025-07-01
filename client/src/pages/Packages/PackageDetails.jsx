import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PackageDetails = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!id) {
    return <div className="mt-28 text-center text-red-500 text-lg">No package ID provided.</div>;
  }

  useEffect(() => {
    const fetchPackage = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`http://localhost:8080/api/packages/${id}`);
        setPkg(res.data);
      } catch (err) {
        setError('Failed to load package details.');
      } finally {
        setLoading(false);
      }
    };
    fetchPackage();
  }, [id]);

  if (loading) {
    return <div className="mt-28 text-center text-lg">Loading package details...</div>;
  }
  if (error) {
    return <div className="mt-28 text-center text-red-500 text-lg">{error}</div>;
  }
  if (!pkg) {
    return <div className="mt-28 text-center text-gray-500 text-lg">No package found.</div>;
  }

  // Features for display (customize as needed)
  const features = [
    { icon: '/images/img_f1svg.svg', label: 'Guests', value: pkg.guests },
    { icon: '/images/img_f2svg.svg', label: 'Catering', value: pkg.foodType },
    { icon: '/images/img_f3svg.svg', label: 'Venue Type', value: pkg.venue },
    pkg.decoration && { icon: '/images/img_f4svg.svg', label: 'Decoration', value: pkg.decoration },
    pkg.photography && { icon: '/images/img_f1svg.svg', label: 'Photography', value: pkg.photography },
    pkg.type && { icon: '/images/img_f2svg.svg', label: 'Event Type', value: pkg.type },
  ].filter(Boolean);

  // Package details for display (customize as needed)
  const packageDetails = [
    { label: 'Package ID', value: pkg._id },
    { label: 'Price', value: pkg.price },
    { label: 'Venue', value: pkg.venue },
    { label: 'Guests Capacity', value: pkg.guests },
    { label: 'Catering', value: pkg.foodType },
    pkg.decoration && { label: 'Decoration', value: pkg.decoration },
    pkg.photography && { label: 'Photography', value: pkg.photography },
    pkg.type && { label: 'Event Type', value: pkg.type },
    { label: 'Package Status', value: pkg.status || 'Available' },
  ].filter(Boolean);

  return (
    <div className="flex flex-col items-center mt-28">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-lg mt-12 md:mt-20 mb-6 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        {pkg.title || 'Event Package'}
      </h2>

      {/* Responsive Images Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-0 overflow-hidden rounded-2xl shadow-2xl mb-8">
        {/* Big Image */}
        <div className="flex-1 h-48 xs:h-60 sm:h-72 md:h-[600px]">
          <img
            src={pkg.image || '/images/luxuryWedding.png'}
            alt={pkg.title}
            className="w-full h-full object-cover object-center rounded-t-2xl md:rounded-none md:rounded-l-2xl"
            style={{ display: 'block' }}
          />
        </div>
        {/* Two Small Images (optional, fallback to main image) */}
        <div className="flex flex-row md:flex-col w-full md:w-1/3 h-48 xs:h-60 sm:h-72 md:h-[600px] gap-4 md:gap-0">
          <img
            src={pkg.image || '/images/destinationWedding.jpg'}
            alt={pkg.title + ' 1'}
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover object-center rounded-bl-2xl md:rounded-none md:rounded-t-2xl"
            style={{ display: 'block' }}
          />
          <img
            src={pkg.image || '/images/destinationWedding.jpg'}
            alt={pkg.title + ' 2'}
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover object-center rounded-br-2xl md:rounded-none md:rounded-b-2xl"
            style={{ display: 'block' }}
          />
        </div>
      </div>

      {/* Feature Row (no container) */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mb-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center px-4 py-2 rounded-2xl bg-white/90 shadow-md min-w-[110px] max-w-[140px]"
          >
            <img src={feature.icon} alt={feature.label} className="w-8 h-8 mb-1" />
            <span className="text-xs font-semibold text-gray-500">{feature.label}</span>
            <span className="text-base font-bold text-gray-800 whitespace-nowrap">
              {feature.value}
            </span>
          </div>
        ))}
      </div>
      {/* Description Section */}
      <div className="w-full max-w-4xl mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Event Package Description</h3>
        <h4 className="text-lg font-semibold text-pink-600 mb-2">{pkg.subtitle || pkg.title}</h4>
        <p className="text-gray-700 mb-2">
          {pkg.description}
        </p>
        {/* <button className="text-pink-600 font-semibold hover:underline focus:outline-none">
          Show more
        </button> */}
      </div>
      {/* Package Details Box */}
      <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-lg p-6 mb-8">
        <h5 className="text-xl font-bold text-gray-800 mb-4">Package Details</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {packageDetails.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-500 font-medium">{item.label}</span>
              <span className="text-gray-800 font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Event Features & Services Box (optional, static for now) */}
      <div className="w-full max-w-4xl bg-gradient-to-br from-pink-100 via-yellow-50 to-white rounded-2xl shadow-lg p-6 mb-8">
        <h5 className="text-xl font-bold text-pink-700 mb-4">Event Features & Services</h5>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-gray-700 text-base">
          <li>Luxurious Venue Decor</li>
          <li>Professional Catering</li>
          <li>Live DJ & Music</li>
          <li>Outdoor Lawn Area</li>
          <li>Private Bridal Suite</li>
          <li>Custom Lighting & Ambience</li>
          <li>On-site Parking</li>
          <li>Air-conditioned Banquet Halls</li>
          <li>Dedicated Event Planner</li>
          <li>Photography & Videography</li>
          <li>Guest WiFi Access</li>
          <li>Special Entry Walkways</li>
        </ul>
      </div>

      {/* Premium Packages & Ratings Box (optional, static for now) */}
      <div className="w-full max-w-4xl bg-gradient-to-br from-yellow-100 via-pink-50 to-white rounded-2xl shadow-lg p-6 mb-12">
        <h5 className="text-xl font-bold text-yellow-700 mb-4">Premium Packages & Ratings</h5>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-gray-700 text-base">
          <li><span className="text-2xl">⭐</span> Platinum Experience Rating: <span className="font-semibold text-green-700">A+</span></li>
          <li>Certified 5-Star Hospitality Standards</li>
          <li>Seamless Vendor Coordination</li>
          <li>100% Customizable Themes</li>
          <li>Verified Safety & Hygiene Standards</li>
          <li>High Guest Satisfaction Index: <span className="font-semibold text-green-700">92%</span></li>
          <li>Maximum Capacity: <span className="font-semibold text-green-700">{pkg.guests || 'N/A'} Guests</span></li>
        </ul>
      </div>
    </div>
  );
};

export default PackageDetails;
