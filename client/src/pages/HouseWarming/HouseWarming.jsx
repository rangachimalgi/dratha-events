import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
  
  const foodTableTypes = plan?.foodTableTypes || [];
  const chapraStandardTypes = plan?.chapraStandardTypes || [];
  const pandalWaterproofPakodaTypes = plan?.pandalWaterproofPakodaTypes || [];
  const jamkanaTypes = plan?.jamkanaTypes || [];
  const thomalaForDoorsTypes = plan?.thomalaForDoorsTypes || [];
  const welcomeBoardTypes = plan?.welcomeBoardTypes || [];
  const railingDecorsTypes = plan?.railingDecorsTypes || [];
  const chapraPremiumTypes = plan?.chapraPremiumTypes || [];
  const foodLunchTypes = plan?.foodLunchTypes || [];
  const foodBreakfastTypes = plan?.foodBreakfastTypes || [];
  const foodNightDinnerTypes = plan?.foodNightDinnerTypes || [];
  const garlandsTypes = plan?.garlandsTypes || [];
  const poojaBackdropsTypes = plan?.poojaBackdropsTypes || [];
  const matressTypes = plan?.matressTypes || [];
  const flowerBouquetsTypes = plan?.flowerBouquetsTypes || [];
  const goldenIronStandBouquetsTypes = plan?.goldenIronStandBouquetsTypes || [];
  const lightingTypes = plan?.lightingTypes || [];
  const transportationTypes = plan?.transportationTypes || [];
  const photographyTypes = plan?.photographyTypes || [];

  // State for selections (initialize with first available type if present)
  const [chair, setChair] = React.useState({ type: chairTypes[0] || { label: '', price: 0 }, qty: '' });
 
  const [foodTable, setFoodTable] = React.useState({ type: foodTableTypes[0] || { label: '', price: 0 }, qty: '' });
  const [chapraStandard, setChapraStandard] = React.useState({ type: chapraStandardTypes[0] || { label: '', price: 0 } });
  const [pandalWaterproofPakoda, setPandalWaterproofPakoda] = React.useState({ type: pandalWaterproofPakodaTypes[0] || { label: '', price: 0 }, qty: '' });
  const [jamkana, setJamkana] = React.useState({ type: jamkanaTypes[0] || { label: '', price: 0 }, qty: '' });
  const [thomalaForDoors, setThomalaForDoors] = React.useState({ type: thomalaForDoorsTypes[0] || { label: '', price: 0 }, qty: '' });
  const [welcomeBoard, setWelcomeBoard] = React.useState({ type: welcomeBoardTypes[0] || { label: '', price: 0 } });
  const [railingDecors, setRailingDecors] = React.useState({ type: railingDecorsTypes[0] || { label: '', price: 0 }, qty: '' });
  const [chapraPremium, setChapraPremium] = React.useState({ type: chapraPremiumTypes[0] || { label: '', price: 0 } });
  const [foodLunch, setFoodLunch] = React.useState({ type: foodLunchTypes[0] || { label: '', price: 0 }, qty: '' });
  const [foodBreakfast, setFoodBreakfast] = React.useState({ type: foodBreakfastTypes[0] || { label: '', price: 0 }, qty: '' });
  const [foodNightDinner, setFoodNightDinner] = React.useState({ type: foodNightDinnerTypes[0] || { label: '', price: 0 }, qty: '' });
  const [garlands, setGarlands] = React.useState({ type: garlandsTypes[0] || { label: '', price: 0 }, qty: '' });
  const [poojaBackdrops, setPoojaBackdrops] = React.useState({ type: poojaBackdropsTypes[0] || { label: '', price: 0 } });
  const [matress, setMatress] = React.useState({ type: matressTypes[0] || { label: '', price: 0 }, qty: '' });
  const [flowerBouquets, setFlowerBouquets] = React.useState({ type: flowerBouquetsTypes[0] || { label: '', price: 0 }, qty: '' });
  const [goldenIronStandBouquets, setGoldenIronStandBouquets] = React.useState({ type: goldenIronStandBouquetsTypes[0] || { label: '', price: 0 }, qty: '' });
  const [lighting, setLighting] = React.useState({ type: lightingTypes[0] || { label: '', price: 0 }, qty: '', days: '' });
  const [transportation, setTransportation] = React.useState({ type: transportationTypes[0] || { label: '', price: 0 } });
  const [photography, setPhotography] = React.useState({ type: photographyTypes[0] || { label: '', price: 0, sessionDuration: 0 }, sessions: '' });

  // Update state when plan loads
  useEffect(() => {
    if (plan) {
      setChair(c => ({ ...c, type: chairTypes[0] || { label: '', price: 0 } }));
   
      setFoodTable(ft => ({ ...ft, type: foodTableTypes[0] || { label: '', price: 0 } }));
      setChapraStandard({ type: chapraStandardTypes[0] || { label: '', price: 0 } });
      setPandalWaterproofPakoda(pw => ({ ...pw, type: pandalWaterproofPakodaTypes[0] || { label: '', price: 0 } }));
      setJamkana(j => ({ ...j, type: jamkanaTypes[0] || { label: '', price: 0 } }));
      setThomalaForDoors(tfd => ({ ...tfd, type: thomalaForDoorsTypes[0] || { label: '', price: 0 } }));
      setWelcomeBoard({ type: welcomeBoardTypes[0] || { label: '', price: 0 } });
      setRailingDecors(rd => ({ ...rd, type: railingDecorsTypes[0] || { label: '', price: 0 } }));
      setChapraPremium({ type: chapraPremiumTypes[0] || { label: '', price: 0 } });
      setFoodLunch(fl => ({ ...fl, type: foodLunchTypes[0] || { label: '', price: 0 } }));
      setFoodBreakfast(fb => ({ ...fb, type: foodBreakfastTypes[0] || { label: '', price: 0 } }));
      setFoodNightDinner(fnd => ({ ...fnd, type: foodNightDinnerTypes[0] || { label: '', price: 0 } }));
      setGarlands(g => ({ ...g, type: garlandsTypes[0] || { label: '', price: 0 } }));
      setPoojaBackdrops({ type: poojaBackdropsTypes[0] || { label: '', price: 0 } });
      setMatress(m => ({ ...m, type: matressTypes[0] || { label: '', price: 0 } }));
      setFlowerBouquets(fbq => ({ ...fbq, type: flowerBouquetsTypes[0] || { label: '', price: 0 } }));
      setGoldenIronStandBouquets(gisb => ({ ...gisb, type: goldenIronStandBouquetsTypes[0] || { label: '', price: 0 } }));
      setLighting(l => ({ ...l, type: lightingTypes[0] || { label: '', price: 0 } }));
      setTransportation({ type: transportationTypes[0] || { label: '', price: 0 } });
      setPhotography(p => ({ ...p, type: photographyTypes[0] || { label: '', price: 0, sessionDuration: 0 } }));
    }
  }, [plan]);

  // Calculate totals
  const chairTotal = (parseInt(chair.qty) || 0) * (chair.type?.price || 0);
  const foodTableTotal = (parseInt(foodTable.qty) || 0) * (foodTable.type?.price || 0);
  const pandalWaterproofPakodaTotal = (parseInt(pandalWaterproofPakoda.qty) || 0) * (pandalWaterproofPakoda.type?.price || 0);
  // For fields without quantity
  const chapraStandardTotal = chapraStandard.type?.price || 0;
  const welcomeBoardTotal = welcomeBoard.type?.price || 0;
  const chapraPremiumTotal = chapraPremium.type?.price || 0;
  const poojaBackdropsTotal = poojaBackdrops.type?.price || 0;
  const jamkanaTotal = (parseInt(jamkana.qty) || 0) * (jamkana.type?.price || 0);
  const thomalaForDoorsTotal = (parseInt(thomalaForDoors.qty) || 0) * (thomalaForDoors.type?.price || 0);
  const railingDecorsTotal = (parseInt(railingDecors.qty) || 0) * (railingDecors.type?.price || 0);
  const foodLunchTotal = (parseInt(foodLunch.qty) || 0) * (foodLunch.type?.price || 0);
  const foodBreakfastTotal = (parseInt(foodBreakfast.qty) || 0) * (foodBreakfast.type?.price || 0);
  const foodNightDinnerTotal = (parseInt(foodNightDinner.qty) || 0) * (foodNightDinner.type?.price || 0);
  const garlandsTotal = (parseInt(garlands.qty) || 0) * (garlands.type?.price || 0);
  const matressTotal = (parseInt(matress.qty) || 0) * (matress.type?.price || 0);
  const flowerBouquetsTotal = (parseInt(flowerBouquets.qty) || 0) * (flowerBouquets.type?.price || 0);
  const goldenIronStandBouquetsTotal = (parseInt(goldenIronStandBouquets.qty) || 0) * (goldenIronStandBouquets.type?.price || 0);
  const lightingTotal = (parseInt(lighting.qty) || 0) * (lighting.type?.price || 0) * (parseInt(lighting.days) || 0);
  // For transportation, just use the first type (if present)
  const transportationPrice = transportationTypes[0]?.price || 0;
  const transportationLabel = transportationTypes[0]?.label || 'Transportation';
  const transportationTotal = transportationPrice;
  const photographyTotal = (parseInt(photography.sessions) || 0) * (photography.type?.price || 0);

  const grandTotal = chairTotal + foodTableTotal + pandalWaterproofPakodaTotal + jamkanaTotal + thomalaForDoorsTotal + welcomeBoardTotal + railingDecorsTotal + chapraStandardTotal + chapraPremiumTotal + foodLunchTotal + foodBreakfastTotal + foodNightDinnerTotal + garlandsTotal + poojaBackdropsTotal + matressTotal + flowerBouquetsTotal + goldenIronStandBouquetsTotal + lightingTotal + transportationTotal + photographyTotal;

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
          {/* Food Table Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Food Table Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={foodTable.type.label}
                onChange={e => setFoodTable(ft => ({ ...ft, type: foodTableTypes.find(t => t.label === e.target.value) }))}
              >
                {foodTableTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/table)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Tables</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={foodTable.qty}
                onChange={e => setFoodTable(ft => ({ ...ft, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{foodTableTotal}</div>
          </div>
          {/* Chapra Standard Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Chapra Standard Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={chapraStandard.type.label}
                onChange={e => setChapraStandard({ type: chapraStandardTypes.find(t => t.label === e.target.value) })}
              >
                {chapraStandardTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{chapraStandardTotal}</div>
          </div>
          {/* Pandal Waterproof Pakoda with Sidecover Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Pandal Waterproof Pakoda with Sidecover</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={pandalWaterproofPakoda.type.label}
                onChange={e => setPandalWaterproofPakoda(pw => ({ ...pw, type: pandalWaterproofPakodaTypes.find(t => t.label === e.target.value) }))}
              >
                {pandalWaterproofPakodaTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={pandalWaterproofPakoda.qty}
                onChange={e => setPandalWaterproofPakoda(pw => ({ ...pw, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{pandalWaterproofPakodaTotal}</div>
          </div>
          {/* Jamkana Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Jamkana Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={jamkana.type.label}
                onChange={e => setJamkana(j => ({ ...j, type: jamkanaTypes.find(t => t.label === e.target.value) }))}
              >
                {jamkanaTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={jamkana.qty}
                onChange={e => setJamkana(j => ({ ...j, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{jamkanaTotal}</div>
          </div>
          {/* Thomala for Doors Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Thomala for Doors Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={thomalaForDoors.type.label}
                onChange={e => setThomalaForDoors(tfd => ({ ...tfd, type: thomalaForDoorsTypes.find(t => t.label === e.target.value) }))}
              >
                {thomalaForDoorsTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={thomalaForDoors.qty}
                onChange={e => setThomalaForDoors(tfd => ({ ...tfd, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{thomalaForDoorsTotal}</div>
          </div>
          {/* Welcome Board Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Welcome Board Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={welcomeBoard.type.label}
                onChange={e => setWelcomeBoard({ type: welcomeBoardTypes.find(t => t.label === e.target.value) })}
              >
                {welcomeBoardTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{welcomeBoardTotal}</div>
          </div>
          {/* Railing Decors Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Railing Decors Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={railingDecors.type.label}
                onChange={e => setRailingDecors(rd => ({ ...rd, type: railingDecorsTypes.find(t => t.label === e.target.value) }))}
              >
                {railingDecorsTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={railingDecors.qty}
                onChange={e => setRailingDecors(rd => ({ ...rd, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{railingDecorsTotal}</div>
          </div>
          {/* Chapra Premium Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Chapra Premium Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={chapraPremium.type.label}
                onChange={e => setChapraPremium({ type: chapraPremiumTypes.find(t => t.label === e.target.value) })}
              >
                {chapraPremiumTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{chapraPremiumTotal}</div>
          </div>
          {/* Food Lunch Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Food Lunch Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={foodLunch.type.label}
                onChange={e => setFoodLunch(fl => ({ ...fl, type: foodLunchTypes.find(t => t.label === e.target.value) }))}
              >
                {foodLunchTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/plate)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Plates</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={foodLunch.qty}
                onChange={e => setFoodLunch(fl => ({ ...fl, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{foodLunchTotal}</div>
          </div>
          {/* Food Breakfast Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Food Breakfast Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={foodBreakfast.type.label}
                onChange={e => setFoodBreakfast(fb => ({ ...fb, type: foodBreakfastTypes.find(t => t.label === e.target.value) }))}
              >
                {foodBreakfastTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/plate)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Plates</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={foodBreakfast.qty}
                onChange={e => setFoodBreakfast(fb => ({ ...fb, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{foodBreakfastTotal}</div>
          </div>
          {/* Food Night Dinner Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Food Night Dinner Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={foodNightDinner.type.label}
                onChange={e => setFoodNightDinner(fnd => ({ ...fnd, type: foodNightDinnerTypes.find(t => t.label === e.target.value) }))}
              >
                {foodNightDinnerTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/plate)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Plates</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={foodNightDinner.qty}
                onChange={e => setFoodNightDinner(fnd => ({ ...fnd, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{foodNightDinnerTotal}</div>
          </div>
          {/* Garlands Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Garlands Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={garlands.type.label}
                onChange={e => setGarlands(g => ({ ...g, type: garlandsTypes.find(t => t.label === e.target.value) }))}
              >
                {garlandsTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={garlands.qty}
                onChange={e => setGarlands(g => ({ ...g, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{garlandsTotal}</div>
          </div>
          {/* Pooja Backdrops Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Pooja Backdrops Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={poojaBackdrops.type.label}
                onChange={e => setPoojaBackdrops({ type: poojaBackdropsTypes.find(t => t.label === e.target.value) })}
              >
                {poojaBackdropsTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{poojaBackdropsTotal}</div>
          </div>
          {/* Matress Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Matress Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={matress.type.label}
                onChange={e => setMatress(m => ({ ...m, type: matressTypes.find(t => t.label === e.target.value) }))}
              >
                {matressTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={matress.qty}
                onChange={e => setMatress(m => ({ ...m, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{matressTotal}</div>
          </div>
          {/* Flower Bouquets Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Flower Bouquets for Kitchen and Other Places</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={flowerBouquets.type.label}
                onChange={e => setFlowerBouquets(fbq => ({ ...fbq, type: flowerBouquetsTypes.find(t => t.label === e.target.value) }))}
              >
                {flowerBouquetsTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={flowerBouquets.qty}
                onChange={e => setFlowerBouquets(fbq => ({ ...fbq, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{flowerBouquetsTotal}</div>
          </div>
          {/* Golden Iron Stand Bouquets Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Golden Iron Stand Bouquets of 3 Feet Height for Corners</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={goldenIronStandBouquets.type.label}
                onChange={e => setGoldenIronStandBouquets(gisb => ({ ...gisb, type: goldenIronStandBouquetsTypes.find(t => t.label === e.target.value) }))}
              >
                {goldenIronStandBouquetsTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={goldenIronStandBouquets.qty}
                onChange={e => setGoldenIronStandBouquets(gisb => ({ ...gisb, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{goldenIronStandBouquetsTotal}</div>
          </div>
          {/* Lighting Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Lighting Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={lighting.type.label}
                onChange={e => setLighting(l => ({ ...l, type: lightingTypes.find(t => t.label === e.target.value) }))}
              >
                {lightingTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/unit/day)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Units</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={lighting.qty}
                onChange={e => setLighting(l => ({ ...l, qty: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Days</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={lighting.days}
                onChange={e => setLighting(l => ({ ...l, days: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{lightingTotal}</div>
          </div>
          {/* Transportation Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">{transportationLabel}</label>
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{transportationTotal}</div>
          </div>
          {/* Photography Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Photography Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={photography.type.label}
                onChange={e => setPhotography(p => ({ ...p, type: photographyTypes.find(t => t.label === e.target.value) }))}
              >
                {photographyTypes.map((t, i) => (
                  <option key={i} value={t.label}>{t.label} (₹{t.price}/session, {t.sessionDuration} hrs)</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Session Duration</label>
              <input
                type="text"
                className="w-24 border rounded px-3 py-2 text-right font-mono bg-gray-100"
                value={photography.type.sessionDuration ? `${photography.type.sessionDuration} hrs` : ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">No. of Sessions</label>
              <input
                type="number"
                min="0"
                className="w-20 border rounded px-3 py-2 text-right font-mono"
                placeholder="0"
                value={photography.sessions}
                onChange={e => setPhotography(p => ({ ...p, sessions: e.target.value.replace(/^0+(?!$)/, '') }))}
              />
            </div>
            <div className="text-gray-800 font-bold min-w-[110px]">Total: ₹{photographyTotal}</div>
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
