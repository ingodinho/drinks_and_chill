import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav >
            <h2>Drinks & Chill</h2>
            <form action="">
                <label htmlFor="touch"><span>Menu</span></label>
                <input type="checkbox" id="touch" />
                <ul className="slide">
                    <li>
                        <Link to="/addCocktail">add your Cocktail</Link>
                    </li>
                </ul>
            </form>

        </nav>
    )
}

export default Navbar