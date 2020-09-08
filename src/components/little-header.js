import * as React from "react";

class LittleHeader extends React.Component {
    render() {
        return (
                <div>
                    <header id="header">
                        <div class="logo"><a href="/">Boutique<span> by Air France</span></a></div>
                        <a href="#menu">Menu</a>
                    </header>
                    <nav id="menu">
                        <ul class="links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/liste">Chercher un vol</a></li>
                            <li><a href="/mon-vol">Informations sur mon vol</a></li>
                        </ul>
                    </nav>
                </div>
        );
    }
}

export default LittleHeader;
