function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-content-between p-5">
        <div className="d-flex">
          <img src="/img/logo.png" width="40" height="40" alt="logo"/>
          <div className="headerInfo ms-3">
            <h3 className="mb-0">React Sneakers</h3>
            <p className="m-0">The Best sneakers shop</p>
          </div>
        </div>

        <ul className="d-flex align-items-center">
          <li className="me-4">
            <img
              className="me-2"
              src="/img/basket.svg"
              width="18"
              height="18"
              alt="basket"
            />
            <span>1 005$</span>
          </li>
          <li>
            <img src="/img/user.svg" width="20" height="20" alt="user"/>
          </li>
        </ul>
      </header>
      <div className="content p-5">
        <div className="d-flex justify-content-between">
          <h1>Sneakers</h1>
          <div className="search-block">
            <img src="/img/plus.svg" alt="plus"/>
            <input placeholder="Search..." type="search"/>
          </div>
          </div>
        <div className="card-container d-flex justify-content-left">
          <div className="card d-flex flex-column  align-items-center">
            <img
              width="133"
              height="112"
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            ></img>
            <p className="card-text">Men's sneakers Nike Blazer Mid Suede</p>
            <div className="card-info d-flex justify-content-between">
              <div className="d-flex flex-column">
                <span className="card-subtext">price:</span>
                <b>110 $</b>
              </div>
              <button className="btn-add p-0 d-flex justify-content-center align-items-center">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column  align-items-center">
            <img
              width="133"
              height="112"
              src="/img/sneakers/2.jpg"
              alt="sneakers"
            ></img>
            <p className="card-text">Men's sneakers Nike Air Max 270</p>
            <div className="card-info d-flex justify-content-between">
              <div className="d-flex flex-column">
                <span className="card-subtext">price:</span>
                <b>112 $</b>
              </div>
              <button className="btn-add p-0 d-flex justify-content-center align-items-center">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column  align-items-center">
            <img
              width="133"
              height="112"
              src="/img/sneakers/3.jpg"
              alt="sneakers"
            ></img>
            <p className="card-text">Men's sneakers Nike Blazer Mid Suede</p>
            <div className="card-info d-flex justify-content-between">
              <div className="d-flex flex-column">
                <span className="card-subtext">price:</span>
                <b>111 $</b>
              </div>
              <button className="btn-add p-0 d-flex justify-content-center align-items-center">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column  align-items-center">
            <img
              width="133"
              height="112"
              src="/img/sneakers/4.jpg"
              alt="sneakers"
            ></img>
            <p className="card-text">Men's sneakers Nike Blazer Mid Suede</p>
            <div className="card-info d-flex justify-content-between">
              <div className="d-flex flex-column">
                <span className="card-subtext">price:</span>
                <b>110 $</b>
              </div>
              <button className="btn-add p-0 d-flex justify-content-center align-items-center">
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
