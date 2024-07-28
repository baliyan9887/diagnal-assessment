import axios from 'axios';

const BASE_URL = 'https://test.create.diagnal.com/data';

export const fetchPage = async (page: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/page${page}.json`);
    return response.data.content;
  } catch (error) {
    console.error('API error:', error);
    return [];
  }
};
