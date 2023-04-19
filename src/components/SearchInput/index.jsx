import React from 'react'
import styles from './index.module.css';

const SearchInput = () => {
  return (
    <div className={styles.container}>
        <span>Name/Model</span>
        <input placeholder='Name / Model' className={styles.search} type="text" />
        <button className={styles.button} >Filter</button>
    </div>
  )
}

export default SearchInput