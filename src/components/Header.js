import logoImg from "./../image/logo.svg";
import telejka from "./../image/telejka.svg";
import fav from "./../image/fav.svg";
import union from "./../image/Union.svg";
import { Link } from 'react-router-dom';



function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to={"/"} className="d-flex align-center cu-p">
                <div className="d-flex align-center " >
                    <img src={logoImg} width={40} height={40} alt="" />
                    <div>
                        <h3 className="text-uppercase"> React sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className="d-flex align-center">
                <li onClick={props.onClickCart} className="mr-30 d-flex align-center cu-p">
                    <img src={telejka} alt="" />
                    <span>1205 rub</span>
                </li>
                <li className="mr-30">
                    <Link to={"/favourites"} className="d-flex align-center cu-p">
                        <img src={fav} alt="" />
                        <span>Закладки</span>
                    </Link>
                </li>
                <li className="mr-30 d-flex align-center">
                    <img src={union} alt="" />
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    )
}

export default Header