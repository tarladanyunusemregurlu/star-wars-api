import React from 'react';
import { useStarship } from '../context/StarshipsContext';
import styles from './LoadMore.module.css';

function LoadMore() {
  const { next, loading, loadMore } = useStarship();

  return (
    <button disabled={!next} onClick={loadMore}>
      {loading ? (
        <>
          <span className={styles.spinner}></span>Loading...
        </>
      ) : !next ? (
        'Last Page'
      ) : (
        'Load More'
      )}
    </button>
  );
}

export default LoadMore;
