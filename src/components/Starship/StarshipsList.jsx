import React, { useEffect } from 'react';
import StarshipListItem from './StarshipListItem';
import styles from './StarshipsList.module.css';
import { useStarship } from '../../context/StarshipsContext';
import LoadMore from '../LoadMore';

function StarshipsList() {
  const {
    starships,
    query,
    error,
    next,
    getStarshipsData,
    getStarshipsSearchData,
  } = useStarship();

  useEffect(() => {
    if (query !== null && query !== '') {
      getStarshipsSearchData(query);
    } else {
      getStarshipsData();
    }
  }, []);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
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
        <p className={styles.noMatchData}>Could not fetch starships data!</p>
      )}
      {!!next && (
        <div className={styles.loadMore}>
          <LoadMore />
        </div>
      )}
    </main>
  );
}

export default StarshipsList;
