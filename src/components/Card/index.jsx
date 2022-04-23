import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ id, title, price, imageUrl, onFavorite, onPlus }) => {
  const [isAdded, setAdded] = useState(false);
  const addCardToBasket = (e, id) => {
    setAdded((prev) => !prev);
    onPlus(id);
  };
  return (
    <div className={`${styles.card} d-flex flex-column  align-items-center`}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/like-color.svg" alt="like" />
      </div>

      <img width="133" height="112" src={imageUrl} alt="sneakers"></img>
      <p className={styles.cardText}>{title}</p>
      <div className={`${styles.cardInfo} d-flex justify-content-between`}>
        <div className="d-flex flex-column">
          <span className={styles.cardSubtext}>price:</span>
          <b>{`${price} $`}</b>
        </div>
        <button
          className={`${styles.btnAdd} p-0 d-flex justify-content-center align-items-center`}
          onClick={(e) => addCardToBasket(e, id)}
        >
          <img
            width={`${isAdded ? 32 : 11}`}
            height={`${isAdded ? 32 : 11}`}
            src={`/img/${isAdded ? 'checked-' : ''}plus.svg`}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
