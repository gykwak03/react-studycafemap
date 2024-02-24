import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const Logo = "LOGO";
  const recommend = "이런 카페는 어떠세요?";
  const imagePaths = [
    "img/starbucks.png",
    "img/cafecanna.png",
    "img/starbucks.png",
  ];

  let [cafeName, CafeName] = useState([
    "스타벅스 경희대학교국제캠퍼스",
    "카페칸나",
    "스타벅스 경희대학교국제캠퍼스",
  ]);
  let [americanoCost, setAmericamoCost] = useState([
    "아메리카노 4900원",
    "아메리카노 5000원",
    "아메리카노 4900원",
  ]);
  let [characteristic, setCharacteristic] = useState([
    "도보 약 12분, 콘센트 많음, 이용 고객 많음, 시끄러운 분위기",
    "도보 약 12분, 콘센트 많음, 이용 고객 보통, 조용한 분위기 ",
    "도보 약 12분, 콘센트 많음, 이용 고객 많음, 시끄러운 분위기",
  ]);

  let cafeCount = cafeName.length + 1;

  return (
    <div id="app" className="App">
      <h1 className="Logo">{Logo}</h1>
      <div className="whatAboutThisCafe">{recommend}</div>
      <div className="grayLine"></div>
      {cafeName.map((cafe, index) => (
        <div key={index}>
          <img
            className="picture"
            src={imagePaths[index]}
            alt={`Cafe ${index + 1}`}
          />
          <div className="cafeName">{cafe}</div>
          <div className="americanoCost">{americanoCost[index]}</div>
          <div className="characteristic">{characteristic[index]}</div>
          {index < cafeName.length - 1 && <div className="grayLine"></div>}
        </div>
      ))}
      <div className="grayLine"></div>
    </div>
  );
}

export default App;
