import logoImg from "./../image/logo.svg";
import telejka from "./../image/telejka.svg";
import fav from "./../image/fav.svg";
import union from "./../image/Union.svg";



function Header() {
    return (
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
    )
}

export default Header