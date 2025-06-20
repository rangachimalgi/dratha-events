import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-global-1 w-full">
      {/* Newsletter Section */}
      <div className="bg-global-1 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col">
            <h2 className="text-global-5 font-dm-sans font-medium text-3xl leading-10 mb-4">
              Join BoxCar
            </h2>
            <p className="text-global-5 font-dm-sans text-base leading-5">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>
          <div className="bg-footer-2 rounded-full flex items-center p-4 w-full max-w-lg">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent text-global-5 font-dm-sans text-base flex-1 outline-none px-4"
            />
            <button className="bg-global-5 text-global-5 font-dm-sans font-medium text-base px-6 py-3 rounded-full border border-global-5 hover:bg-blue-600 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-global-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-footer-1"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-global-1 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7 capitalize">
              Company
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="/about" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                About Us
              </a>
              <a href="/blog" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Blog
              </a>
              <a href="/services" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Services
              </a>
              <a href="/faqs" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                FAQs
              </a>
              <a href="/terms" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Terms
              </a>
              <a href="/contact" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7 capitalize">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="/contact" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Get in Touch
              </a>
              <a href="/help" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Help center
              </a>
              <a href="/chat" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Live chat
              </a>
              <a href="/how-it-works" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                How it works
              </a>
            </div>
          </div>

          {/* Our Brands */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7 capitalize">
              Our Brands
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="/toyota" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Toyota
              </a>
              <a href="/porsche" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Porsche
              </a>
              <a href="/audi" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Audi
              </a>
              <a href="/bmw" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                BMW
              </a>
              <a href="/ford" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Ford
              </a>
              <a href="/nissan" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Nissan
              </a>
              <a href="/peugeot" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Peugeot
              </a>
              <a href="/volkswagen" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Volkswagen
              </a>
            </div>
          </div>

          {/* Vehicles Type */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7 capitalize">
              Vehicles Type
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="/sedan" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Sedan
              </a>
              <a href="/hatchback" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Hatchback
              </a>
              <a href="/suv" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                SUV
              </a>
              <a href="/hybrid" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Hybrid
              </a>
              <a href="/electric" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Electric
              </a>
              <a href="/coupe" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Coupe
              </a>
              <a href="/truck" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Truck
              </a>
              <a href="/convertible" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
                Convertible
              </a>
            </div>
          </div>

          {/* Mobile App & Social */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7">
              Our Mobile App
            </h3>
            
            {/* App Store */}
            <div className="bg-global-11 rounded-2xl p-4 flex items-center space-x-4">
              <img src="/images/img_symbol_white_a700.svg" alt="Apple Store" className="w-5 h-6" />
              <div className="flex flex-col">
                <span className="text-global-5 font-dm-sans text-xs leading-4">
                  Download on the
                </span>
                <span className="text-global-5 font-dm-sans font-medium text-base leading-5">
                  Apple Store
                </span>
              </div>
            </div>

            {/* Google Play */}
            <div className="bg-global-11 rounded-2xl p-4 flex items-center space-x-4">
              <img src="/images/img_symbol_white_a700_25x25.svg" alt="Google Play" className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-global-5 font-dm-sans text-xs leading-4">
                  Get in on
                </span>
                <span className="text-global-5 font-dm-sans font-medium text-base leading-5">
                  Google Play
                </span>
              </div>
            </div>

            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7">
              Connect With Us
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <img src="/images/img_item_link.svg" alt="Social Link" className="w-10 h-10" />
              <img src="/images/img_item_link_white_a700.svg" alt="Social Link" className="w-10 h-10" />
              <img src="/images/img_item_link_white_a700_40x40.svg" alt="Social Link" className="w-10 h-10" />
              <img src="/images/img_item_link_40x40.svg" alt="Social Link" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-global-1 border-t border-opacity-12 border-global-5">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-global-5 font-dm-sans text-base leading-5">
            © 2024 exemple.com. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="/terms-conditions" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
              Terms & Conditions
            </a>
            <div className="w-1 h-1 bg-global-10 rounded-full"></div>
            <a href="/privacy" className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors">
              Privacy Notice
            </a>
            <button className="bg-global-5 rounded-full p-2 hover:bg-blue-600 transition-colors">
              <img src="/images/img_link.svg" alt="Link" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;