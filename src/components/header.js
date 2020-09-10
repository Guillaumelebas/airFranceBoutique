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
                        <img src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"  alt="" />
                        <div class="inner">
                            <header>
                                <p>Profitez de remise en choisissant un vol avec escale</p>
                                <h2>Promotion !</h2>
                            </header>
                        </div>
                    </article>

                    <article>
                        <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="" />
                        <div class="inner">
                            <header>
                                <p>Ayez soif de liberté !</p>
                                <h2>Visitez New-York</h2>
                                <ul class="actions">
                                    <li><a href="/liste" class="button special icon fa-search">Rechercher un vol</a></li>
                                </ul>
                            </header>
                        </div>
                    </article>

                </section>
            </div>);
    }
}

export default Header;
