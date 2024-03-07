import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import cafes from "./cafes.json";
import MainPage from "./MainPage";
import CafeDetailPage from "./CafeDetailPage";
import "./App.css";

function App() {
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

  return (
    <Router>
      <div id="app" className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                cafes={cafes.data}
                list={list}
                changeFavorite={changeFavorite}
              />
            }
          />
          <Route
            path="/cafe/:name"
            element={<CafeDetailPage cafes={cafes.data} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
