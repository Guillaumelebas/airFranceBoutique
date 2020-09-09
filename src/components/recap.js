import * as React from "react";
const BASE_URL = 'https://intech-airfrance-api.herokuapp.com';

class Recap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idCommande: null
        };

        this.addReservations = this.addReservations.bind(this);
        this.addCommande = this.addCommande.bind(this);
    }

    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var dateDepart = url.searchParams.get("dateDepart");
        document.getElementById("dateDepart").value = dateDepart;
        var dateArrivee = url.searchParams.get("dateArrivee");
        document.getElementById("dateArrivee").value = dateArrivee;
        var nbPassager = url.searchParams.get("nbPassager");
        document.getElementById("nbPassager").value = nbPassager;   

    }

    addReservations(idCommande){
        let url_string = window.location.href;
        let url = new URL(url_string);


        let nbPassager = url.searchParams.get("nbPassager");
        document.getElementById("nbPassager").value = nbPassager;

        let idVol = url.searchParams.get("idVol");
        document.getElementById("idVol").value = idVol;

        let dateDepart = url.searchParams.get("dateDepart");
        document.getElementById("dateDepart").value = dateDepart;

        let dateArrivee = url.searchParams.get("dateArrivee");
        document.getElementById("dateArrivee").value = dateArrivee;

        for(let i = 1; i<= nbPassager ; i++){
            let nomPassager = document.getElementById("nom"+i).value;
            let prenomPassager = document.getElementById("prenom"+i).value;

            //creation du passager
            console.log(`${BASE_URL}/passager/add?nomPassager=${nomPassager}&prenomPassager=${prenomPassager}`);
            fetch(`${BASE_URL}/passager/add?nomPassager=${nomPassager}&prenomPassager=${prenomPassager}`)
                .then((response) => response.json() )
                .then( (r) => {
                    console.log(r);

                    //creation du billet
                    console.log(`${BASE_URL}/billet/add?idPassager=${JSON.parse(JSON.stringify(r.data) )[0]["LAST_INSERT_ID()"]}&idVol=${idVol}&idCommande=${idCommande}&dateDepart=${dateDepart}&dateArrivee=${dateArrivee}`);
                    fetch(`${BASE_URL}/billet/add?idPassager=${JSON.parse(JSON.stringify(r.data) )[0]["LAST_INSERT_ID()"]}&idVol=${idVol}&idCommande=${idCommande}&dateDepart=${dateDepart}&dateArrivee=${dateArrivee}`)
                        .then((response) => response.json() )
                        .then( (r) => {
                            console.log(r);

                        } )
                        .catch( e => console.error(e));


                } )
                .catch( e => console.error(e));
        }
    }
    addCommande(){
        var url_string = window.location.href;
        var url = new URL(url_string);

        var nomClient = document.getElementById("nomClient").value;
        var prenomClient = document.getElementById("prenomClient").value
        var mailClient = document.getElementById("mailClient").value;

        console.log(`${BASE_URL}/client/add?nomClient=${nomClient}&prenomClient=${prenomClient}&mailClient=${mailClient}`);

        // creation du client
        fetch(`${BASE_URL}/client/add?nomClient=${nomClient}&prenomClient=${prenomClient}&mailClient=${mailClient}`)
            .then((response) => response.json() )
            .then( (r) => {
                console.log(r.data);

                //creation de la commande
                console.log(`${BASE_URL}/commande/add?noClient=${JSON.parse(JSON.stringify(r.data) )[0]["LAST_INSERT_ID()"]}`);
                fetch(`${BASE_URL}/commande/add?noClient=${JSON.parse(JSON.stringify(r.data) )[0]["LAST_INSERT_ID()"]}`)
                .then((response) => response.json() )
                .then( (r) => {
                    console.log(r.data);
                    this.addReservations(JSON.parse(JSON.stringify(r.data) )[0]["LAST_INSERT_ID()"]);

                } )
                    .catch( e => console.error(e));

            } )
            .catch( e => console.error(e));
    }
    renderInput(){
        var views = [];
        var url_string = window.location.href;
        var url = new URL(url_string);
        var nbPassager = url.searchParams.get("nbPassager");


        for(var i = 1; i <= nbPassager; i++){
            views.push(
                <div name={"divVoyageur"+i} id={"divVoyageur"+i} style={{border:'solid 0.1em',margin: '0.5em',padding: '0.5em'}}>
                    <h1 style={{color:'black'}}>Voyageur {i}</h1>
                    <input name={"prenom"+i} id={"prenom"+i} placeholder={"Prenom voyageur" + " " + i}/>
                    <input name={"nom"+i} id={"nom"+i} placeholder={"Nom voyageur" + " " + i}/>
                </div>

            );

        }
        views.push(<div name="divClient" id={"divClient"} style={{border:'solid 0.1em',margin: '0.5em',padding: '0.5em'}}>
            <h1 style={{color:'black'}}>Adresse de facturation</h1>
            <input name="prenomClient" id="prenomClient" placeholder="Prenom Acheteur"/>
            <input name="nomClient" id="nomClient" placeholder="nom Acheteur"/>
            <input name="mailClient" id="mailClient" placeholder="mail Acheteur"/>
            <input type="hidden" name="dateDepart" id="dateDepart" required/>
            <input type="hidden" name="dateArrivee" id="dateArrivee" required/>
            <input type="hidden" name="idVol" id="idVol" required/>
            <input type="hidden" name="nbPassager" id="nbPassager" required/></div>);



        return views;
    }

    render() {
        return (
            //<form method="GET" action="#" onSubmit={this.add}>
                <div className="row uniform">
                    <div className="12u$">
                        <div className="select-wrapper">
                            <div>
                                { this.renderInput() }
                            </div>
                        </div>
                    </div>
                    <div className="3u$ 12u$(small)">
                        <input type="submit" value="Validation" className="fit" onClick={this.addCommande}/>
                    </div>
                </div>
            //</form>
        );
    }
}

export default Recap;
