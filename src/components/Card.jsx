const Card = () => {
  return (
    <div className="card d-flex flex-column  align-items-center">
      <img className="card-like" src="/img/like-color.svg" />
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
  );
};

export default Card;
