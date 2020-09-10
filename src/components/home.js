import * as React from "react";
import Header from "./header";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <section id="one" className="wrapper style2">
                    <div className="inner">
                        <div className="grid-style">

                            <div>
                                <div className="box">
                                    <div className="image fit">
                                        <img src="images/pic02.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <header className="align-center">
                                            <p>Je cherche mon voyage</p>
                                            <h2>Allez aux grés de vos envies...</h2>
                                        </header>
                                        <footer className="align-center">
                                            <a href="/liste" className="button alt">Cliquez ici</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="box">
                                    <div className="image fit">
                                        <img src="images/pic03.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <header className="align-center">
                                            <p>Informations sur mon voyage</p>
                                            <h2>Besoin d'information ?</h2>
                                        </header>
                                        <footer className="align-center">
                                            <a href="/mon-vol" className="button alt">Cliquez ici</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>);
    }
}

export default Home;
