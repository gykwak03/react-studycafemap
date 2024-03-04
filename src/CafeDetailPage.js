// CafeDetailPage.js
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import "./CafeDetailPage.css";
import WriteReview from "./WriteReview";

const CafeDetailPage = ({ cafes }) => {
  const [showReview, setShowReview] = useState(false);
  const { name } = useParams();
  const cafe = cafes.find((cafe) => cafe.name === name);

  const [userComment, setUserComment] = useState("");
  const [userTags, setUserTags] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem(name);
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      console.log("parsedUserData:", parsedUserData);

      setUserComment(parsedUserData.userComment);
      setUserTags([...parsedUserData.userTags]);
    }
  }, [name]);
  console.log("userComment:", userComment);
  console.log("userTags:", userTags);
  console.log("카페디테일렌더링");

  if (!cafe) {
    return <p>카페를 찾을 수 없습니다!</p>;
  }

  return (
    <div>
      <h2 className="review">리뷰</h2>
      <div className="grayLine"></div>
      <p>{userComment}</p>

      {/* userTags를 배열로 매핑하여 출력 */}
      {Array.isArray(userTags) &&
        userTags.map((tag, index) => <p key={index}>{tag}</p>)}

      <button className="writeComment" onClick={() => setShowReview(true)}>
        <img src="/img/frame.png" alt="리뷰 작성"></img>
      </button>

      {showReview && <WriteReview onClose={() => setShowReview(false)} />}
    </div>
  );
};

export default CafeDetailPage;
