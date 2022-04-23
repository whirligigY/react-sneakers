import styles from './Drawer.module.scss';

const Drawer = ({ cartItems, closeShoppingCart, onRemove }) => {
  console.log({ cartItems });
  return (
    <div className={styles.overlay}>
      <div className={`${styles.drawer} d-flex flex-column`}>
        <h2 className="d-flex justify-content-between align-items-center">
          Shopping cart
          <img
            className={styles.removeBtn}
            src="/img/plus.svg"
            alt="sneakers"
            width="15"
            height="15"
            onClick={closeShoppingCart}
          />
        </h2>
        <div className={`${styles.cartList} d-flex flex-column mt-4`}>
          {cartItems.length > 0 &&
            cartItems.map((item, index) => {
              return (
                <div
                  key={`crt_${index}`}
                  className={`${styles.cartItem} d-flex align-items-center`}
                >
                  <img
                    src={item.imageUrl}
                    alt="sneakers"
                    width="70"
                    height="70"
                  />
                  <div className={`${styles.cartItemText} d-flex flex-column`}>
                    <p className={`${styles.cardText} mb-2`}>{item.title}</p>
                    <b>{`${item.price} $`}</b>
                  </div>
                  <img
                    className={styles.removeBtn}
                    src="/img/btn-remove.svg"
                    alt="sneakers"
                    width="32"
                    height="32"
                    onClick={() => onRemove(item.id)}
                  />
                </div>
              );
            })}
          {/* <div className="cartItem d-flex align-items-center">
            <img
              src="/img/sneakers/1.jpg"
              alt="sneakers"
              width="70"
              height="70"
            />
            <div className="cartItemText d-flex flex-column">
              <p className="card-text mb-2">Men's sneakers Nike Air Max 270</p>
              <b>110 $</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="sneakers"
              width="32"
              height="32"
            />
          </div>
          <div className="cartItem d-flex align-items-center">
            <img
              src="/img/sneakers/1.jpg"
              alt="sneakers"
              width="70"
              height="70"
            />
            <div className="cartItemText d-flex flex-column">
              <p className="card-text mb-2">Men's sneakers Nike Air Max 270</p>
              <b>110 $</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="sneakers"
              width="32"
              height="32"
            />
          </div> */}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex align-items-end mb-3">
              <span className="pe-2">Total</span>
              <div className="me-2"></div>
              <b>220 $</b>
            </li>
            <li className="d-flex align-items-end">
              <span className="pe-2">Tax 5%</span>
              <div className="me-2"></div>
              <b>15 $</b>
            </li>
          </ul>
          <button className="greenBtn">
            Place an order
            <img src="/img/arrow.svg" width="14" height="12" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
