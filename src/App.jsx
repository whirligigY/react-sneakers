import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cardOpened, setCardOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  async function getItems() {
    const response = await axios.get(
      'https://6263009f005a66e1e3b0d874.mockapi.io/items',
    );
    setItems(response.data);
    const responseCart = await axios.get(
      'https://6263009f005a66e1e3b0d874.mockapi.io/cart',
    );
    setCartItems(responseCart.data);
  }
  useEffect(() => {
    getItems();
  }, []);

  const onRemoveItem = async (id) => {
    console.log('id', id);
    await axios.delete(
      `https://6263009f005a66e1e3b0d874.mockapi.io/cart/${id}`,
    );
    setCartItems((prev) => prev.filter((el) => el.id !== id));
  };

  const onAddToCard = async (id) => {
    const filtered = items.find((el) => el.id === id);
    const removed = cartItems.find((el) => el.id === id);
    if (filtered && !removed) {
      await axios.post(
        'https://6263009f005a66e1e3b0d874.mockapi.io/cart',
        filtered,
      );
      setCartItems((prev) => [...prev, filtered]);
    } else if (removed) {
      setCartItems((prev) => prev.filter((el) => el.id !== removed.id));
    }
  };

  const onChangeSearchInput = (e) => setSearchValue(e.target.value);
  const onClearSearch = () => setSearchValue('');

  return (
    <div className="wrapper">
      {cardOpened && (
        <Drawer
          cartItems={cartItems}
          onRemove={onRemoveItem}
          closeShoppingCart={() => setCardOpened(false)}
        />
      )}
      <Header openShoppingCart={() => setCardOpened(true)} />
      <div className="content p-5">
        <div className="d-flex justify-content-between">
          <h1>
            {searchValue.length > 0
              ? `Search by query ${searchValue}`
              : 'Sneakers'}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="plus" />
            <input
              placeholder="Search..."
              type="search"
              value={searchValue}
              onChange={onChangeSearchInput}
            />
            {searchValue && (
              <img
                className="search-remover"
                src="/img/plus.svg"
                width="12"
                height="12"
                onClick={onClearSearch}
                alt="remove"
              />
            )}
          </div>
        </div>
        <div className="card-container d-flex justify-content-left flex-wrap">
          {items.length > 0 ? (
            items
              .filter((el) =>
                el.title.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .map((card, index) => {
                return (
                  <Card
                    key={`crd_${index}`}
                    {...card}
                    onFavorite={() => {}}
                    onPlus={onAddToCard}
                  />
                );
              })
          ) : (
            <p>Loading...</p>
          )}
          {/* <div className="card d-flex flex-column  align-items-center">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
