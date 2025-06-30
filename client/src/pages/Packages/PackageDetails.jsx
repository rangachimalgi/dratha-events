import React from 'react';

const features = [
  {
    icon: '/images/img_f1svg.svg',
    label: 'Guests',
    value: '300',
  },
  {
    icon: '/images/img_f2svg.svg',
    label: 'Catering',
    value: 'Veg & Non-Veg',
  },
  {
    icon: '/images/img_f3svg.svg',
    label: 'Venue Type',
    value: 'Banquet Hall',
  },
  {
    icon: '/images/img_f4svg.svg',
    label: 'Decoration',
    value: 'Theme Based',
  },
  {
    icon: '/images/img_f1svg.svg',
    label: 'Photography',
    value: 'Full Coverage',
  },
  {
    icon: '/images/img_f2svg.svg',
    label: 'Event Type',
    value: 'Wedding',
  },
];

const packageDetails = [
  { label: 'Package ID', value: 'WE48' },
  { label: 'Price', value: '₹2,50,000' },
  { label: 'Venue Size', value: '5000 Sq Ft' },
  { label: 'Guests Capacity', value: 'Up to 300 Guests' },
  { label: 'Catering', value: 'Veg & Non-Veg' },
  { label: 'Decoration', value: 'Theme Based' },
  { label: 'Photography', value: 'Full-Day Coverage' },
  { label: 'Event Type', value: 'Wedding' },
  { label: 'Package Status', value: 'Available' },
];

const PackageDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-lg mt-12 md:mt-20 mb-6 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        Luxury Wedding Package
      </h2>

      {/* Responsive Images Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-0 overflow-hidden rounded-2xl shadow-2xl mb-8">
        {/* Big Image */}
        <div className="flex-1 h-48 xs:h-60 sm:h-72 md:h-[600px]">
          <img
            src="/images/luxuryWedding.png"
            alt="Luxury Wedding"
            className="w-full h-full object-cover object-center rounded-t-2xl md:rounded-none md:rounded-l-2xl"
            style={{ display: 'block' }}
          />
        </div>
        {/* Two Small Images */}
        <div className="flex flex-row md:flex-col w-full md:w-1/3 h-48 xs:h-60 sm:h-72 md:h-[600px] gap-4 md:gap-0">
          <img
            src="/images/destinationWedding.jpg"
            alt="Destination Wedding 1"
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover object-center rounded-bl-2xl md:rounded-none md:rounded-t-2xl"
            style={{ display: 'block' }}
          />
          <img
            src="/images/destinationWedding.jpg"
            alt="Destination Wedding 2"
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
        <h4 className="text-lg font-semibold text-pink-600 mb-2">Premium Wedding Package</h4>
        <p className="text-gray-700 mb-2">
          Celebrate your big day in style with our all-inclusive premium wedding package. From
          elegant venue decor to professional full-day photography, we ensure every moment is
          perfectly captured. Enjoy a spacious banquet hall, customized catering options, and
          stunning themed decorations. Our experienced team handles everything, so you can focus on
          making memories with your loved ones.
        </p>
        <button className="text-pink-600 font-semibold hover:underline focus:outline-none">
          Show more
        </button>
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

      {/* Event Features & Services Box */}
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

      {/* Premium Packages & Ratings Box */}
      <div className="w-full max-w-4xl bg-gradient-to-br from-yellow-100 via-pink-50 to-white rounded-2xl shadow-lg p-6 mb-12">
        <h5 className="text-xl font-bold text-yellow-700 mb-4">Premium Packages & Ratings</h5>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-gray-700 text-base">
          <li><span className="text-2xl">⭐</span> Platinum Experience Rating: <span className="font-semibold text-green-700">A+</span></li>
          <li>Certified 5-Star Hospitality Standards</li>
          <li>Seamless Vendor Coordination</li>
          <li>100% Customizable Themes</li>
          <li>Verified Safety & Hygiene Standards</li>
          <li>High Guest Satisfaction Index: <span className="font-semibold text-green-700">92%</span></li>
          <li>Maximum Capacity: <span className="font-semibold text-green-700">500+ Guests</span></li>
        </ul>
      </div>
    </div>
  );
};

export default PackageDetails;
