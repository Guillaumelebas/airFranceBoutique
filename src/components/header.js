import * as React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
            <header id="header" className="alt">
            <div className="logo"><a href="/">Boutique<span> by Air France</span></a></div>
            <a href="#menu">Menu</a>
        </header>
            <nav id="menu">
            <ul class="links">
            <li><a href="/">Home</a></li>
        <li><a href="/liste">Chercher un vol</a></li>
        <li><a href="/mon-vole">Informations sur mon vol</a></li>
        </ul>
    </nav>

    <section class="banner full">
    <article>
    <img src="images/slide01.jpg" alt="" />
    <div class="inner">
    <header>
    <p>Visitez Paris</p>
    <h2>France</h2>
    </header>
    </div>
    </article>
    <article>
    <img src="images/slide02.jpg" alt="" />
    <div class="inner">
    <header>
    <p>Visitez new york</p>
    <h2>Etat-Unis</h2>
    </header>
    </div>
    </article>
    <article>
    <img src="images/slide03.jpg"  alt="" />
    <div class="inner">
    <header>
    <p>Profitez d'un remise si vous choisissez un vol avec escalle</p>
    <h2>Promotion !</h2>
    </header>
    </div>
    </article>
    </section>
            </div>);
    }
}

export default Header;
