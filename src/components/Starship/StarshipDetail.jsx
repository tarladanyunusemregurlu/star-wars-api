import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import starshipImg from '../assets/star-wars-img2.jpg';
import styles from './StarshipDetail.module.css';
import BackButton from '../BackButton';
import { useStarship } from '../../context/StarshipsContext';
function StarshipDetail() {
  const { id } = useParams();
  const { starship, loading, error, getStarshipById } = useStarship();

  useEffect(() => {
    getStarshipById(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.body}>
      <BackButton />
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>{starship?.name}</h1>
            <span className={styles.border}></span>
          </div>
          <img src={starshipImg} alt='Starship' className={styles.image} />
          <div className={styles.content}>
            <p>
              <span className={styles.textBold}>Model:</span> {starship?.model}
            </p>
            <p>
              <span className={styles.textBold}>Hyperdrive Rating:</span>{' '}
              {starship?.hyperdrive_rating}
            </p>
            <p>
              <span className={styles.textBold}>Passengers:</span>{' '}
              {starship?.passengers}
            </p>
            <p>
              <span className={styles.textBold}>Max Atmospherin Speed:</span>{' '}
              {starship?.max_atmosphering_speed}
            </p>
            <p>
              <span className={styles.textBold}>Manufacturer:</span>{' '}
              {starship?.manufacturer}
            </p>
            <p>
              <span className={styles.textBold}>Crew:</span> {starship?.crew}
            </p>
            <p>
              <span className={styles.textBold}>Cargo Capacity:</span>{' '}
              {starship?.cargo_capacity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarshipDetail;
