import { useState } from 'react';
import { RSVPFormData } from '../types/rsvp';
import { handleRSVPSubmission } from '../utils/rsvp';

export const useRSVPForm = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: ''
  });

  const updateField = (field: keyof RSVPFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRSVPSubmission(formData);
  };

  return {
    formData,
    updateField,
    handleSubmit
  };
};