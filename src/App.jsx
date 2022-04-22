import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content p-5">
        <div className="d-flex justify-content-between">
          <h1>Sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="plus" />
            <input placeholder="Search..." type="search" />
          </div>
        </div>
        <div className="card-container d-flex justify-content-left">
          <Card />
          <div className="card d-flex flex-column  align-items-center">
            <div className="card-like">
              <img src="/img/like.svg" />
            </div>

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
