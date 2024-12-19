import React from 'react';
import { Send } from 'lucide-react';
import { FormField } from './FormField';
import { useRSVPForm } from '../../hooks/useRSVPForm';

export const RSVPForm: React.FC = () => {
  const { formData, updateField, handleSubmit } = useRSVPForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <FormField
        label="Full Name"
        id="name"
        required
        value={formData.name}
        onChange={(value) => updateField('name', value)}
      />

      <FormField
        label="Email"
        id="email"
        type="email"
        required
        value={formData.email}
        onChange={(value) => updateField('email', value)}
      />

      <FormField
        label="Will you attend?"
        id="attending"
        type="select"
        value={formData.attending}
        onChange={(value) => updateField('attending', value)}
        options={[
          { value: 'yes', label: 'Yes, I will attend' },
          { value: 'no', label: 'Sorry, I cannot attend' }
        ]}
      />

      <FormField
        label="Number of Guests"
        id="guests"
        type="select"
        value={formData.guests}
        onChange={(value) => updateField('guests', value)}
        options={[1, 2, 3, 4].map(num => ({
          value: num.toString(),
          label: num.toString()
        }))}
      />

      <FormField
        label="Message (Optional)"
        id="message"
        type="textarea"
        value={formData.message}
        onChange={(value) => updateField('message', value)}
        rows={4}
      />

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