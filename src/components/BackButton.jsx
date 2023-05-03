import React from 'react';
import styles from './BackButton.module.css';

import { useNavigate } from 'react-router-dom';
import { useStarship } from '../context/StarshipsContext';

function BackButton() {
  const { setError } = useStarship();

  const navigate = useNavigate();
  const historyBack = () => {
    setError(null);
    navigate('/');
  };

  return (
    <svg
      className={styles.icon}
      onClick={historyBack}
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 256 256'
    >
      <circle
        cx='45'
        cy='45'
        r='45'
        fill='#1B4157'
        strokeMiterlimit='10'
        strokeWidth='1'
        transform='matrix(2.81 0 0 2.81 0 0)'
      ></circle>
      <g fill='#AEC8DA' strokeMiterlimit='10' strokeWidth='1'>
        <path
          d='M1 46h88a1 1 0 000-2H1a1 1 0 100 2z'
          transform='matrix(2.12 0 0 2.12 32.807 32.807)'
        ></path>
        <path
          d='M14.943 59.943a.999.999 0 00.707-1.707L2.414 45 15.65 31.764a.999.999 0 10-1.414-1.414L.293 44.293a.999.999 0 000 1.414L14.236 59.65a.996.996 0 00.707.293z'
          transform='matrix(2.12 0 0 2.12 32.807 32.807)'
        ></path>
      </g>
    </svg>
  );
}

export default BackButton;
