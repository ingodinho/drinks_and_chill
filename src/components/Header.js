import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <p className='p1Nav'>DRINKS&CHILL</p>
            </nav>
            <section className="headerTextSection">
                <h1 className="h1Header">Cocktails & <span> </span>Drinks!</h1>
                <p className="pHeader">WELCOME TO THE WORLD OF COCKTAILS AND DRINKS!</p>
            </section>

        </div>

    );
}

export default Header;