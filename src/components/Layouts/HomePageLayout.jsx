import React from 'react';
import Header from '../Header';
import StarshipsList from '../StarshipsList';
import styles from './HomePageLayout.module.css';
const HomePageLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <StarshipsList />
    </div>
  );
};

export default HomePageLayout;
