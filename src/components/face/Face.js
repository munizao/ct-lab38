import React from 'react';
import styles from './Face.css';
import { useSelector } from 'react-redux';
import { getFace } from '../../selectors/get-face';

const Face = () => {
  const emoji = useSelector(getFace);
  return <p className={styles.Face}>{emoji}</p>;
};

export default Face;
