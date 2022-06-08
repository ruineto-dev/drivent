import api from './api';

export async function getHotelsCapacity(token) {
  const response = await api.get('/accommodations', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    
  return response.data;
}

export async function getHotels(token) {
  const response = await api.get('/accommodations/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    
  return response.data;
}
