import React, { useState } from 'react';
import BookingForm from "../common/BookingForm.jsx"

const BookNowButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-global-9 text-global-3 px-8 py-3 rounded-full shadow-lg text-lg font-extrabold tracking-wide transition transform hover:scale-105 hover:bg-global-10 focus:outline-none focus:ring-2 focus:ring-global-3"
        onClick={() => setShowModal(true)}
      >
        Book Now
      </button>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <BookingForm onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowButton; 