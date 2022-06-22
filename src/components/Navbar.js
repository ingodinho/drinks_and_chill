import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [drop, setDrop] = useState(false)
    const clickHandler = () => {
        setDrop(!drop)
    }

    return (
        <section className="navbarMenu">

            <div className="burger_container" onClick={clickHandler} >
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
            <div className="head_menu_flex">
                <Link to="/"><p className='p1Nav'>DRINKS&CHILL</p>    </Link>
                <button className="Menu" onClick={clickHandler}>{drop ? "X" : "MENU"}</button>
            </div>
            <nav className={drop ? "nav nav_active" : "nav"}>
                <ul>
                    <li onClick={clickHandler}><Link on to={"/"}>Home</Link></li>
                    <li onClick={clickHandler}><Link to={"/addCocktail"}>Add Cocktail</Link></li>
                    <li>About</li>
                    <li onClick={clickHandler}><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
            <section className="headerTextSection">
                <h1 className="h1Header">Cocktails & <span> </span>Drinks!</h1>
                <p className="pHeader">WELCOME TO THE WORLD OF COCKTAILS AND DRINKS!</p>
            </section>
        </section>
    )
}
export default Navbar