import React, { useEffect } from 'react';
import StarshipListItem from './StarshipListItem';
import { useStarship } from '../context/StarshipsContext';
import styles from './StarshipsList.module.css';
import LoadMore from './LoadMore';

function StarshipsList() {
  const { query, starships, error, getStarshipsData } = useStarship();

  useEffect(() => {
    getStarshipsData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.cards}>
        {starships?.length > 0 &&
          starships.map((starship) => (
            <StarshipListItem
              key={starship.name}
              url={starship.url}
              name={starship.name}
              model={starship.model}
              hyperdrive_rating={starship.hyperdrive_rating}
            />
          ))}
      </div>
      {query !== null && starships.length === 0 && (
        <p>Could not fetch starships data</p>
      )}
      <div className={styles.loadMore}>
        <LoadMore />
      </div>
    </main>
  );
}

export default StarshipsList;
