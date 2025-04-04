import arrow from './../image/arrow.svg';
import emptyCart from './../image/empty-box.svg';
import btnRemove from './../image/btn-remove.svg';


function Drawer({ onClose, onRemove, items = [] }) {

    return (

        <div className="overlay" >
            <div className='drawer'>
                <h2 className="mb-30 ">Корзина
                    <img onClick={onClose} className="removeBtn cu-p" src={btnRemove} alt="remove" />
                </h2>

                {
                    items.length > 0 ?
                        <div className="d-flex flex-column justify-between drawer-content">
                            <div className="items">
                                {
                                    items.map((obj) => (
                                        <div key={obj.id} className="cart-item d-flex align-center mb-20">
                                            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cart-item-img"></div>
                                            <div className="mr-20 flex">
                                                <p className="mb-5">{obj.name}</p>
                                                <b>{obj.price} rub</b>
                                            </div>
                                            <img className="removeBtn" src={btnRemove} alt="remove" onClick={() => onRemove(obj.id)} />
                                        </div>
                                    ))
                                }
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
                        :
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex ">
                            <img src={emptyCart} className="mb-20" width={120} height={120} alt="" />
                            <h2>Корзина пустая</h2>
                            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className="greenButton">
                                <img src={arrow}  className="back" alt="" /> Вернуться назад
                            </button>
                        </div>
                }




            </div>
        </div>
    )
}


export default Drawer