import { useState } from "react";
import "./App.css";
import cafes from "./cafes.json";

const CafeItem = ({ test }) => {
  return <div>{test}</div>;
};

function App() {
  const Logo = "LOGO";
  const recommend = "이런 카페는 어떠세요?";

  const [list, setList] = useState(
    cafes.data.map((cafe) => ({
      name: cafe.name,
      favorite: cafe.favorites || false,
    }))
  );
  const changeFavorite = (name, favorite) => {
    setList((prevList) => {
      return prevList.map((item) => {
        if (item.name === name) {
          return { ...item, favorite: !item.favorite };
        }

        return item;
      });
    });
  };

  console.log(list);

  return (
    <div id="app" className="App">
      <h1 className="Logo">{Logo}</h1>
      <div className="whatAboutThisCafe">{recommend}</div>

      {/* <CafeItem test={"aaaaa"}></CafeItem> */}
      {cafes.data.map((cafe, index) => (
        <div key={index}>
          <div className="grayLine"></div>
          <img className="picture" src={cafe.imageUrl} />
          <div className="cafeName">{cafe.name}</div>
          <div className="americanoCost">{"아메리카노 " + cafe.minPrice}</div>
          <div className="characteristic">{cafe.tags.join(", ")}</div>
          {list.find((item) => item.name === cafe.name)?.favorite ? (
            <img
              className="isFavorite"
              src="img/like.png"
              style={{ cursor: "pointer" }}
              onClick={() => changeFavorite(cafe.name)}
            />
          ) : (
            <img
              className="isFavorite"
              src="img/dislike.png"
              style={{ cursor: "pointer" }}
              onClick={() => changeFavorite(cafe.name)}
            />
          )}
        </div>
      ))}

      <div className="grayLine"></div>
    </div>
  );
}

export default App;

/*
App.js
import React, { useState } from 'react';
import CafeList from './CafeList';
import './App.css';

function App() {
  const [cafes, setCafes] = useState([
    { id: 1, name: '스타벅스 경희대학교국제캠퍼스', price: '4,900', walkingTime: '12', hasOutlet: '많음', crowded: '많음', vibe: '시끄러운', isFavorite: false },
    { id: 2, name: '카페칸나', price: '5,000', walkingTime: '12', hasOutlet: '많음', crowded: '보통', vibe: '조용한', isFavorite: false },
    { id: 3, name: '스타벅스 경희대학교국제캠퍼스', price: '4,900', walkingTime: '도보 약 12', hasOutlet: '많음', crowded: '많음', vibe: '시끄러운', isFavorite: false }
  ]);

  const toggleFavorite = (id) => {
    const updatedCafes = cafes.map(cafe => {
      if (cafe.id === id) {
        return { ...cafe, isFavorite: !cafe.isFavorite };
      }
      return cafe;
    });
    setCafes(updatedCafes);
  };

  return (
    <div className="App">
      <header>
        <h1>LOGO</h1>
      </header>
      <main>
        <h3>이런 카페는 어떠세요?</h3>
        <CafeList cafes={cafes} onToggleFavorite={toggleFavorite} />
      </main>
    </div>
  );
}

export default App;
*/

/*
import React from 'react';
import './CafeList.css';

const CafeList = ({ cafes, onToggleFavorite }) => {
  return (
    <div>
      {cafes.map(cafe => (
        <div key={cafe.id} className="cafe">
          <h3>{cafe.name}</h3>
          <div className="favorite-btn">
            <button className={`star-btn ${cafe.isFavorite ? 'active' : ''}`} onClick={() => onToggleFavorite(cafe.id)}>
              {cafe.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
          <p>아메리카노 <b>{cafe.price}</b>원</p>
          <p>도보 약 {cafe.walkingTime}분, 콘센트 {cafe.hasOutlet}, 이용 고객 {cafe.crowded}, {cafe.vibe} 분위기</p>
        </div>
      ))}
    </div>
  );
};

export default CafeList
*/
