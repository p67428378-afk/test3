import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getPolicy = (policyId) => {
  return apiClient.get(`/policies/${policyId}`);
};

export const updatePolicy = (policyId, data) => {
  return apiClient.put(`/policies/${policyId}`, data);
};

export const cancelPolicy = (policyId) => {
  return apiClient.post(`/policies/${policyId}/cancel`);
};
