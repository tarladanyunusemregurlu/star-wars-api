import React from 'react';
import Header from '../Header';
import styles from './HomePageLayout.module.css';
import StarshipsList from '../Starship/StarshipsList';
const HomePageLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <StarshipsList />
    </div>
  );
};

export default HomePageLayout;
