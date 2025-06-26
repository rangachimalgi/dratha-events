import React from 'react';

const features = [
  { icon: '/images/img_f1svg.svg', label: 'Guests', value: '150' },
  { icon: '/images/img_f2svg.svg', label: 'Catering', value: 'Veg Only' },
  { icon: '/images/img_f3svg.svg', label: 'Venue Type', value: 'Home/Apartment' },
  { icon: '/images/img_f4svg.svg', label: 'Decoration', value: 'Traditional' },
  { icon: '/images/img_f1svg.svg', label: 'Photography', value: 'Event Coverage' },
  { icon: '/images/img_f2svg.svg', label: 'Event Type', value: 'House Warming' },
];

const packageDetails = [
  { label: 'Package ID', value: 'HW12' },
  { label: 'Price', value: '₹60,000' },
  { label: 'Venue Size', value: '2000 Sq Ft' },
  { label: 'Guests Capacity', value: 'Up to 150 Guests' },
  { label: 'Catering', value: 'Veg Only' },
  { label: 'Decoration', value: 'Traditional' },
  { label: 'Photography', value: 'Event Coverage' },
  { label: 'Event Type', value: 'House Warming' },
  { label: 'Package Status', value: 'Available' },
];

const featuresList = [
  'Traditional Decor',
  'Pure Veg Catering',
  'Live Music',
  'Puja Arrangements',
  'Welcome Gifts',
  'Custom Lighting',
  'On-site Parking',
  'Air-conditioned Hall',
  'Dedicated Event Manager',
  'Photography & Videography',
  'Guest WiFi Access',
  'Special Entry Walkways',
];

const premiumList = [
  '⭐ Gold Experience Rating: A',
  'Certified 4-Star Hospitality',
  'Seamless Vendor Coordination',
  'Customizable Themes',
  'Verified Safety & Hygiene',
  'High Guest Satisfaction: 89%',
  'Max Capacity: 200+ Guests',
];

export const HouseWarming = () => {
  return (
    <div className="flex flex-col items-center px-2 sm:px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black drop-shadow-lg mt-12 md:mt-20 mb-6 text-center bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
        House Warming Package
      </h2>
      {/* Responsive Images Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-0 overflow-hidden rounded-2xl shadow-2xl mb-8">
        {/* Big Image */}
        <div className="flex-1 h-48 xs:h-60 sm:h-72 md:h-[500px]">
          <img
            src="/images/luxuryWedding.png"
            alt="House Warming"
            className="w-full h-full object-cover object-center rounded-t-2xl md:rounded-none md:rounded-l-2xl"
            style={{ display: 'block' }}
          />
        </div>
        {/* Two Small Images */}
        <div className="flex flex-row md:flex-col w-full md:w-1/3 md:w-1/4 h-48 xs:h-60 sm:h-72 md:h-[500px] gap-4 md:gap-0">
          <img
            src="/images/events.png"
            alt="Event 1"
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover object-center rounded-bl-2xl md:rounded-none md:rounded-t-2xl"
            style={{ display: 'block' }}
          />
          <img
            src="/images/engagement.png"
            alt="Event 2"
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover object-center rounded-br-2xl md:rounded-none md:rounded-b-2xl"
            style={{ display: 'block' }}
          />
        </div>
      </div>
      {/* Feature Row */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-4xl mb-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded-2xl bg-white/90 shadow-md min-w-[100px] max-w-[140px] mb-2"
          >
            <img src={feature.icon} alt={feature.label} className="w-7 h-7 sm:w-8 sm:h-8 mb-1" />
            <span className="text-xs font-semibold text-gray-500">{feature.label}</span>
            <span className="text-sm sm:text-base font-bold text-gray-800 whitespace-nowrap">{feature.value}</span>
          </div>
        ))}
      </div>
      {/* Description Section */}
      <div className="w-full max-w-4xl mb-8 px-2 sm:px-0">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Event Package Description</h3>
        <h4 className="text-base sm:text-lg font-semibold text-yellow-600 mb-2">Premium House Warming Package</h4>
        <p className="text-gray-700 mb-2 text-sm sm:text-base">
          Welcome your new beginnings with our all-inclusive house warming package. From traditional decor and puja arrangements to live music and pure veg catering, we ensure your special day is memorable and auspicious. Enjoy a cozy venue, custom lighting, and a dedicated event manager for a seamless experience.
        </p>
        <button className="text-yellow-600 font-semibold hover:underline focus:outline-none text-sm sm:text-base">Show more</button>
      </div>
      {/* Package Details Box */}
      <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-lg p-4 sm:p-6 mb-8">
        <h5 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Package Details</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
          {packageDetails.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-500 font-medium text-sm sm:text-base">{item.label}</span>
              <span className="text-gray-800 font-semibold text-sm sm:text-base">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Event Features & Services Box */}
      <div className="w-full max-w-4xl bg-gradient-to-br from-yellow-100 via-pink-50 to-white rounded-2xl shadow-lg p-6 mb-8">
        <h5 className="text-xl font-bold text-yellow-700 mb-4">Event Features & Services</h5>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-gray-700 text-base">
          {featuresList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Premium Packages & Ratings Box */}
      <div className="w-full max-w-4xl bg-gradient-to-br from-pink-100 via-yellow-50 to-white rounded-2xl shadow-lg p-6 mb-12">
        <h5 className="text-xl font-bold text-pink-700 mb-4">Premium Packages & Ratings</h5>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-gray-700 text-base">
          {premiumList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
