import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/starships/';

const getStarships = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const getStarshipById = async (id) => {
  const response = await axios.get(`${BASE_URL}${id}/`);
  return response.data;
};

const getStarshipsSearchData = async (query) => {
  const response = await axios.get(`${BASE_URL}?search=${query}`);
  return response.data.results;
};

const loadMoreStarships = async (page) => {
  const response = await axios.get(`${BASE_URL}?page=${page}`);
  return response.data;
};

export default {
  getStarships,
  getStarshipById,
  getStarshipsSearchData,
  loadMoreStarships,
};
