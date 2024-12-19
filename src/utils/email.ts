import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { RSVPFormData } from '../types/rsvp';
import { emailConfig } from '../config/emailjs';

export const sendEmail = async (formData: RSVPFormData): Promise<void> => {
  try {
    const templateParams = {
      to_email: emailConfig.toEmail,
      from_name: formData.name,
      from_email: formData.email,
      attending: formData.attending,
      guests: formData.guests,
      message: formData.message,
    };

    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );

    toast.success('RSVP sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    toast.error('Failed to send RSVP. Please try again.');
    throw error;
  }
};