import React, { useState } from 'react';

const Enquiry = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(form.phone)) errs.phone = 'Enter 10 digit phone';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="text-center p-6">
        <div className="text-2xl text-emerald-600 font-bold mb-2">Thank you!</div>
        <div className="text-gray-700 mb-4">We have received your enquiry. We'll get back to you soon.</div>
        {onClose && (
          <button
            className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 font-semibold"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          className={`border rounded px-3 py-2 w-full ${errors.name ? 'border-red-500' : ''}`}
          value={form.name}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
      </div>
      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          className={`border rounded px-3 py-2 w-full ${errors.email ? 'border-red-500' : ''}`}
          value={form.email}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
      </div>
      <div>
        <label className="block font-semibold mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          className={`border rounded px-3 py-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
          value={form.phone}
          onChange={handleChange}
          autoComplete="off"
          maxLength={10}
        />
        {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
      </div>
      <div>
        <label className="block font-semibold mb-1">Message</label>
        <textarea
          name="message"
          className={`border rounded px-3 py-2 w-full min-h-[80px] ${errors.message ? 'border-red-500' : ''}`}
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
      </div>
      <div className="flex justify-between items-center mt-6">
        {onClose && (
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-semibold"
            onClick={onClose}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 font-bold disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Enquire Now'}
        </button>
      </div>
    </form>
  );
};

export default Enquiry;
