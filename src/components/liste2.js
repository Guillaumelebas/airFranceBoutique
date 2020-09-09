import * as React from "react";
import {VolService} from "../services/vol-service";
const BASE_URL = 'https://intech-airfrance-api.herokuapp.com';

class Liste2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {vols:[], result: []};
    }

    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var aeroportDepart = url.searchParams.get("aeroportDepart");
        document.getElementById("aeroportDepart").value = aeroportDepart;
        var aeroportArrivee = url.searchParams.get("aeroportArrivee");
        document.getElementById("aeroportArrivee").value = aeroportArrivee;
        var dateDepart = url.searchParams.get("dateDepart");
        document.getElementById("dateDepart").value = dateDepart;
        var dateArrivee = url.searchParams.get("dateArrivee");
        document.getElementById("dateArrivee").value = dateArrivee;
        var nbPassager = url.searchParams.get("nbPassager");
        document.getElementById("nbPassager").value = nbPassager;
        /*VolService.getVols()
            .then(
                (vols) => this.setState({vols: vols})
            );*/
        fetch(`${BASE_URL}/vol/query?idAeroportDepart=${aeroportDepart}&idAeroportArrivee=${aeroportArrivee}&dateDepart=${dateDepart}&dateArrivee=${dateArrivee}`)
            .then((response) => response.json() )
            .then( (r) => {
                console.log(r);
                this.setState({vols: r.data})
            } );

    }


    render() {
        return (
                <form method="GET" action="/recap">
                    <div className="row uniform">
                        <div className="12u$">
                            <div className="select-wrapper">
                                { this.state.vols && this.state.vols.map(
                                        (item, index) => <div><input type="checkbox" id={item.idVol} name="subscribeName" value="test"></input>
                                        <label for={item.idVol}>{item.Depart} {item.Arrivee}</label></div>
                                    )}  
                                <input type="hidden" name="aeroportDepart" id="aeroportDepart" required/>
                                <input type="hidden" name="aeroportArrivee" id="aeroportArrivee" required/>
                                <input type="hidden" name="dateDepart" id="dateDepart" required/>
                                <input type="hidden" name="dateArrivee" id="dateArrivee" required/>
                                <input type="hidden" name="nbPassager" id="nbPassager" required/>
                            </div>
                        </div>
                        <div className="3u$ 12u$(small)">
                            <input type="submit" value="RESERVER" className="fit"/>
                        </div>
                    </div>
                </form>
        );
    }
}

export default Liste2;
