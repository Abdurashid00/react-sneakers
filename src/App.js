import React from "react";
import logoImg from "./image/logo.svg";
import telejka from "./image/telejka.svg";
import fav from "./image/fav.svg";
import union from "./image/Union.svg";
import plus from "./image/plus.svg";
import fCardImg from "./image/1.jpg";
import sCardImg from "./image/2.jpg";
import tCardImg from "./image/3.jpg";
import foCardImg from "./image/4.jpg";
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center" >
          <img src={logoImg} width={40} height={40} alt="" />
          <div>
            <h3 className="text-uppercase"> React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30 d-flex align-center">
            <img src={telejka} alt="" />
            <span>1205 rub</span>
          </li>
          <li className="mr-30 d-flex align-center">
            <img src={fav} alt="" />
            <span>Закладки</span>
          </li>
          <li className="mr-30 d-flex align-center">
            <img src={union} alt="" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="sneackers d-flex">
          <div className="card">
            <img src={fCardImg} width={133} height={112} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>
                  Цена:
                </span>
                <b>12 000 rub</b>
              </div>
              <button className="button d-flex justify-center align-center">
                <img width={11} height={11} src={plus} alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={sCardImg} width={133} height={112} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>
                  Цена:
                </span>
                <b>12 000 rub</b>
              </div>
              <button className="button d-flex justify-center align-center">
                <img width={11} height={11} src={plus} alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={tCardImg} width={133} height={112} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>
                  Цена:
                </span>
                <b>12 000 rub</b>
              </div>
              <button className="button d-flex justify-center align-center">
                <img width={11} height={11} src={plus} alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={foCardImg} width={133} height={112} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>
                  Цена:
                </span>
                <b>12 000 rub</b>
              </div>
              <button className="button d-flex justify-center align-center">
                <img width={11} height={11} src={plus} alt="" />
              </button>
            </div>
          </div></div>
      </div>
    </div>
  );
}

export default App;
