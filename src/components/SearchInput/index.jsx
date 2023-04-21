import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useStarship } from '../../context/StarshipsContext';
const SearchInput = () => {
  const [lastQuery, setLastQuery] = useState('');
  const { query, setQuery, setPage, getStarshipsData, getStarshipsSearchData } =
    useStarship();

  const searchStarship = () => {
    if (query !== lastQuery && query !== null && query.trim() !== '') {
      getStarshipsSearchData(query);
      setLastQuery(query);
    }
  };

  useEffect(() => {
    if (query === '') {
      getStarshipsData();
      setPage(1);
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <label htmlFor='search'>Name/Model</label>
      <input
        id='search'
        placeholder='Name / Model'
        className={styles.search}
        type='text'
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchStarship} className={styles.button}>
        Filter
      </button>
    </div>
  );
};

export default SearchInput;
