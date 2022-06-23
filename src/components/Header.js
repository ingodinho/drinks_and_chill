import './Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {X} from 'phosphor-react';

const Navbar = () => {
    const [drop, setDrop] = useState(false);
    const clickHandler = () => {
        setDrop(!drop);
        document.body.classList.toggle('no-overflow');
    }

    return (
        <section className="navbarMenu">

            <div className="burger_container" onClick={clickHandler} >
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
            <div className="head_menu_flex">
                <p className='p1Nav'>DRINKS&CHILL</p>
                <button className="Menu" onClick={clickHandler}>{drop ? <X size={32} color="#fff"/> : "MENU"}</button>
            </div>
            <nav className={drop ? "nav nav_active" : "nav"}>
                <ul>
                    <li onClick={clickHandler}><Link on to={"/"}>Home</Link></li>
                    <li onClick={clickHandler}><Link to={"/addCocktail"}>Add Cocktail</Link></li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <section className="headerTextSection">
                <Link to='/'>
                    <h1 className="h1Header">Cocktails & <span> </span>Drinks!</h1>
                </Link>
                <p className="pHeader">WELCOME TO THE WORLD OF COCKTAILS AND DRINKS!</p>
            </section>
        </section>
    )
}
export default Navbar