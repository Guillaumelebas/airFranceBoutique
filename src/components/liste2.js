import * as React from "react";
import {VolService} from "../services/vol-service";
const BASE_URL = 'http://localhost:4000';

class Liste2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {vols: ["test","test2","test3"], result: []};
    }

    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var prenom = url.searchParams.get("prenom");
        document.getElementById("prenom").value = prenom;
        var nom = url.searchParams.get("nom");
        document.getElementById("nom").value = nom;
        var dateDepart = url.searchParams.get("dateDepart");
        document.getElementById("dateDepart").value = dateDepart;
        var dateArrivee = url.searchParams.get("dateArrivee");
        document.getElementById("dateArrivee").value = dateArrivee;
        /*VolService.getVols()
            .then(
                (vols) => this.setState({vols: vols})
            );*/
        fetch(`${BASE_URL}/vol/query/`)
            .then((response) => response.json() )
            .then( (r) => {this.setState({vols: r.data})} );
        // .then((response) => this.setState({vols:response.data}) );
    }


    render() {
        return (
                <form method="GET" action="/recap">
                    <div className="row uniform">
                        <div className="12u$">
                            <div className="select-wrapper">
                                <select name="vol" id="vol">
                                    { this.state.vols.map(
                                        (item, index) => <option value={"vol"+index} >{item.idVol}</option>
                                    )}
                                </select>
                                <input type="hidden" name="prenom" id="prenom" required/>
                                <input type="hidden" name="nom" id="nom" required/>
                                <input type="hidden" name="dateDepart" id="dateDepart" required/>
                                <input type="hidden" name="dateArrivee" id="dateArrivee" required/>
                            </div>
                        </div>
                        <div className="3u$ 12u$(small)">
                            <input type="submit" value="Search" className="fit"/>
                        </div>
                    </div>
                </form>
        );
    }
}

export default Liste2;
