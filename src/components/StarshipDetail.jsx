import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStarship } from '../context/StarshipsContext';

function StarshipDetail() {
  const { id } = useParams();
  const { starship, loading, error, getStarshipById } = useStarship();

  useEffect(() => {
    getStarshipById(id);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
    </div>
  );
}

export default StarshipDetail;
