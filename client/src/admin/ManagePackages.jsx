import React, { useState } from 'react';

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

const ManagePackages = ({ onBack }) => {
  const [packageForm, setPackageForm] = useState(initialPackageForm);
  const [packages, setPackages] = useState(hardcodedPackages);

  const handlePackageInputChange = (e) => {
    const { name, value } = e.target;
    setPackageForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPackage = (e) => {
    e.preventDefault();
    setPackages((prev) => [...prev, packageForm]);
    setPackageForm(initialPackageForm);
  };

  return (
    <div className="mt-28">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add New Package</h2>
          <button
            onClick={onBack}
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
};

export default ManagePackages; 