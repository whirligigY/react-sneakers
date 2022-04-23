import styles from './Header.module.scss';

const Header = ({ openShoppingCart }) => {
  return (
    <header className={`${styles.header} d-flex justify-content-between p-5`}>
      <div className="d-flex">
        <img src="/img/logo.png" width="40" height="40" alt="logo" />
        <div className="ms-3">
          <h3 className="mb-0">React Sneakers</h3>
          <p className="m-0">The Best sneakers shop</p>
        </div>
      </div>

      <ul className="d-flex align-items-center">
        <li className={`${styles.cursorPoint} me-4`} onClick={openShoppingCart}>
          <img
            className="me-2"
            src="/img/basket.svg"
            width="18"
            height="18"
            alt="basket"
          />
          <span>1 005$</span>
        </li>
        <li className="me-4">
          <img src="/img/heart.svg" width="20" height="20" alt="like" />
        </li>
        <li>
          <img src="/img/user.svg" width="20" height="20" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
