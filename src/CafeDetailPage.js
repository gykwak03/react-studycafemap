// CafeDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CafeDetailPage.css";
import styles from "./ahyeon.module.css";
import WriteReview from "./WriteReview";
import { logDOM } from "@testing-library/react";

const CafeDetailPage = ({ cafes, list, changeFavorite }) => {
  const [showReview, setShowReview] = useState(false);
  const { name } = useParams();
  const cafe = cafes.find((cafe) => cafe.name === name);
  const isFavorite = list.find((item) => item.name === cafe.name)?.favorite;
  const toggleFavorite = () => {
    changeFavorite(cafe.name);
  };
  const [userComment, setUserComment] = useState("");
  const [userTags, setUserTags] = useState([]);

  const [userReview, setUserReview] = useState([]);

  const tags = ["자리적음", "자리많음", "콘센트적음", "콘센트많음", "조용함"];

  useEffect(() => {
    const userData = localStorage.getItem(name);
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      // setUserComment(parsedUserData.userComment);
      // setUserTags([...parsedUserData.userTags]);
      setUserReview(...parsedUserData.userReview);
    }
  }, [name]);

  let localData = JSON.parse(localStorage.getItem(name));
  localData = localData || {}; // null일 경우 빈 객체로 초기화

  if (!cafe) {
    return <p>카페를 찾을 수 없습니다!</p>;
  }

  return (
    <main>
      <h1 className="detail-Logo">LOGO</h1>
      <img
        className="detail-cafe-picture"
        src={cafe.imageUrl}
        alt={cafe.name}
      />
      <div className="detail-cafeName"></div>
      <h2 className="review">리뷰</h2>
      <div className="detail-cafeName">{cafe.name}</div>
      {isFavorite ? (
        <img
          className="detail-isFavorite"
          src="/img/like.png"
          style={{ cursor: "pointer" }}
          alt="favorite"
          onClick={toggleFavorite}
        />
      ) : (
        <img
          className="detail-isFavorite"
          src="/img/dislike.png"
          style={{ cursor: "pointer" }}
          alt="favorite"
          onClick={toggleFavorite}
        />
      )}
      <div className="detail-americanoCost">
        {"아메리카노 " + cafe.minPrice + "원"}
      </div>
      <div className="detail-characteristic">{cafe.operationHours}</div>
      <div className="detail-tags">
        {cafe.tags.map((tag, index) => (
          <div key={index} className="detail-tag-container">
            <div className="detail-tag"> {tag} </div>
          </div>
        ))}
      </div>

      {localData.userReview
        ? localData.userReview.map((item, index) => {
            console.log(item.userReview);
            let realReview = `${item.userReview[0]}`;
            let realTags = item.userReview[1];
            let realDate = item.userReview[2];
            return (
              <div>
                <div>
                  <div className="profileName">익명의 누군가</div>
                  <div className="profileImage"></div>
                  <div className="realComment">{realReview}</div>
                  <div className="date">{realDate}</div>

                  {realTags.map(
                    (realTag, index) =>
                      realTag === true && (
                        <div className="realTag" key={index}>
                          {tags[index]}
                        </div>
                      )
                  )}

                  <div className="grayLine"></div>
                </div>
              </div>
            );
          })
        : null}

      <button
        className={styles.writeComment}
        onClick={() => setShowReview(true)}
      >
        <img src="/img/frame.png" alt="리뷰 작성"></img>
      </button>

      {showReview && <WriteReview onClose={() => setShowReview(false)} />}
    </main>
  );
};

export default CafeDetailPage;
