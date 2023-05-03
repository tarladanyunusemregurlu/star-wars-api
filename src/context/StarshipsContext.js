import { createContext, useContext, useState } from 'react';
import starshipService from '../services/starships';

const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [starship, setStarship] = useState([]);
  const [next, setNext] = useState('');
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStarshipsData = async () => {
    try {
      const starshipsData = await starshipService.getStarships();
      setNext(starshipsData.next);
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
      setNext(starshipsData.next);
      setStarships(starshipsData.results);
      setLoading(false);
    } catch (error) {
      setError(`Could not fetch starships data keyword = ${query}`);
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      if (next) {
        setLoading(true);
        const starshipsData = await starshipService.loadMoreStarships(next);
        setNext(starshipsData.next);
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
    next,
    setError,
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
