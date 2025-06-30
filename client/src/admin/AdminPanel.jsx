import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ManagePackages from './ManagePackages';

// Get the base URL for API requests
const API_BASE_URL = import.meta.env.PROD ? '' : 'http://localhost:8080';

const initialPackageForm = {
  title: '',
  image: '',
  description: '',
  guests: '',
  venue: '',
  foodType: '',
  price: '',
};

const hardcodedPackages = [
  {
    title: 'Luxury Wedding',
    image: '/images/luxuryWedding.png',
    description: 'Our Wedding Basic Package offers essential coverage of your special day with professional photography',
    guests: '500',
    venue: 'Banquet Hall',
    foodType: 'Veg & Non-Veg',
    price: '₹100,000',
  },
  {
    title: 'Birthday Bash',
    image: '/images/destinationWedding.jpg',
    description: 'Fun-filled birthday parties with custom themes, entertainment, and delicious cakes.',
    guests: '200',
    venue: 'Party Hall',
    foodType: 'Veg',
    price: '₹40,000',
  },
];

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState(null); // 'packages' or 'housewarming'
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Wedding',
    images: [],
    maxGuests: 0,
    features: [],
    pricing: {
      basePrice: 0,
      currency: 'USD',
      includes: []
    },
    services: [],
    rating: {
      score: 0,
      count: 0
    }
  });
  const [packageForm, setPackageForm] = useState(initialPackageForm);
  const [packages, setPackages] = useState(hardcodedPackages);

  useEffect(() => {
    if (activeSection) {
      fetchEvents();
    }
  }, [activeSection]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/events`);
      // Filter events based on active section
      const filteredEvents = Array.isArray(response.data) 
        ? response.data.filter(event => 
            activeSection === 'packages' 
              ? event.type !== 'HouseWarming' 
              : event.type === 'HouseWarming'
          )
        : [];
      setEvents(filteredEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // Here you would typically upload these files to your server/cloud storage
    // For now, we'll just create URL references
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      alt: file.name
    }));
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const handleFeatureAdd = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, { title: '', description: '', icon: '' }]
    }));
  };

  const handleFeatureChange = (index, field, value) => {
    setFormData(prev => {
      const newFeatures = [...prev.features];
      newFeatures[index] = {
        ...newFeatures[index],
        [field]: value
      };
      return {
        ...prev,
        features: newFeatures
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedEvent) {
        await axios.put(`${API_BASE_URL}/api/events/${selectedEvent._id}`, formData);
      } else {
        await axios.post(`${API_BASE_URL}/api/events`, formData);
      }
      fetchEvents();
      resetForm();
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`${API_BASE_URL}/api/events/${id}`);
        fetchEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const resetForm = () => {
    setSelectedEvent(null);
    setFormData({
      title: '',
      description: '',
      type: 'Wedding',
      images: [],
      maxGuests: 0,
      features: [],
      pricing: {
        basePrice: 0,
        currency: 'USD',
        includes: []
      },
      services: [],
      rating: {
        score: 0,
        count: 0
      }
    });
  };

  // Package form handlers
  const handlePackageInputChange = (e) => {
    const { name, value } = e.target;
    setPackageForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPackage = (e) => {
    e.preventDefault();
    setPackages((prev) => [...prev, packageForm]);
    setPackageForm(initialPackageForm);
  };

  // Ensure arrays exist before mapping
  const safeImages = Array.isArray(formData.images) ? formData.images : [];
  const safeFeatures = Array.isArray(formData.features) ? formData.features : [];
  const safeEvents = Array.isArray(events) ? events : [];

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div 
        className="bg-white rounded-lg shadow-md p-8 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setActiveSection('packages')}
      >
        <div className="text-center">
          <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Manage Packages</h2>
          <p className="text-gray-600 mb-4">Add and manage event packages like weddings, birthdays, and corporate events</p>
          <button 
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Manage Packages
          </button>
        </div>
      </div>

      <div 
        className="bg-white rounded-lg shadow-md p-8 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setActiveSection('housewarming')}
      >
        <div className="text-center">
          <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Manage Housewarming</h2>
          <p className="text-gray-600 mb-4">Add and manage housewarming event plans and packages</p>
          <button 
            className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Manage Housewarming
          </button>
        </div>
      </div>
    </div>
  );

  const renderEventForm = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {selectedEvent ? 'Edit Event' : 'Create New Event'}
        </h2>
        <button
          onClick={() => setActiveSection(null)}
          className="text-gray-600 hover:text-gray-800"
        >
          ← Back to Dashboard
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
              <option value="HouseWarming">House Warming</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Maximum Guests
            </label>
            <input
              type="number"
              name="maxGuests"
              value={formData.maxGuests}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Base Price
            </label>
            <input
              type="number"
              name="pricing.basePrice"
              value={formData.pricing.basePrice}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Images
            </label>
            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              className="mt-1 block w-full"
              accept="image/*"
            />
            <div className="mt-2 grid grid-cols-4 gap-4">
              {safeImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-24 w-24 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Features</h3>
            <button
              type="button"
              onClick={handleFeatureAdd}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Add Feature
            </button>
          </div>
          
          {safeFeatures.map((feature, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Feature Title"
                value={feature.title}
                onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Description"
                value={feature.description}
                onChange={(e) => handleFeatureChange(index, 'description', e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Icon"
                value={feature.icon}
                onChange={(e) => handleFeatureChange(index, 'icon', e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {selectedEvent ? 'Update Event' : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );

  const renderPackagesSection = () => (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add New Package</h2>
          <button
            onClick={() => setActiveSection(null)}
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back to Dashboard
          </button>
        </div>
        <form onSubmit={handleAddPackage} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Package Name</label>
            <input
              type="text"
              name="title"
              value={packageForm.title}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={packageForm.image}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={packageForm.description}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={2}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={packageForm.guests}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Venue</label>
            <input
              type="text"
              name="venue"
              value={packageForm.venue}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Food Type</label>
            <input
              type="text"
              name="foodType"
              value={packageForm.foodType}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={packageForm.price}
              onChange={handlePackageInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Add Package
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Packages List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <div key={idx} className="border rounded p-4 flex flex-col items-start">
              <img src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover rounded mb-2" />
              <h3 className="font-bold text-lg mb-1">{pkg.title}</h3>
              <p className="text-gray-600 mb-1">{pkg.description}</p>
              <div className="text-sm text-gray-500 mb-1">Guests: {pkg.guests}</div>
              <div className="text-sm text-gray-500 mb-1">Venue: {pkg.venue}</div>
              <div className="text-sm text-gray-500 mb-1">Food: {pkg.foodType}</div>
              <div className="text-sm text-gray-800 font-semibold">Price: {pkg.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEventsList = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {activeSection === 'packages' ? 'Packages List' : 'Housewarming Plans List'}
        </h2>
        <button
          onClick={() => setSelectedEvent(null)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add New {activeSection === 'packages' ? 'Package' : 'Plan'}
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Max Guests
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Base Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {safeEvents.map((event) => (
              <tr key={event._id}>
                <td className="px-6 py-4 whitespace-nowrap">{event.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.maxGuests}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {event.pricing?.basePrice} {event.pricing?.currency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setFormData(event);
                    }}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-28">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        {!activeSection ? (
          renderDashboard()
        ) : activeSection === 'packages' ? (
          <ManagePackages onBack={() => setActiveSection(null)} />
        ) : (
          <>
            {selectedEvent ? renderEventForm() : null}
            {renderEventsList()}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
