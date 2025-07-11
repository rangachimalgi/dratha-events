import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const emptyType = { label: '', price: '' };

const ManageHouseWarming = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // File objects
  const [imagePreviews, setImagePreviews] = useState([]);
  const [chairTypes, setChairTypes] = useState([{ ...emptyType }]);
 
  const [foodTableTypes, setFoodTableTypes] = useState([{ ...emptyType }]);
  const [chapraStandardTypes, setChapraStandardTypes] = useState([{ ...emptyType }]);
  const [pandalWaterproofPakodaTypes, setPandalWaterproofPakodaTypes] = useState([{ ...emptyType }]);
  const [jamkanaTypes, setJamkanaTypes] = useState([{ ...emptyType }]);
  const [thomalaForDoorsTypes, setThomalaForDoorsTypes] = useState([{ ...emptyType }]);
  const [welcomeBoardTypes, setWelcomeBoardTypes] = useState([{ ...emptyType }]);
  const [railingDecorsTypes, setRailingDecorsTypes] = useState([{ ...emptyType }]);
  const [chapraPremiumTypes, setChapraPremiumTypes] = useState([{ ...emptyType }]);
  const [foodLunchTypes, setFoodLunchTypes] = useState([{ ...emptyType }]);
  const [foodBreakfastTypes, setFoodBreakfastTypes] = useState([{ ...emptyType }]);
  const [foodNightDinnerTypes, setFoodNightDinnerTypes] = useState([{ ...emptyType }]);
  const [garlandsTypes, setGarlandsTypes] = useState([{ ...emptyType }]);
  const [poojaBackdropsTypes, setPoojaBackdropsTypes] = useState([{ ...emptyType }]);
  const [matressTypes, setMatressTypes] = useState([{ ...emptyType }]);
  const [flowerBouquetsTypes, setFlowerBouquetsTypes] = useState([{ ...emptyType }]);
  const [goldenIronStandBouquetsTypes, setGoldenIronStandBouquetsTypes] = useState([{ ...emptyType }]);
  const [lightingTypes, setLightingTypes] = useState([{ ...emptyType }]);
  const [transportationTypes, setTransportationTypes] = useState([{ ...emptyType }]);
  const [photographyTypes, setPhotographyTypes] = useState([{ label: '', price: '', sessionDuration: '' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [planId, setPlanId] = useState(null);

  // Fetch existing plan on mount
  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get(`${BASE_URL}/api/housewarming`)
      .then(res => {
        const plan = res.data[0];
        if (plan) {
          setPlanId(plan._id);
          setTitle(plan.title || '');
          setDescription(plan.description || '');
          setChairTypes(plan.chairTypes?.length ? plan.chairTypes : [{ ...emptyType }]);
          setFoodTableTypes(plan.foodTableTypes?.length ? plan.foodTableTypes : [{ ...emptyType }]);
          setChapraStandardTypes(plan.chapraStandardTypes?.length ? plan.chapraStandardTypes : [{ ...emptyType }]);
          setPandalWaterproofPakodaTypes(plan.pandalWaterproofPakodaTypes?.length ? plan.pandalWaterproofPakodaTypes : [{ ...emptyType }]);
          setJamkanaTypes(plan.jamkanaTypes?.length ? plan.jamkanaTypes : [{ ...emptyType }]);
          setThomalaForDoorsTypes(plan.thomalaForDoorsTypes?.length ? plan.thomalaForDoorsTypes : [{ ...emptyType }]);
          setWelcomeBoardTypes(plan.welcomeBoardTypes?.length ? plan.welcomeBoardTypes : [{ ...emptyType }]);
          setRailingDecorsTypes(plan.railingDecorsTypes?.length ? plan.railingDecorsTypes : [{ ...emptyType }]);
          setChapraPremiumTypes(plan.chapraPremiumTypes?.length ? plan.chapraPremiumTypes : [{ ...emptyType }]);
          setFoodLunchTypes(plan.foodLunchTypes?.length ? plan.foodLunchTypes : [{ ...emptyType }]);
          setFoodBreakfastTypes(plan.foodBreakfastTypes?.length ? plan.foodBreakfastTypes : [{ ...emptyType }]);
          setFoodNightDinnerTypes(plan.foodNightDinnerTypes?.length ? plan.foodNightDinnerTypes : [{ ...emptyType }]);
          setGarlandsTypes(plan.garlandsTypes?.length ? plan.garlandsTypes : [{ ...emptyType }]);
          setPoojaBackdropsTypes(plan.poojaBackdropsTypes?.length ? plan.poojaBackdropsTypes : [{ ...emptyType }]);
          setMatressTypes(plan.matressTypes?.length ? plan.matressTypes : [{ ...emptyType }]);
          setFlowerBouquetsTypes(plan.flowerBouquetsTypes?.length ? plan.flowerBouquetsTypes : [{ ...emptyType }]);
          setGoldenIronStandBouquetsTypes(plan.goldenIronStandBouquetsTypes?.length ? plan.goldenIronStandBouquetsTypes : [{ ...emptyType }]);
          setLightingTypes(plan.lightingTypes?.length ? plan.lightingTypes : [{ ...emptyType }]);
          setTransportationTypes(plan.transportationTypes?.length ? plan.transportationTypes : [{ ...emptyType }]);
          setPhotographyTypes(plan.photographyTypes?.length ? plan.photographyTypes : [{ label: '', price: '', sessionDuration: '' }]);
          setImages([]);
          setImagePreviews(plan.images?.map(img => `${BASE_URL}/${img}`) || []);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setImages(files);
    setImagePreviews(files.map(file => URL.createObjectURL(file)));
  };

  // Dynamic type handlers
  const handleTypeChange = (setter, idx, field, value) => {
    setter(types => types.map((t, i) => i === idx ? { ...t, [field]: value } : t));
  };
  const addType = (setter) => setter(types => [...types, { ...emptyType }]);
  const removeType = (setter, idx) => setter(types => types.filter((_, i) => i !== idx));

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      images.forEach(img => formData.append('images', img));
      formData.append('chairTypes', JSON.stringify(chairTypes.filter(t => t.label && t.price)));
      formData.append('foodTableTypes', JSON.stringify(foodTableTypes.filter(t => t.label && t.price)));
      formData.append('chapraStandardTypes', JSON.stringify(chapraStandardTypes.filter(t => t.label && t.price)));
      formData.append('pandalWaterproofPakodaTypes', JSON.stringify(pandalWaterproofPakodaTypes.filter(t => t.label && t.price)));
      formData.append('jamkanaTypes', JSON.stringify(jamkanaTypes.filter(t => t.label && t.price)));
      formData.append('thomalaForDoorsTypes', JSON.stringify(thomalaForDoorsTypes.filter(t => t.label && t.price)));
      formData.append('welcomeBoardTypes', JSON.stringify(welcomeBoardTypes.filter(t => t.label && t.price)));
      formData.append('railingDecorsTypes', JSON.stringify(railingDecorsTypes.filter(t => t.label && t.price)));
      formData.append('chapraPremiumTypes', JSON.stringify(chapraPremiumTypes.filter(t => t.label && t.price)));
      formData.append('foodLunchTypes', JSON.stringify(foodLunchTypes.filter(t => t.label && t.price)));
      formData.append('foodBreakfastTypes', JSON.stringify(foodBreakfastTypes.filter(t => t.label && t.price)));
      formData.append('foodNightDinnerTypes', JSON.stringify(foodNightDinnerTypes.filter(t => t.label && t.price)));
      formData.append('garlandsTypes', JSON.stringify(garlandsTypes.filter(t => t.label && t.price)));
      formData.append('poojaBackdropsTypes', JSON.stringify(poojaBackdropsTypes.filter(t => t.label && t.price)));
      formData.append('matressTypes', JSON.stringify(matressTypes.filter(t => t.label && t.price)));
      formData.append('flowerBouquetsTypes', JSON.stringify(flowerBouquetsTypes.filter(t => t.label && t.price)));
      formData.append('goldenIronStandBouquetsTypes', JSON.stringify(goldenIronStandBouquetsTypes.filter(t => t.label && t.price)));
      formData.append('lightingTypes', JSON.stringify(lightingTypes.filter(t => t.label && t.price)));
      formData.append('transportationTypes', JSON.stringify(transportationTypes.filter(t => t.label && t.price)));
      formData.append('photographyTypes', JSON.stringify(photographyTypes.filter(t => t.label && t.price && t.sessionDuration)));
      // If planId exists, update; else, create
      let response;
      if (planId) {
        response = await axios.put(`${BASE_URL}/api/housewarming/${planId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        response = await axios.post(`${BASE_URL}/api/housewarming`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setPlanId(response.data._id);
      }
      setSuccess('Plan saved successfully!');
      // Optionally, update state with new/updated plan
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to save plan');
    } finally {
      setLoading(false);
    }
  };

  // Render dynamic type fields
  const renderTypeFields = (label, types, setter) => (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      {types.map((type, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Label"
            className="border rounded px-2 py-1 flex-1"
            value={type.label}
            onChange={e => handleTypeChange(setter, idx, 'label', e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="border rounded px-2 py-1 w-24 text-right font-mono"
            value={type.price}
            onChange={e => handleTypeChange(setter, idx, 'price', e.target.value.replace(/^0+(?!$)/, ''))}
          />
          {types.length > 1 && (
            <button type="button" className="text-red-500 font-bold px-2" onClick={() => removeType(setter, idx)}>-</button>
          )}
        </div>
      ))}
      <button type="button" className="text-blue-600 font-semibold text-sm mt-1" onClick={() => addType(setter)}>+ Add {label.slice(0, -1)}</button>
    </div>
  );

  // Custom render function for Photography
  const renderPhotographyFields = (label, types, setter) => (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      {types.map((type, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Label"
            className="border rounded px-2 py-1 flex-1"
            value={type.label}
            onChange={e => setter(types => types.map((t, i) => i === idx ? { ...t, label: e.target.value } : t))}
          />
          <input
            type="number"
            placeholder="Price"
            className="border rounded px-2 py-1 w-24 text-right font-mono"
            value={type.price}
            onChange={e => setter(types => types.map((t, i) => i === idx ? { ...t, price: e.target.value.replace(/^0+(?!$)/, '') } : t))}
          />
          <input
            type="number"
            placeholder="Session (hrs)"
            className="border rounded px-2 py-1 w-28 text-right font-mono"
            value={type.sessionDuration}
            onChange={e => setter(types => types.map((t, i) => i === idx ? { ...t, sessionDuration: e.target.value.replace(/^0+(?!$)/, '') } : t))}
          />
          {types.length > 1 && (
            <button type="button" className="text-red-500 font-bold px-2" onClick={() => setter(types => types.filter((_, i) => i !== idx))}>-</button>
          )}
        </div>
      ))}
      <button type="button" className="text-blue-600 font-semibold text-sm mt-1" onClick={() => setter(types => [...types, { label: '', price: '', sessionDuration: '' }])}>+ Add {label.slice(0, -1)}</button>
    </div>
  );

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Create Housewarming Plan</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            className="border rounded px-3 py-2 w-full"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="border rounded px-3 py-2 w-full min-h-[80px]"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Images (up to 3)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mb-2"
          />
          <div className="flex gap-2">
            {imagePreviews.map((src, idx) => (
              <img key={idx} src={src} alt="preview" className="w-20 h-20 object-cover rounded border" />
            ))}
          </div>
        </div>
        {renderTypeFields('Chair Types', chairTypes, setChairTypes)}
      
        {renderTypeFields('Food Tables', foodTableTypes, setFoodTableTypes)}
        {renderTypeFields('Chapra Standard', chapraStandardTypes, setChapraStandardTypes)}
        {renderTypeFields('Pandal Waterproof Pakoda with Sidecover', pandalWaterproofPakodaTypes, setPandalWaterproofPakodaTypes)}
        {renderTypeFields('Jamkana', jamkanaTypes, setJamkanaTypes)}
        {renderTypeFields('Thomala for Doors', thomalaForDoorsTypes, setThomalaForDoorsTypes)}
        {renderTypeFields('Welcome Board', welcomeBoardTypes, setWelcomeBoardTypes)}
        {renderTypeFields('Railing Decors', railingDecorsTypes, setRailingDecorsTypes)}
        {renderTypeFields('Chapra Premium', chapraPremiumTypes, setChapraPremiumTypes)}
        {renderTypeFields('Food Lunch', foodLunchTypes, setFoodLunchTypes)}
        {renderTypeFields('Food Breakfast', foodBreakfastTypes, setFoodBreakfastTypes)}
        {renderTypeFields('Food Night Dinner', foodNightDinnerTypes, setFoodNightDinnerTypes)}
        {renderTypeFields('Garlands', garlandsTypes, setGarlandsTypes)}
        {renderTypeFields('Pooja Backdrops', poojaBackdropsTypes, setPoojaBackdropsTypes)}
        {renderTypeFields('Matress', matressTypes, setMatressTypes)}
        {renderTypeFields('Flower Bouquets for Kitchen and Other Places', flowerBouquetsTypes, setFlowerBouquetsTypes)}
        {renderTypeFields('Golden Iron Stand Bouquets of 3 Feet Height for Corners', goldenIronStandBouquetsTypes, setGoldenIronStandBouquetsTypes)}
        {renderTypeFields('Lighting', lightingTypes, setLightingTypes)}
        {renderTypeFields('Transportation', transportationTypes, setTransportationTypes)}
        {renderPhotographyFields('Photography', photographyTypes, setPhotographyTypes)}
        {error && <div className="text-red-500 font-semibold">{error}</div>}
        {success && <div className="text-green-600 font-semibold">{success}</div>}
        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition-colors font-bold"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Create Plan'}
        </button>
      </form>
    </div>
  );
};

export default ManageHouseWarming;
