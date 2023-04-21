import React from 'react';
import { useStarship } from '../context/StarshipsContext';
import styles from './LoadMore.module.css';

function LoadMore() {
  const { page, loading, loadMore } = useStarship();

  return (
    <button disabled={page === 4} onClick={loadMore}>
      {loading ? (
        <>
          <span className={styles.spinner}></span>Loading...
        </>
      ) : page === 4 ? (
        'Last Page'
      ) : (
        'Load More'
      )}
    </button>
  );
}

export default LoadMore;
