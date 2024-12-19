import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the RSVP submission here
    console.log('RSVP submitted:', formData);
    alert('Thank you for your RSVP!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 bg-white/80 backdrop-blur-sm p-2"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 bg-white/80 backdrop-blur-sm p-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="attending" className="block text-sm font-medium text-gray-700">
          Will you attend?
        </label>
        <select
          id="attending"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 bg-white/80 backdrop-blur-sm p-2"
          value={formData.attending}
          onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
        >
          <option value="yes">Yes, I will attend</option>
          <option value="no">Sorry, I cannot attend</option>
        </select>
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
          Number of Guests
        </label>
        <select
          id="guests"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 bg-white/80 backdrop-blur-sm p-2"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        >
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 bg-white/80 backdrop-blur-sm p-2"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
      >
        <Send className="w-4 h-4 mr-2" />
        Send RSVP
      </button>
    </form>
  );
};