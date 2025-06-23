import React, { useState } from 'react';
import PackageCard from '../../components/ui/PackageCard';
import CapsuleDropdown from '../../components/ui/CapsuleDropdown';

const packages = [
  {
    title: 'Luxury Wedding',
    image: '/images/luxuryWedding.png',
    badge: 'Luxury',
    badgeColor: 'bg-global-5',
    description:
      'Our Wedding Basic Package offers\nessential coverage of your special day with professional photography',
    miles: '500 Guests',
    fuel: 'Banquet Hall',
    transmission: 'Veg & Non-Veg',
    price: '₹100,000',
  },
  {
    title: 'Destination Wedding',
    image: '/images/destinationWedding.jpg',
    badge: 'Luxury',
    badgeColor: 'bg-global-5',
    description:
      'Our Wedding Basic Package offers\nessential coverage of your special day with professional photography',
    miles: '500 Guests',
    fuel: 'Banquet Hall',
    transmission: 'Veg & Non-Veg',
    price: '₹120,000',
  },
  {
    title: 'Birthday Bash',
    image: '/images/img_b2jpg.png',
    badge: 'Basic',
    badgeColor: 'bg-global-5',
    description:
      'Fun-filled birthday parties with custom themes, entertainment, and delicious cakes.',
    miles: '200 Guests',
    fuel: 'Party Hall',
    transmission: 'Veg',
    price: '₹40,000',
  },
  {
    title: 'Corporate Event',
    image: '/images/img_b4jpg.png',
    badge: 'Pro',
    badgeColor: 'bg-global-5',
    description:
      'Professional event management for conferences, seminars, and team-building activities.',
    miles: '300 Guests',
    fuel: 'Conference Hall',
    transmission: 'Veg & Non-Veg',
    price: '₹80,000',
  },
  {
    title: 'Corporate Event',
    image: '/images/img_b4jpg.png',
    badge: 'Pro',
    badgeColor: 'bg-global-5',
    description:
      'Professional event management for conferences, seminars, and team-building activities.',
    miles: '300 Guests',
    fuel: 'Conference Hall',
    transmission: 'Veg & Non-Veg',
    price: '₹80,000',
  },
];

const eventTypes = ['All Events', 'Wedding', 'Birthday', 'Corporate', 'House Warming'];
const priceRanges = ['Any Price', 'Under ₹50,000', '₹50,000 - ₹1,00,000', 'Above ₹1,00,000'];
const guestCounts = ['Any Package', 'Basic', 'Premium', 'Luxury'];

const Packages = () => {
  const [selectedEvent, setSelectedEvent] = useState(eventTypes[0]);
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [selectedGuests, setSelectedGuests] = useState(guestCounts[0]);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {packages.map((pkg, idx) => (
          <PackageCard key={idx} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
