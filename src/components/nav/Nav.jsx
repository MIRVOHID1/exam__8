import "./Nav.css"
import Logo from "../../assets/Logos/Logo.webp"
import Language from "./language/Language";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__left">
                    <img src={Logo} alt="Company Logo" width={50} height={50}/>
                    <Link className="links" to="/">
                        <p>Menyu</p>
                    </Link>
                    <Link className="links" to="/branches">
                        <p>Filiallar</p>
                    </Link>
                    <Link className="links" to="/about">
                        <p>Biz haqimizda</p>
                    </Link>
                    <Link className="links" to="/contact">
                        <p>Bog'anish</p>
                    </Link>
                </div>
                <div className="nav__right">
                    <button className="nav__right__location">
                        <FmdGoodIcon style={{ color: "#51267d", fontSize: "2rem", padding: '8px', backgroundColor: '#51267d15', borderRadius: '50%', marginRight: '10px' }} />
                        <div >
                            <p style={{ padding: '0px', margin: '0px', letterSpacing: '1px', fontSize: '16px', textAlign: 'left' }}>Yetkazib berish yoki Olib ketish</p>
                            <p style={{ color: '#51267d', padding: '0px', margin: '0px', fontSize: '15px', textAlign: 'left' }}>Qabul qilib olish turini tanlang</p>
                        </div>
                    </button>
                    <Language/>
                    <Cart/>
                    <button className="nav__right__profile">
                        <VscAccount style={{ color: "#51267d", fontSize: "23px", padding: '10px', backgroundColor: '#51267d15', borderRadius: '50%' }}   />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;
