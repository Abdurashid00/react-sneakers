import arrow from './../image/arrow.svg';
import fCardImg from "./../image/1.jpg";
import btnRemove from './../image/btn-remove.svg';



function Drawer() {
    return (
        <div className="overlay" style={{ display: "none" }}>



            <div className="drawer">
                <h2 className="mb-30 ">Корзина
                    <img className="removeBtn cu-p" src={btnRemove} alt="remove" />
                </h2>

                <div className="items">
                    <div className="cart-item d-flex align-center mb-20">
                        <div style={{ backgroundImage: `url(${fCardImg})` }} className="cart-item-img"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 000 rub</b>
                        </div>
                        <img className="removeBtn" src={btnRemove} alt="remove" />
                    </div>
                    <div className="cart-item d-flex align-center">
                        <div style={{ backgroundImage: `url(${fCardImg})` }} className="cart-item-img"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 000 rub</b>
                        </div>
                        <img className="removeBtn" src={btnRemove} alt="remove" />
                    </div>
                    <div className="cart-item d-flex align-center">
                        <div style={{ backgroundImage: `url(${fCardImg})` }} className="cart-item-img"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 000 rub</b>
                        </div>
                        <img className="removeBtn" src={btnRemove} alt="remove" />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 489 rub.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 rub.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ
                        <img src={arrow} alt="" />
                    </button>

                </div>
            </div>
        </div>
    )
}


export default Drawer