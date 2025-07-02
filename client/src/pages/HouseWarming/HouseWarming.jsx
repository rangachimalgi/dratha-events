import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

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
  // Fetch plan from API
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}/api/housewarming`)
      .then(res => {
        setPlan(res.data[0] || null);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load plan');
        setLoading(false);
      });
  }, []);

  // Use fetched data or fallback to empty arrays
  const chairTypes = plan?.chairTypes || [];
  const tentTypes = plan?.tentTypes || [];
  const pendalTypes = plan?.pendalTypes || [];
  const carpetSizes = plan?.carpetTypes || [];
  const foodTypes = plan?.foodTypes || [];

  // State for selections (initialize with first available type if present)
  const [chair, setChair] = React.useState({ type: chairTypes[0] || { label: '', price: 0 }, qty: '' });
  const [tent, setTent] = React.useState({ type: tentTypes[0] || { label: '', price: 0 }, qty: '' });
  const [pendal, setPendal] = React.useState({ type: pendalTypes[0] || { label: '', price: 0 }, qty: '' });
  const [carpet, setCarpet] = React.useState({ size: carpetSizes[0] || { label: '', price: 0 }, qty: '' });
  const [food, setFood] = React.useState({ type: foodTypes[0] || { label: '', price: 0 }, qty: '' });

  // Update state when plan loads
  useEffect(() => {
    if (plan) {
      setChair(c => ({ ...c, type: chairTypes[0] || { label: '', price: 0 } }));
      setTent(t => ({ ...t, type: tentTypes[0] || { label: '', price: 0 } }));
      setPendal(p => ({ ...p, type: pendalTypes[0] || { label: '', price: 0 } }));
      setCarpet(c => ({ ...c, size: carpetSizes[0] || { label: '', price: 0 } }));
      setFood(f => ({ ...f, type: foodTypes[0] || { label: '', price: 0 } }));
    }
  }, [plan]);

  // Calculate totals
  const chairTotal = (parseInt(chair.qty) || 0) * (chair.type?.price || 0);
  const tentTotal = (parseInt(tent.qty) || 0) * (tent.type?.price || 0);
  const pendalTotal = (parseInt(pendal.qty) || 0) * (pendal.type?.price || 0);
  const carpetTotal = (parseInt(carpet.qty) || 0) * (carpet.size?.price || 0);
  const foodTotal = (parseInt(food.qty) || 0) * (food.type?.price || 0);
  const grandTotal = chairTotal + tentTotal + pendalTotal + carpetTotal + foodTotal;

  if (loading) return <div className="flex justify-center items-center min-h-[300px]">Loading...</div>;
  if (error || !plan) return <div className="flex justify-center items-center min-h-[300px] text-red-500">{error || 'No plan found'}</div>;

  return (
    <div className="flex flex-col items-center px-2 sm:px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black drop-shadow-lg mt-12 md:mt-20 mb-6 text-center bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
        {plan.title || 'House Warming Package'}
      </h2>
      {/* Responsive Images Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-0 overflow-hidden rounded-2xl shadow-2xl mb-8">
        {/* Big Image */}
        <div className="flex-1 h-48 xs:h-60 sm:h-72 md:h-[500px]">
          <img
            src={plan.images?.[0] ? `${BASE_URL}/${plan.images[0]}` : '/images/luxuryWedding.png'}
            alt="House Warming"
            className="w-full h-full object-cover object-center rounded-t-2xl md:rounded-none md:rounded-l-2xl"
            style={{ display: 'block' }}
          />
        </div>
        {/* Two Small Images */}
        <div className="flex flex-row md:flex-col w-full md:w-1/3 h-48 xs:h-60 sm:h-72 md:h-[500px] gap-4 md:gap-0">
          <img
            src={plan.images?.[1] ? `${BASE_URL}/${plan.images[1]}` : '/images/events.png'}
            alt="Event 1"
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover object-center rounded-bl-2xl md:rounded-none md:rounded-t-2xl"
            style={{ display: 'block' }}
          />
          <img
            src={plan.images?.[2] ? `${BASE_URL}/${plan.images[2]}` : '/images/engagement.png'}
            alt="Event 2"
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover object-center rounded-br-2xl md:rounded-none md:rounded-b-2xl"
            style={{ display: 'block' }}
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-4xl mb-8 px-2 sm:px-0">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Event Package Description</h3>
        <h4 className="text-base sm:text-lg font-semibold text-yellow-600 mb-2">Premium House Warming Package</h4>
        <p className="text-gray-700 mb-2 text-sm sm:text-base">
          {plan.description || 'Welcome your new beginnings with our all-inclusive house warming package. From traditional decor and puja arrangements to live music and pure veg catering, we ensure your special day is memorable and auspicious. Enjoy a cozy venue, custom lighting, and a dedicated event manager for a seamless experience.'}
        </p>
        <button className="text-yellow-600 font-semibold hover:underline focus:outline-none text-sm sm:text-base">Show more</button>
      </div>

      {/* Customization Section */}
      <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Customize Your Event Needs</h3>
        <div className="space-y-6">
          {/* Chair Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Chair Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={chair.type.label}
                onChange={e => setChair(c => ({ ...c, type: chairTypes.find(t => t.label === e.target.value) }))}
              >
                {chairTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/chair)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Chairs</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={chair.qty}
                onChange={e => setChair(c => ({ ...c, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{chairTotal}</div>
          </div>
          {/* Tent Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Tent Type/Size</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={tent.type.label}
                onChange={e => setTent(t => ({ ...t, type: tentTypes.find(tt => tt.label === e.target.value) }))}
              >
                {tentTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/tent)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Tents</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={tent.qty}
                onChange={e => setTent(t => ({ ...t, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{tentTotal}</div>
          </div>
          {/* Pendal Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Pendal Type/Size</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={pendal.type.label}
                onChange={e => setPendal(p => ({ ...p, type: pendalTypes.find(pt => pt.label === e.target.value) }))}
              >
                {pendalTypes.map((p, i) => (
                  <option key={i} value={p.label}>{p.label} (₹{p.price}/pendal)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Pendals</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={pendal.qty}
                onChange={e => setPendal(p => ({ ...p, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{pendalTotal}</div>
          </div>
          {/* Carpet Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Carpet Size</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={carpet.size.label}
                onChange={e => setCarpet(c => ({ ...c, size: carpetSizes.find(cs => cs.label === e.target.value) }))}
              >
                {carpetSizes.map((c, i) => (
                  <option key={i} value={c.label}>{c.label} (₹{c.price}/carpet)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Carpets</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={carpet.qty}
                onChange={e => setCarpet(c => ({ ...c, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{carpetTotal}</div>
          </div>
          {/* Food Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Food Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={food.type.label}
                onChange={e => setFood(f => ({ ...f, type: foodTypes.find(ft => ft.label === e.target.value) }))}
              >
                {foodTypes.map((f, i) => (
                  <option key={i} value={f.label}>{f.label} (₹{f.price}/plate)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Persons</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={food.qty}
                onChange={e => setFood(f => ({ ...f, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{foodTotal}</div>
          </div>
        </div>
        {/* Grand Total */}
        <div className="mt-8 text-right">
          <span className="text-lg font-bold text-pink-700">Grand Total: ₹{grandTotal}</span>
        </div>
      </div>
      {/* Feature Row */}
      {/* <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-4xl mb-8">
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
      </div> */}
      
      {/* Package Details Box */}
      {/* <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-lg p-4 sm:p-6 mb-8">
        <h5 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Package Details</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
          {packageDetails.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-500 font-medium text-sm sm:text-base">{item.label}</span>
              <span className="text-gray-800 font-semibold text-sm sm:text-base">{item.value}</span>
            </div>
          ))}
        </div>
      </div> */}
      {/* Event Features & Services Box */}
      {/* <div className="w-full max-w-4xl bg-gradient-to-br from-yellow-100 via-pink-50 to-white rounded-2xl shadow-lg p-6 mb-8">
        <h5 className="text-xl font-bold text-yellow-700 mb-4">Event Features & Services</h5>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-gray-700 text-base">
          {featuresList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div> */}
      {/* Premium Packages & Ratings Box */}
      {/* <div className="w-full max-w-4xl bg-gradient-to-br from-pink-100 via-yellow-50 to-white rounded-2xl shadow-lg p-6 mb-12">
        <h5 className="text-xl font-bold text-pink-700 mb-4">Premium Packages & Ratings</h5>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-gray-700 text-base">
          {premiumList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
