import * as React from "react";
import LittleHeader from "./little-header";
import {VolService} from "../services/vol-service";
const BASE_URL = 'https://intech-airfrance-api.herokuapp.com';

class Liste2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {vols:[], result: [], volsRetour: [], volsAller: [], isEscale: true };

        this.handleClick = this.handleClick.bind(this);
        this.renderWithoutEscale = this.renderWithoutEscale.bind(this);
        this.renderWithEscale = this.renderWithEscale.bind(this);
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
                const tabR = this.getVolRetourDirect();
                this.setState({volsRetour: tabR});
                const tabA = this.getVolAllerDirect();
                this.setState({volsAller: tabA});
            } );

            

    }

    getVolAllerDirect(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        var aeroportDepart = url.searchParams.get("aeroportDepart");
        var aeroportArrivee = url.searchParams.get("aeroportArrivee");

        return this.state.vols.reduce( (a,b) => {
           if(b.idDepart === parseInt(aeroportDepart) && b.idArrivee === parseInt(aeroportArrivee) )  a.push(b)
           return a;
        }, [])
    }
    getVolRetourDirect(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        var aeroportDepart = url.searchParams.get("aeroportDepart");
        var aeroportArrivee = url.searchParams.get("aeroportArrivee");

        return this.state.vols.reduce( (a,b) => {
           if(b.idDepart === parseInt(aeroportArrivee) && b.idArrivee === parseInt(aeroportDepart)) a.push(b)
           return a;
        }, [])
    }
    handleClick() {
        this.setState(state => ({
          isEscale: !state.isEscale
        }));
      }

    renderWithoutEscale(){
        return (
            <div className="12u$">
            <h3>Vol aller: </h3>
                <div className="select-wrapper">
                    { this.state.volsAller && this.state.volsAller.map(
                            (item, index) => <div><input type="checkbox" id={item.idVol} name="volAller" value={item.idVol}></input>
                            <label for={item.idVol}><b>{item.Depart}</b> ---------> <b>{item.Arrivee}</b></label></div>
                        )} 
                </div>
                <h3>Vol retour: </h3>
                <div className="select-wrapper">
                    { this.state.volsRetour && this.state.volsRetour.map(
                            (item, index) => <div><input type="checkbox" id={item.idVol} name="volRetour" value={item.idVol}></input>
                            <label for={item.idVol}><b>{item.Depart}</b> ---------> <b>{item.Arrivee}</b></label></div>
                        )} 
                </div>
            </div>);
    }

    renderWithEscale(){
        return (
            <div className="12u$">
            <h3>Vols disponibles: </h3>
            <h4>promotion de -10 % </h4>
                <div className="select-wrapper">
                    { this.state.vols && this.state.vols.map(
                            (item, index) => <div><input type="checkbox" id={item.idVol} name={"vol"+item.idVol} value={item.idVol}></input>
                            <label for={item.idVol}><b>{item.Depart}</b> ---------> <b>{item.Arrivee}</b></label></div>
                        )} 
                </div>
            </div>
            );
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
                                <p>Vous y êtes presque !</p>
                                <h2>Selectionner vos vols</h2>
                            </header>
                            <button onClick={this.handleClick}>
                                   {this.state.isEscale ? 'sans escale' : 'avec escale'}
                            </button>
                            <form method="GET" action="/recap">
                                <div className="row uniform">
                                

                                    {this.state.isEscale == true ? this.renderWithEscale() : this.renderWithoutEscale() }

                                    <input type="hidden" name="aeroportDepart" id="aeroportDepart" required/>
                                    <input type="hidden" name="aeroportArrivee" id="aeroportArrivee" required/>
                                    <input type="hidden" name="dateDepart" id="dateDepart" required/>
                                    <input type="hidden" name="dateArrivee" id="dateArrivee" required/>
                                    <input type="hidden" name="nbPassager" id="nbPassager" required/>
                                    <div className="3u$ 12u$(small)">
                                        <input type="submit" value="Reserver" class="fit"/>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default Liste2;
