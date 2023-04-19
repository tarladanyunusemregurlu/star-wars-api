import React, { useEffect } from 'react';
import StarshipListItem from './StarshipListItem';
import { useStarship } from '../context/StarshipsContext';
import styles from './StarshipList.module.css';

function StarshipsList() {
  const { starships, loading, error, getStarshipsData } = useStarship();

  useEffect(() => {
    getStarshipsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <main className={styles.container}>
      <div className={styles.cards}>
        {starships.map((starship) => (
          <StarshipListItem
            key={starship.name}
            url={starship.url}
            name={starship.name}
            model={starship.model}
            hyperdrive_rating={starship.hyperdrive_rating}
          />
        ))}
      </div>
    </main>
  );
}

export default StarshipsList;
