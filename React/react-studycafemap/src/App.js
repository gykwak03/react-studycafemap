import { useState } from "react";
import "./App.css";
import cafes from "./cafes.json";

const CafeItem = ({ test }) => {
  return <div>{test}</div>;
};

function App() {
  const Logo = "LOGO";
  const recommend = "이런 카페는 어떠세요?";

  return (
    <div id="app" className="App">
      <h1 className="Logo">{Logo}</h1>
      <div className="whatAboutThisCafe">{recommend}</div>
      <div className="grayLine"></div>
      {/* <CafeItem test={"aaaaa"}></CafeItem> */}
      {cafes.data.map((cafe, index) => (
        <div key={index}>
          <img className="picture" src={cafe.imageUrl} />
          <div className="cafeName">{cafe.name}</div>
          <div className="americanoCost">{cafe.minPrice}</div>
          <div className="characteristic">{cafe.tags}</div>
          <div className="grayLine"></div>
        </div>
      ))}
      <div className="grayLine"></div>
    </div>
  );
}

export default App;
