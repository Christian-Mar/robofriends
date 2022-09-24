import React from 'react';
import styles from './Card.module.css';

const Card = ({ id, name, email }) => {
  return (
    <div className={styles.container}>
      <img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
      <div className={styles.container_text}>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
