import * as React from "react";
import {VolService} from "../services/vol-service";
const BASE_URL = 'https://intech-airfrance-api.herokuapp.com';

class Recap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vols: [],
            result: []
        };
    }

    componentDidMount() {

        var url_string = window.location.href;
        var url = new URL(url_string);

        var nomClient = url.searchParams.get("nomClient");
        document.getElementById("nomClient").value = nomClient;
        
        var prenomClient = url.searchParams.get("prenomClient");
        document.getElementById("prenomClient").value = prenomClient;

        var mailClient = url.searchParams.get("mailClient");
        document.getElementById("mailClient").value = mailClient;
         
        fetch(`${BASE_URL}/client/add?nomClient=${nomClient}&prenomClient=${prenomClient}&mailClient=${mailClient}`)
        .then((response) => response.json() )
        .then( (r) => {
            console.log(r);
            this.setState({clients: r.data})
        } );
    }

    renderInput(){
        var views = [];
        var url_string = window.location.href;
        var url = new URL(url_string);
        var nbPassager = url.searchParams.get("nbPassager");


        for(var i = 1; i < nbPassager; i++){
            views.push(
                <div style={{border:'solid 0.1em',margin: '0.5em',padding: '0.5em'}}>
                <h1 style={{color:'black'}}>Voyageur {i}</h1>
                <input name={"prenom"+i} id={"prenom"+i} placeholder={"Prenom voyageur" + " " + i}/>
                <input name={"nom"+i} id={"nom"+i} placeholder={"Nom voyageur" + " " + i}/>
                </div>
                
            );
            
        }
        views.push(<div style={{border:'solid 0.1em',margin: '0.5em',padding: '0.5em'}}>
            <h1 style={{color:'black'}}>Adresse de facturation</h1>
            <input name={"prenomClient"} id={"prenomClient"} placeholder={"Prenom Acheteur"}/>
        <input name={"nomClient"} id={"nomClient"} placeholder={"nom Acheteur"}/>
        <input name={"mailClient"} id={"mailClient"} placeholder={"mail Acheteur"}/></div>);



        return views;
    }

    render() {
        return (
                <form method="GET" action="/recap">
                    <div className="row uniform">
                        <div className="12u$">
                            <div className="select-wrapper">
                                    <div>
                                        { this.renderInput() }
                                    </div>
                            </div>
                        </div>
                        <div className="3u$ 12u$(small)">
                            <input type="submit" value="Validation" className="fit"/>
                        </div>
                    </div>
                </form>
        );
    }
}

export default Recap;