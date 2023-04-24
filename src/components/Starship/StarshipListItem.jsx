import React from 'react';
import { Link } from 'react-router-dom';
import starshipImg from '../assets/star-wars-img2.jpg';
import styles from './StarshipListItem.module.css';

function StarshipListItem(props) {
  function getStarshipIdFromUrl(url) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  }
  return (
    <div className={styles.card}>
      <Link to={`/starship/${getStarshipIdFromUrl(props.url)}`}>
        <img src={starshipImg} alt='Starship' className={styles.image} />
      </Link>
      <div className={styles.content}>
        <Link to={`/starship/${getStarshipIdFromUrl(props.url)}`}>
          <h3 className={styles.title}>{props.name}</h3>
        </Link>
        <p>
          <span className={styles.textBold}>Model:</span> {props.model}
        </p>
        <p>
          <span className={styles.textBold}>Hyperdrive Rating:</span>{' '}
          {props.hyperdrive_rating}
        </p>
      </div>
    </div>
  );
}

export default StarshipListItem;
