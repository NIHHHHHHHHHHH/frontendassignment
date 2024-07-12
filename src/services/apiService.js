import axios from 'axios';

// Replace with your actual Mockora base URL
const mockoraBaseURL = 'https://mockora.com/api';

const apiService = axios.create({
  baseURL: mockoraBaseURL,
});

export const fetchReferrals = async () => {
  try {
    const response = await apiService.get('https://api.mockaroo.com/api/46fb8870?count=20&key=d94eb7c0'); // Adjust path according to your Mockora setup
    return response.data;
  } catch (error) {
    console.error('Error fetching referrals:', error);
    throw error;
  }
};

export const fetchServices = async () => {
  try {
    const response = await apiService.get('https://api.mockaroo.com/api/872c24b0?count=20&key=d94eb7c0'); // Adjust path according to your Mockora setup
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};