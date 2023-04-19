import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/starships/';

const getStarships = async () => {
  const response = await axios.get(BASE_URL);
  return response.data.results;
};

const getStarshipById = async (id) => {
  const response = await axios.get(`${BASE_URL}${id}/`);
  return response.data;
};

export default {
  getStarships,
  getStarshipById,
};
