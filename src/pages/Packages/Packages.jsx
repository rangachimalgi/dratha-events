import React from 'react';
import PackageCard from '../../components/ui/PackageCard';

const packages = [
  {
    title: 'Luxury Wedding',
    image: '/images/luxuryWedding.png',
    badge: 'Luxury',
    badgeColor: 'bg-global-5',
    description: 'Our Wedding Basic Package offers\nessential coverage of your special day with professional photography',
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
    description: 'Our Wedding Basic Package offers\nessential coverage of your special day with professional photography',
    miles: '500 Guests',
    fuel: 'Banquet Hall',
    transmission: 'Veg & Non-Veg',
    price: '₹120,000',
  },
  {
    title: 'Birthday Bash',
    image: '/images/img_b2jpg.png',
    badge: 'Fun',
    badgeColor: 'bg-global-3',
    description: 'Fun-filled birthday parties with custom themes, entertainment, and delicious cakes.',
    miles: '200 Guests',
    fuel: 'Party Hall',
    transmission: 'Veg',
    price: '₹40,000',
  },
  {
    title: 'Corporate Event',
    image: '/images/img_b4jpg.png',
    badge: 'Pro',
    badgeColor: 'bg-global-3',
    description: 'Professional event management for conferences, seminars, and team-building activities.',
    miles: '300 Guests',
    fuel: 'Conference Hall',
    transmission: 'Veg & Non-Veg',
    price: '₹80,000',
  },
  {
    title: 'Corporate Event',
    image: '/images/img_b4jpg.png',
    badge: 'Pro',
    badgeColor: 'bg-global-3',
    description: 'Professional event management for conferences, seminars, and team-building activities.',
    miles: '300 Guests',
    fuel: 'Conference Hall',
    transmission: 'Veg & Non-Veg',
    price: '₹80,000',
  }
];

const Packages = () => {
  return (
    <div className="mt-28 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-global-1">All Packages</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {packages.map((pkg, idx) => (
          <PackageCard key={idx} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
