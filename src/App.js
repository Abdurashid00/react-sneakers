import React from "react";

import plus from "./image/plus.svg";
import search from "./image/search.svg";
import greyHeart from "./image/greyHeart.svg";
import redHeart from "./image/redHeart.svg";
import btnChecked from "./image/btnChecked.svg";
import arrow from './image/arrow.svg';
import sCardImg from "./image/2.jpg";
import tCardImg from "./image/3.jpg";
import foCardImg from "./image/4.jpg";


import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (

    <div className="wrapper clear">

      <Drawer/>


      <Header />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src={search} alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className=" d-flex ">
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </div>
  );
}

export default App;
