const Drawer = () => {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-content-between align-items-center">
          Shopping cart
          <img
            className="removeBtn"
            src="/img/plus.svg"
            alt="sneakers"
            width="15"
            height="15"
          />
        </h2>
        <div className="cartList d-flex flex-column mt-4">
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
          </div>
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
