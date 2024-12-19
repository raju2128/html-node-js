export interface RSVPFormData {
  name: string;
  email: string;
  attending: 'yes' | 'no';
  guests: string;
  message: string;
}