import * as React from "react";
import {VolService} from "../services/vol-service";
const BASE_URL = 'http://localhost:4000';

class Liste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vols: [],
            result: []
        };
    }

    componentDidMount() {
        /*VolService.getVols()
            .then(
                (vols) => this.setState({vols: vols})
            );*/
        fetch(`${BASE_URL}/vol`)
            .then((response) => response.json() )
            .then( (r) => {this.setState({vols: r.data})} );
        // .then((response) => this.setState({vols:response.data}) );
    }

    render() {
        return (
                <form method="GET" action="/liste2">
                    <div className="row uniform">
                        <div className="6u 12u$(xsmall)">
                            <input type="text" name="aeroportDepart" id="aeroportDepart" placeholder="Aeroport de départ" required/>
                        </div>
                        <div className="6u$ 12u$(xsmall)">
                            <input type="text" name="aeroportArrivee" id="aeroportArrivee" placeholder="Aeroport d'arrivée" required/>
                        </div>
                        <div className="5u$ 12u$(xsmall)">
                            <input type="date" name="dateDepart" id="dateDepart" />
                        </div>
                        <div className="5u$ 12u$(xsmall)">
                            <input type="date" name="dateArrivee" id="dateArrivee" />
                        </div>
                        <div className="5u$ 12u$(xsmall)">
                        <label for="passager-select">Nombre de passagers</label>
                        <select name="nbPassager" id="nbPassager">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        </div>
                        <div className="3u$ 12u$(small)">
                            <input type="submit" value="Search" className="fit"/>
                        </div>
                    </div>
                </form>
        );
    }
}

export default Liste;