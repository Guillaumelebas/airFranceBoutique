import * as React from "react";
import LittleHeader from "./little-header";
import {VolService} from "../services/vol-service";
const BASE_URL = 'https://intech-airfrance-api.herokuapp.com/v1';
// const BASE_URL = 'http://localhost:4545/v1';

class MonVol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vols: [{idVol:1},{idVol:1}],
            result: []
        };
    }

    render() {
        return (
            <div>
                <LittleHeader/>
                <section id="two" class="wrapper style2">
                    <div class="inner">
                        <div class="box">
                            <div class="content">
                                <header class="align-center">
                                    <p>Veuillez entrer votre numero de reservation pour pouvoir trouver votre vol</p>
                                    <h2>Rechercher son vol</h2>
                                </header>

                                <form method="GET" action="/liste">

                                        <center>
                                            <div class="6u 12u$(xsmall)">

                                                    <input type="text" name="numReservation" id="numReservation" placeholder="Numéro de reservation" />

                                            </div>

                                        <br></br>
                                            <div class="4u 12u$">

                                                <ul class="actions">
                                                    <input type="submit" value="Rechercher" class="alt" />
                                                </ul>

                                                <div class="dropdown ">
                                                    <a href="#" id="drop1" data-toggle="dropdown" class="btn btn-default dropdown-toggle" role="button">Dropdown <span class="caret"></span></a>
                                                </div>
                                            </div>
                                        </center>

                                </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default MonVol;
