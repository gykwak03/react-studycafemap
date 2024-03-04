import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = ({ cafes, list, changeFavorite }) => {
  console.log('메인페이지 렌더링')
  return (
    <div id="MainPage" className="MainPage">
      <h1 className="Logo">LOGO</h1>
      <div className="whatAboutThisCafe">이런 카페는 어떠세요?</div>
      {cafes.map((cafe, index) => (
        <div key={index}>
          <div className="grayLine"></div>
          <Link
            to={`/cafe/${encodeURIComponent(cafe.name)}`}
            className="cafeLink"
          >
            <img className="picture" src={cafe.imageUrl} alt={cafe.name} />
            <div className="cafeName">{cafe.name}</div>
            <div className="americanoCost">{"아메리카노 " + cafe.minPrice}</div>
            <div className="characteristic">{cafe.tags.join(", ")}</div>
          </Link>
          {list.find((item) => item.name === cafe.name)?.favorite ? (
            <img
              className="isFavorite"
              src="img/like.png"
              style={{ cursor: "pointer" }}
              alt="favorite"
              onClick={() => changeFavorite(cafe.name)}
            />
          ) : (
            <img
              className="isFavorite"
              src="img/dislike.png"
              style={{ cursor: "pointer" }}
              alt="favorite"
              onClick={() => changeFavorite(cafe.name)}
            />
          )}
        </div>
      ))}
      <div className="grayLine"></div>
    </div>
  );
};

export default MainPage;
