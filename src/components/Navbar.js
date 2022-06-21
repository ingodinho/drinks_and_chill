import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [drop, setDrop] = useState(true)
    return (
        <div>
            <section className="navbarMenu">
                <p></p>
                <button onClick={() => setDrop(!drop)}>MENU</button>
                <nav>
                    <ul style={{ display: drop ? 'none' : '' }}>
                        <li> <Link to={"/"}>Home</Link></li>
                        <li><Link to={"/addCocktail"}>Add Cocktail</Link></li>
                    </ul>
                </nav>
            </section>
        </div>

    )
}
export default Navbar