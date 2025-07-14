import React from 'react';

const BookingForm = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 text-global-10">Book Your Housewarming</h2>
      <p className="mb-6 text-gray-700">Booking form coming soon!</p>
      <button
        className="bg-global-10 text-global-1 px-6 py-2 rounded-full font-semibold hover:bg-global-3 transition"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default BookingForm; 