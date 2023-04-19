import { createContext, useContext, useState } from 'react';
import starshipService from '../services/starships';

const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [starship, setStarship] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStarshipsData = async () => {
    try {
      const starshipsData = await starshipService.getStarships();
      setStarships(starshipsData);
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

  const value = {
    starships,
    starship,
    loading,
    error,
    getStarshipsData,
    getStarshipById,
  };

  return (
    <StarshipContext.Provider value={value}>
      {children}
    </StarshipContext.Provider>
  );
};

export const useStarship = () => useContext(StarshipContext);
