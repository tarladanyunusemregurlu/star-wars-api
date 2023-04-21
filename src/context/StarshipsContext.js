import { createContext, useContext, useState } from 'react';
import starshipService from '../services/starships';

const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [starship, setStarship] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStarshipsData = async () => {
    try {
      const starshipsData = await starshipService.getStarships();
      setStarships(starshipsData.results);
      setLoading(false);
    } catch (error) {
      setError('Could not fetch starships data');
      setLoading(false);
    }
  };

  const getStarshipById = async (id) => {
    try {
      const starshipData = await starshipService.getStarshipById(id);
      setStarship(starshipData);
      setLoading(false);
    } catch (error) {
      setError(`Could not fetch starship with id ${id}`);
      setLoading(false);
    }
  };

  const getStarshipsSearchData = async (query) => {
    try {
      const starshipsData = await starshipService.getStarshipsSearchData(
        query.toLowerCase(),
      );
      setStarships(starshipsData);
      setLoading(false);
    } catch (error) {
      setError(`Could not fetch starships data keyword = ${query}`);
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const newPage = page + 1;
    setPage((prevState) => prevState + 1);
    try {
      if (newPage < 5) {
        setLoading(true);
        const starshipsData = await starshipService.loadMoreStarships(newPage);
        setStarships([...starships, ...starshipsData.results]);
        setLoading(false);
      }
    } catch (error) {
      setError('Could not load more starships data');
      setLoading(false);
    }
  };

  const value = {
    starships,
    starship,
    loading,
    error,
    query,
    page,
    setPage,
    setQuery,
    getStarshipsData,
    getStarshipById,
    getStarshipsSearchData,
    loadMore,
  };

  return (
    <StarshipContext.Provider value={value}>
      {children}
    </StarshipContext.Provider>
  );
};

export const useStarship = () => useContext(StarshipContext);
