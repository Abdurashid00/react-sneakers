import greyHeart from "./../image/greyHeart.svg";
import plus from "./../image/plus.svg";
import fCardImg from "./../image/1.jpg";


function Card() {
    return(
        <div className="card">
            <div className="favorite">
              <img src={greyHeart} alt="unliked" />
            </div>
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
    )
}


export default Card;