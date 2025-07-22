import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-global-1 w-full">
      {/* Newsletter Section */}
      <div className="bg-global-1 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full">
            <img src="/images/logo.png" alt="Dratha Logo" className="h-16 w-auto shadow-lg mb-4 lg:mb-0" />
            <div className="flex flex-col items-start">
              <h2 className="text-global-5 font-dm-sans font-medium text-3xl leading-10 mb-4">
                Join Dratha
              </h2>
              <p className="text-global-5 font-dm-sans text-base leading-5">
                Get Event Tips, Exclusive Offers & More! Subscribe to receive package updates,
                planning tips, and special deals for your next big celebration.
              </p>
            </div>
          </div>
          <div className="bg-footer-2 rounded-full flex items-center p-4 w-full max-w-lg">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent text-global-5 font-dm-sans text-base flex-1 outline-none px-4"
            />
            <button className="bg-global-5 text-global-3 font-dm-sans font-medium text-base px-6 py-3 rounded-full border border-global-3 hover:bg-red-600 transition-colors">
              Enquire
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
              <a
                href="/about"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                About Us
              </a>
              <a
                href="/blog"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Blog
              </a>
              <a
                href="/services"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Services
              </a>
              <a
                href="/faqs"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                FAQs
              </a>
              <a
                href="/terms"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Terms
              </a>
              <a
                href="/contact"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
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
              <a
                href="/contact"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/help"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Help center
              </a>
              <a
                href="/chat"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Live chat
              </a>
              <a
                href="/how-it-works"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Our Brands */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7 capitalize">
              Our Events
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="/toyota"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Wedding
              </a>
              <a
                href="/porsche"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Birthday
              </a>
              <a
                href="/audi"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                House Waming
              </a>
             
            </div>
          </div>

          {/* Vehicles Type */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7 capitalize">
              Luxury Events
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="/sedan"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Destination Weddings
              </a>
              <a
                href="/hatchback"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                Birthday Celebration
              </a>
              <a
                href="/suv"
                className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
              >
                House Warming 
              </a>
             
            </div>
          </div>

          {/* Mobile App & Social */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-global-5 font-dm-sans font-medium text-xl leading-7">
              Connect Us
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <img src="/images/img_item_link.svg" alt="Social Link" className="w-10 h-10" />
              <img
                src="/images/img_item_link_white_a700.svg"
                alt="Social Link"
                className="w-10 h-10"
              />
              <img
                src="/images/img_item_link_white_a700_40x40.svg"
                alt="Social Link"
                className="w-10 h-10"
              />
              <img src="/images/img_item_link_40x40.svg" alt="Social Link" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-global-1 border-t border-opacity-12 border-global-5">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-global-5 font-dm-sans text-base leading-5">
            © 2024 Dratha. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="/terms-conditions"
              className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </a>
            <div className="w-1 h-1 bg-global-10 rounded-full"></div>
            <a
              href="/privacy"
              className="text-global-5 font-dm-sans text-base leading-5 hover:text-gray-300 transition-colors"
            >
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
