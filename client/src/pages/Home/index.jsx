import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Header from '../../components/common/Header';
// import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import PackageCard from '../../components/ui/PackageCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [selectedMake, setSelectedMake] = useState('Any Makes');
  const [selectedModel, setSelectedModel] = useState('Any Models');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [selectedVehicleTab, setSelectedVehicleTab] = useState('Wedding');
  const [selectedBrandTab, setSelectedBrandTab] = useState('Wedding');
  const [selectedShopTab, setSelectedShopTab] = useState('New Cars For Sale');
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const vehicleTabs = ['All'];
  const vehicleTypeTabs = ['Wedding', 'Birthday', 'BabyShower'];
  const brandTabs = ['Wedding', 'Baby Shower', 'Birthday'];
  const shopTabs = ['New Cars For Sale', 'Used Cars For Sale', 'Browse By Type', 'Browse By Brand'];

  const brands = [
    { name: 'Wedding', image: '/images/Wedding.jpg' },
    { name: 'Birthday', image: '/images/Birthday.jpg' },
    { name: 'House Warming', image: '/images/houseWarming.jpeg' },
    { name: 'Baby Shower', image: '/images/corporate.jpg' },
  ];

  const blogPosts = [
    {
      id: 1,
      image: '/images/events.png',
      category: 'Sound',
      author: 'admin',
      date: 'November 22, 2023',
      title: '2024 BMW ALPINA XB7 with exclusive details, extraordinary',
    },
    {
      id: 2,
      image: '/images/events.png',
      category: 'Accessories',
      author: 'admin',
      date: 'November 22, 2023',
      title: 'BMW X6 M50i is designed to exceed your sportiest.',
    },
    {
      id: 3,
      image: '/images/events.png',
      category: 'Exterior',
      author: 'admin',
      date: 'November 22, 2023',
      title: 'BMW X5 Gold 2024 Sport Review: Light on Sport',
    },
  ];

  const carBrands = [
    'Ford Cars',
    'Honda Cars',
    'Hyundai Cars',
    'Infiniti Cars',
    'Jaguar Cars',
    'Jeep Cars',
    'Chrysler Cars',
    'Citroen Cars',
    'Cupra Cars',
    'Dacia Cars',
    'DS Cars',
    'Fiat Cars',
    'Land Rover Cars',
    'Lexus Cars',
    'Mercedes-Benz Cars',
    'Mazda Cars',
    'MG Cars',
    'Kia Cars',
    'Abarth Cars',
    'Romeo Cars',
    'Audi Cars',
    'Bentley Cars',
    'BMW Cars',
    'Chevrolet Cars',
    'Mini Cars',
    'Mitsubishi Cars',
    'Nissan Cars',
    'Peugeot Cars',
    'Porsche Cars',
    'Renault Cars',
  ];

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/packages`);
        setPackages(res.data || []);
      } catch (err) {
        setError('Failed to load packages');
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleSearch = () => {
    console.log('Searching with:', { selectedMake, selectedModel, selectedPrice });
  };

  const handleViewDetails = (vehicleId) => {
    console.log('Viewing details for vehicle:', vehicleId);
  };

  const handleGetStarted = () => {
    navigate('/packages');
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* <Header /> */}

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/events.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <p className="text-global-5 font-dm-sans text-base leading-5 mb-4">
            Find Packages for wedding, birthday parties, etc ..
          </p>
          <h1 className="text-global-5 font-dm-sans font-bold text-7xl leading-23 mb-8 max-w-4xl">
            Find Your Package
          </h1>

          {/* Vehicle Type Tabs */}
          {/* <div className="flex space-x-6 mb-8">
            {vehicleTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`font-dm-sans font-medium text-base leading-5 text-global-5 ${
                  selectedTab === tab ? 'border-b-2 border-global-10 pb-1' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </div> */}

          {/* Search Form */}
          {/* <div className="bg-global-10 rounded-full p-6 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full max-w-4xl">
            <div className="flex-1 border-r border-global-5 pr-4">
              <select 
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full bg-transparent text-global-1 font-dm-sans text-base outline-none"
              >
                <option value="Any Makes">Any Packages</option>
                <option value="Audi">Wedding</option>
                <option value="BMW">Birthday</option>
                <option value="Ford">House Warming</option>
              </select>
            </div>
            <div className="flex-1 border-r border-global-5 pr-4">
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-transparent text-global-1 font-dm-sans text-base outline-none"
              >
                <option value="Any Models">Any Models</option>
                <option value="A4">A4</option>
                <option value="A6">A6</option>
                <option value="X5">X5</option>
              </select>
            </div>
            <div className="flex-1 pr-4">
              <span className="text-global-1 font-dm-sans text-base capitalize">Prices:</span>
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="bg-transparent text-global-1 font-dm-sans text-base outline-none ml-2"
              >
                <option value="All Prices">All Prices</option>
                <option value="Under $20,000">Under ₹20,000</option>
                <option value="$20,000 - $50,000">₹20,000 - ₹50,000</option>
                <option value="Over $50,000">Over ₹50,000</option>
              </select>
            </div>
            <Button 
              onClick={handleSearch}
              className="bg-global-5 text-global-5 border-global-5 hover:bg-blue-600 rounded-full px-8 py-4 flex items-center space-x-2"
            >
              <img src="/images/img_icon_white_a700.svg" alt="Search" className="w-4 h-4" />
              <span className="font-dm-sans font-medium text-base leading-5">Search Package</span>
            </Button>
          </div> */}

          <p className="text-global-5 font-dm-sans text-base leading-5 mt-8 mb-6">
            Browse Featured Package
          </p>

          {/* Featured Models */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Wedding', 'Birthday', 'Baby Shower', 'House Warming'].map((model) => (
              <button
                key={model}
                className="bg-global-12 text-global-5 font-dm-sans font-medium text-base leading-5 px-6 py-3 rounded-full hover:bg-global-3 transition-colors"
                onClick={() => {
                  if (model === 'Wedding') navigate('/wedding');
                  else if (model === 'Birthday') navigate('/birthday');
                  else if (model === 'Baby Shower') navigate('/babyshower');
                  else if (model === 'House Warming') navigate('/planhousewarming');
                }}
              >
                {model}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Brands Section */}
      <section className="bg-global-8 py-20 rounded-t-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-global-1 font-dm-sans font-bold text-4xl leading-13">
              Explore Our Premium Events
            </h2>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/packages')}>
              <span className="text-global-1 font-dm-sans font-medium text-base leading-5">
                Show All Events
              </span>
              <img src="/images/img_vector.svg" alt="Arrow" className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-global-10 border border-global-5 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  if (brand.name === 'Wedding') navigate('/wedding');
                  else if (brand.name === 'Birthday') navigate('/birthday');
                  else if (brand.name === 'Baby Shower') navigate('/babyshower');
                  else if (brand.name === 'House Warming') navigate('/planhousewarming');
                }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center bg-global-5">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-global-1 font-dm-sans font-medium text-lg leading-6">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore All Vehicles Section */}
      <section className="bg-global-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-global-1 font-dm-sans font-bold text-4xl leading-13">
              Explore All Packages
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-global-1 font-dm-sans font-medium text-base leading-5">
                View All
              </span>
              <img src="/images/img_vector.svg" alt="Arrow" className="w-4 h-4" />
            </div>
          </div>

          {/* Vehicle Type Tabs */}
          <div className="flex space-x-8 mb-8 border-b border-global-5">
            {vehicleTypeTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedVehicleTab(tab)}
                className={`font-dm-sans font-medium text-base leading-5 pb-4 ${
                  selectedVehicleTab === tab
                    ? 'text-global-1 border-b-2 border-global-5'
                    : 'text-global-1'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {loading ? (
              <div className="col-span-full text-center">Loading packages...</div>
            ) : error ? (
              <div className="col-span-full text-center text-red-500">{error}</div>
            ) : (
              packages
                .filter(pkg => pkg.type && pkg.type.toLowerCase() === selectedVehicleTab.toLowerCase())
                .map(pkg => (
                  <PackageCard
                    key={pkg._id}
                    id={pkg._id}
                    image={pkg.image}
                    title={pkg.title}
                    description={pkg.description}
                    price={pkg.price}
                  />
                ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center space-x-4">
            <button className="bg-global-10 border border-global-5 rounded-full p-3 hover:bg-gray-50 transition-colors">
              <img src="/images/img_icon_black_900_12x12.svg" alt="Previous" className="w-3 h-3" />
            </button>
            <button className="bg-global-10 border border-global-5 rounded-full p-3 hover:bg-gray-50 transition-colors">
              <img src="/images/img_icon_black_900_12x11.svg" alt="Next" className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Get Fair Price Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src="/images/Img.png"
                alt="Car Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-global-7 p-16 flex flex-col justify-center">
              <h2 className="text-global-1 font-dm-sans font-bold text-4xl leading-14 mb-6">
                Book Your Special Event With Confidence
                <br />
                Celebrate With Us Today
              </h2>
              <p className="text-global-1 font-dm-sans text-base leading-7 mb-8">
                We are committed to delivering unforgettable experiences, personalized planning, and
                a wide range of services.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'We cover weddings, birthdays & housewarmings',
                  'You get full event coordination & support',
                  'We handle everything from start to finish',
                ].map((text, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-global-10 rounded-xl p-2">
                      <img src="/images/img_symbol.svg" alt="Check" className="w-6 h-6" />
                    </div>
                    <span className="text-global-1 font-dm-sans font-medium text-base leading-5">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleGetStarted}
                className="bg-global-3 text-global-3 border-global-3 hover:bg-blue-600 rounded-xl px-8 py-4 flex items-center space-x-2 w-fit"
              >
                <span className="font-dm-sans font-medium text-base leading-5">Get Started</span>
                <img src="/images/img_vector_white_a700.svg" alt="Arrow" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '836', label: 'ALL EVENTS BOOKING' },
              { number: '738', label: 'DEALER REVIEWS' },
              { number: '50', label: 'ENQUIRIES PER DAY' },
              { number: '500', label: 'WEDDING BOOKINGS' },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-global-1 font-dm-sans font-bold text-4xl leading-13 mb-2">
                  {stat.number}
                </h3>
                <p className="text-global-1 font-dm-sans text-base leading-5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-global-10 border-t border-global-5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-global-1 font-dm-sans font-bold text-4xl leading-13 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '/images/img_f1svg.svg',
                title: 'Tailored Packages',
                description:
                  'Custom event packages designed to fit your style, budget, and vision perfectly.',
              },
              {
                icon: '/images/img_f2svg.svg',
                title: 'Experienced Planners',
                description:
                  'Our expert team handles every detail, \nso you can enjoy a stress-free celebration.',
              },
              {
                icon: '/images/img_f3svg.svg',
                title: 'Transparent Pricing',
                description:
                  'Clear, upfront pricing with\nno hidden costs — \nwhat you see is what you pay..',
              },
              {
                icon: '/images/img_f4svg.svg',
                title: 'Full-Service Support',
                description:
                  'From venue selection to final cleanup, we manage it all for a seamless experience.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <img src={feature.icon} alt={feature.title} className="w-15 h-15 mx-auto mb-6" />
                <h3 className="text-global-1 font-dm-sans font-medium text-xl leading-7 mb-4">
                  {feature.title}
                </h3>
                <p className="text-global-1 font-dm-sans text-base leading-7 whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Makes Section */}
      <section className="bg-global-1 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-global-5 font-dm-sans font-bold text-4xl leading-13">
              Luxury Events
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-global-5 font-dm-sans font-medium text-base leading-5">
                View All
              </span>
              <img src="/images/img_vector_white_a700.svg" alt="Arrow" className="w-4 h-4" />
            </div>
          </div>

          {/* Brand Tabs */}
          <div className="flex space-x-8 mb-8 border-b border-opacity-30 border-global-5">
            {brandTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedBrandTab(tab)}
                className={`font-dm-sans font-medium text-base leading-5 pb-4 ${
                  selectedBrandTab === tab
                    ? 'text-global-5 border-b-2 border-global-10'
                    : 'text-global-5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Popular Cars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {loading ? (
              <div className="col-span-full text-center">Loading packages...</div>
            ) : error ? (
              <div className="col-span-full text-center text-red-500">{error}</div>
            ) : (
              packages
                .filter(pkg => {
                  // Map tab to type
                  let type = selectedBrandTab;
                  if (type === 'Baby Shower') type = 'babyshower';
                  return pkg.type && pkg.type.toLowerCase() === type.toLowerCase();
                })
                .map(pkg => {
                  const getImageUrl = (img) => {
                    if (!img) return '';
                    if (img.startsWith('http')) return img;
                    if (img.startsWith('/images/')) return img; // for static images in public
                    // The image path already includes 'uploads/', so we just prepend the base URL
                    return `${import.meta.env.VITE_API_BASE_URL}/${img}`;
                  };
                  
                  return (
                    <PackageCard
                      key={pkg._id}
                      id={pkg._id}
                      image={getImageUrl(pkg.image)}
                      title={pkg.title}
                      description={pkg.description}
                      price={pkg.price}
                    />
                  );
                })
            )}
          </div>

          {/* Additional Car Image */}
          {/* <div className="flex justify-end">
            <img 
              src="/images/img_car12640x550jpg.png" 
              alt="Additional Car"
              className="w-58 h-68 object-cover rounded-2xl"
            />
          </div> */}

          {/* Pagination */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="border border-global-5 rounded-full p-3 hover:bg-global-5 hover:bg-opacity-20 transition-colors">
              <img src="/images/img_icon_white_a700_12x12.svg" alt="Previous" className="w-3 h-3" />
            </button>
            <button className="border border-global-5 rounded-full p-3 hover:bg-global-5 hover:bg-opacity-20 transition-colors">
              <img src="/images/img_icon_white_a700_12x11.svg" alt="Next" className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Shop BoxCar Your Way Section */}
      {/* <section className="py-20"> */}
      {/* <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-global-1 font-dm-sans font-bold text-4xl leading-13">
              Shop BoxCar Your Way
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-global-1 font-dm-sans font-medium text-base leading-5">
                View More
              </span>
              <img src="/images/img_vector.svg" alt="Arrow" className="w-4 h-4" />
            </div>
          </div> */}

      {/* Shop Tabs */}
      {/* <div className="flex space-x-8 mb-8 border-b border-global-5">
            {shopTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedShopTab(tab)}
                className={`font-dm-sans font-medium text-base leading-5 pb-4 ${
                  selectedShopTab === tab 
                    ? 'text-global-1 border-b-2 border-global-5' :'text-global-1'
                }`}
              >
                {tab}
              </button>
            ))}
          </div> */}

      {/* Car Brands Grid */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
            {carBrands.map((brand, index) => (
              <a 
                key={index}
                href={`/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-global-1 font-dm-sans text-base leading-5 hover:text-global-2 transition-colors"
              >
                {brand}
              </a>
            ))}
          </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* Customer Testimonials Section */}
      <section className="bg-global-8 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-global-1 font-dm-sans font-bold text-4xl leading-13">
              What our customers say
            </h2>
            <p className="text-global-1 font-dm-sans text-base leading-5">
              Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-global-10 border border-global-5 rounded-full p-3 hover:bg-gray-50 transition-colors">
              <img src="/images/img_icon_black_900_12x12.svg" alt="Previous" className="w-3 h-3" />
            </button>

            <div className="flex items-center space-x-8 max-w-5xl">
              {/* <img
                src="/images/img_test1jpg.png"
                alt="Customer"
                className="w-112 h-118 object-cover rounded-lg"
              /> */}

              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="flex items-center space-x-1 bg-cover bg-center p-2 rounded"
                    style={{ backgroundImage: `url('/images/img_symbol_gray_300_01.svg')` }}
                  >
                    <img src="/images/img_container.svg" alt="Stars" className="w-20 h-5" />
                  </div>
                  <span className="bg-global-4 text-global-5 font-dm-sans font-medium text-sm leading-5 px-3 py-1 rounded-xl">
                    5.0
                  </span>
                </div>

                <h3 className="text-global-1 font-dm-sans font-medium text-lg leading-6 mb-2">
                  Rohan Kohli
                </h3>
                <p className="text-global-1 font-dm-sans text-base leading-5 mb-6">
                  Happy Customer
                </p>

                <blockquote className="text-global-1 font-dm-sans font-medium text-2xl leading-12">
                  I would highly recommend Dratha for any event! The team made our wedding
                  absolutely perfect. From planning to execution, everything was smooth and
                  stress-free. Special thanks to the entire Dratha crew for making our big day
                  unforgettable!
                </blockquote>
              </div>
            </div>

            <button className="bg-global-10 border border-global-5 rounded-full p-3 hover:bg-gray-50 transition-colors">
              <img src="/images/img_icon_black_900_12x11.svg" alt="Next" className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-global-1 font-dm-sans font-bold text-4xl leading-13">
              Latest Blog Posts
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-global-1 font-dm-sans font-medium text-base leading-5">
                View All
              </span>
              <img src="/images/img_vector.svg" alt="Arrow" className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="relative mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-75 object-cover rounded-lg"
                  />
                  <span className="absolute top-4 left-4 bg-global-10 text-global-1 font-dm-sans font-medium text-sm leading-5 px-4 py-2 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-global-1 font-dm-sans text-base leading-5 capitalize">
                    {post.author}
                  </span>
                  <div className="w-1 h-1 bg-global-5 rounded-full"></div>
                  <span className="text-global-1 font-dm-sans text-base leading-5 capitalize">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-global-1 font-dm-sans font-medium text-xl leading-8 group-hover:text-global-2 transition-colors">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Looking for a Car */}
            <div className="bg-global-6 rounded-2xl p-16">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-global-1 font-dm-sans font-bold text-3xl leading-11 mb-6">
                    Looking For
                    <br />
                    Ready-Made Packages?
                  </h3>
                  <p className="text-global-1 font-dm-sans text-base leading-7 mb-8">
                    We offer pre-designed event packages
                    <br />
                    to make your planning easy and stress-free.
                  </p>
                  <Button
                    onClick={handleGetStarted}
                    className="bg-global-5 text-global-5 border-global-5 hover:bg-blue-600 rounded-xl px-8 py-4 flex items-center space-x-2"
                  >
                    <span className="font-dm-sans font-medium text-base leading-5">
                      Get Started
                    </span>
                    <img src="/images/img_vector_white_a700.svg" alt="Arrow" className="w-4 h-4" />
                  </Button>
                </div>
                <img
                  src="/images/img_electriccarsvg.svg"
                  alt="Electric Car"
                  className="w-28 h-28 ml-8"
                />
              </div>
            </div>

            {/* Want to Sell a Car */}
            <div className="bg-global-9 rounded-2xl p-16">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-global-1 font-dm-sans font-bold text-3xl leading-11 mb-6">
                    Want To Customize
                    <br />
                    Your Own Event?
                  </h3>
                  <p className="text-global-1 font-dm-sans text-base leading-7 mb-8">
                    Design every detail to match your unique vision
                    <br />
                    we bring your dream event to life.
                  </p>
                  <Button
                    onClick={handleGetStarted}
                    className="bg-global-1 text-global-5 border-global-1 hover:bg-gray-800 rounded-xl px-8 py-4 flex items-center space-x-2"
                  >
                    <span className="font-dm-sans font-medium text-base leading-5">
                      Get Started
                    </span>
                    <img src="/images/img_vector_white_a700.svg" alt="Arrow" className="w-4 h-4" />
                  </Button>
                </div>
                <img
                  src="/images/img_electriccar2svg.svg"
                  alt="Electric Car 2"
                  className="w-28 h-28 ml-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Separator */}
      <div className="bg-global-1">
        <div className="bg-global-10 h-20 rounded-b-10"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
