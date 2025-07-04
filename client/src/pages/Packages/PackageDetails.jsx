import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const getImageUrl = (img) => {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  if (img.startsWith('uploads/')) return `${import.meta.env.VITE_API_BASE_URL}/${img}`;
  return img;
};

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
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/packages/${id}`);
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

  // Features for display: use pkg.features directly
  const features = Array.isArray(pkg.features) ? pkg.features : [];

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

      {/* Responsive Images Section: 1 main image (big), 2 gallery images (small) */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-0 overflow-hidden rounded-2xl shadow-2xl mb-8">
        {/* Big Main Image */}
        <div className="flex-1 h-48 xs:h-60 sm:h-72 md:h-[600px]">
          <img
            src={getImageUrl(pkg.image) || '/images/luxuryWedding.png'}
            alt={pkg.title}
            className="w-full h-full object-cover object-center rounded-t-2xl md:rounded-none md:rounded-l-2xl"
            style={{ display: 'block' }}
          />
        </div>
        {/* Two Small Gallery Images */}
        <div className="flex flex-row md:flex-col w-full md:w-1/3 h-48 xs:h-60 sm:h-72 md:h-[600px] gap-4 md:gap-0">
          <img
            src={getImageUrl(pkg.galleryImages && pkg.galleryImages[0]) || '/images/destinationWedding.jpg'}
            alt={pkg.title + ' Gallery 1'}
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover object-center rounded-bl-2xl md:rounded-none md:rounded-t-2xl"
            style={{ display: 'block' }}
          />
          <img
            src={getImageUrl(pkg.galleryImages && pkg.galleryImages[1]) || '/images/destinationWedding.jpg'}
            alt={pkg.title + ' Gallery 2'}
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
            <img src={'/images/img_f2svg.svg'} alt={feature.label} className="w-8 h-8 mb-1" />
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
    </div>
  );
};

export default PackageDetails;
