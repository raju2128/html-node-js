import { RSVPFormData } from '../types/rsvp';
import { sendEmail } from './email';

export const handleRSVPSubmission = async (formData: RSVPFormData): Promise<void> => {
  try {
    await sendEmail(formData);
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    throw error;
  }
};