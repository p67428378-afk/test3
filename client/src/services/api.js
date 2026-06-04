import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getCreditCardOffers = () => {
  return api.get('/api/v1/credit-cards');
};

export const submitApplication = (applicationData) => {
  return api.post('/api/v1/applications', applicationData);
};
