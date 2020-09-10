import * as React from "react";
import Spinner from "react-spinner-material";
import LittleHeader from "./little-header";
const BASE_URL = 'https://intech-airfrance-api.herokuapp.com/v1';
// const BASE_URL = 'http://localhost:4545/v1';

class Paiement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idCommande: null,
            isLoading: false,
        };

        this.addReservations = this.addReservations.bind(this);
        this.addCommande = this.addCommande.bind(this);
        this.paiement = this.paiement.bind(this);
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
    paiement(){
        this.setState({isLoading: true});

        let url_string = window.location.href;
        let url = new URL(url_string);

        let nomClient = document.getElementById("nomClient").value;
        let prenomClient = document.getElementById("prenomClient").value;
        let mailClient = document.getElementById("mailClient").value;
        let nbPassager = url.searchParams.get("nbPassager");
        document.getElementById("nbPassager").value = nbPassager;
        let idVol = url.searchParams.get("idVol");
        document.getElementById("idVol").value = idVol;
        let dateDepart = url.searchParams.get("dateDepart");
        document.getElementById("dateDepart").value = dateDepart;
        let dateArrivee = url.searchParams.get("dateArrivee");
        document.getElementById("dateArrivee").value = dateArrivee;
        var aeroportDepart = url.searchParams.get("aeroportDepart");
        document.getElementById("aeroportDepart").value = aeroportDepart;
        var aeroportArrivee = url.searchParams.get("aeroportArrivee");
        document.getElementById("aeroportArrivee").value = aeroportArrivee;

        const tabVols = url_string.match(/(vol)\d=./g).reduce( (a,b) => {
            a.push(b[b.length-1]);
            return a
        }, []);

        let tabPassagers = [];
        for(let i = 1; i<= nbPassager ; i++) {
            let nomPassager = document.getElementById("nom" + i).value;
            let prenomPassager = document.getElementById("prenom" + i).value;
            tabPassagers.push({
                "nomPassager": nomPassager,
                "prenomPassager": prenomPassager
            })
        }
        const data = {
            "nomClient": nomClient,
            "prenomClient": prenomClient,
            "mailClient": mailClient,
            "aeroportDepart": aeroportDepart,
            "aeroportArrivee": aeroportArrivee,
            "dateDepart": dateDepart,
            "dateArrivee": dateArrivee,
            "passagers": tabPassagers,
            "vols": tabVols,
        };
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/commande/add`, options)
            .then((response) => response.json() )
            .then( (r) => {
                console.log(r);
                this.setState({isLoading: false});
            } );
    }
    renderInput(){
        var views = [];
        var url_string = window.location.href;
        var url = new URL(url_string);
        var nbPassager = url.searchParams.get("nbPassager");


        for(var i = 1; i <= nbPassager; i++){
            views.push(
                <div name={"divVoyageur"+i} id={"divVoyageur"+i} style={{border:'solid 0.1em',margin: '0.5em',padding: '0.5em', marginBottom: 2 + "%"}}>
                    <h2 style={{height: 6 + "%"}}>Voyageur {i}</h2>
                    <input name={"prenom"+i} id={"prenom"+i} placeholder={"Prenom voyageur" + " " + i}/>
                    <input name={"nom"+i} id={"nom"+i} placeholder={"Nom voyageur" + " " + i}/>
                </div>

            );

        }

        views.push(<div name="divClient" id={"divClient"} style={{border:'solid 0.1em',margin: '0.5em',padding: '0.5em'}}>
            <h2 style={{height: 3 + "%"}}>Adresse de facturation</h2>
            <input name="prenomClient" id="prenomClient" placeholder="Prenom Acheteur"/>
            <input name="nomClient" id="nomClient" placeholder="nom Acheteur"/>
            <input name="mailClient" id="mailClient" placeholder="mail Acheteur"/>
            <input type="hidden" name="dateDepart" id="dateDepart" required/>
            <input type="hidden" name="dateArrivee" id="dateArrivee" required/>
            <input type="hidden" name="aeroportDepart" id="aeroportDepart" required/>
            <input type="hidden" name="aeroportArrivee" id="aeroportArrivee" required/>
            <input type="hidden" name="idVol" id="idVol" required/>
            <input type="hidden" name="nbPassager" id="nbPassager" required/></div>
        );



        return views;
    }

    renderLoading(){
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
            </div>
        );
    }

    render() {
        return (
            //<form method="GET" action="#" onSubmit={this.add}>
            <div>
                <LittleHeader/>

                <div>
                    <section id="two" className="wrapper style2">
                        <div className="inner">
                            <div className="box">
                                <div className="content">
                                    <header className="align-center">
                                        <p>A un clique de vous envoler !</p>
                                        <h2>Remplissez le formulaire</h2>
                                    </header>
                                    <div>
                                { this.renderInput() }
                                        <div className="3u$ 12u$(small)"
                                             style={{marginLeft: 55 + '%', width: 45 + '%', marginTop: 3 + "%"}}>
                                            <label style={{marginLeft: 65 + "%", marginTop: 2 + "%"}}
                                                   htmlFor="passager-select">Prix total :</label>
                                            <input type="submit" name="commander" value="Finaliser la commande" className="button special"
                                                   onClick={this.paiement}/>
                                        </div>
                                        { this.state.isLoading && this.renderLoading() }
                                    </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        );
    }
}

export default Paiement;
