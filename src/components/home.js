import * as React from "react";
import {VolService} from "../services/vol-service";
const BASE_URL = 'http://localhost:4000';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vols: []
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

            <body>
            <div class="testbox">
              <form action="/">
                <div class="banner">
                  <h1>Enregistrer son vol</h1>
                </div>
                <p>Runner Information</p>
                <div class="item">
                  <label for="nom">Nom<span>*</span></label>
                  <input id="nom" type="text" name="nom" required/>
                </div>
                <div class="item">
                  <label for="prenom">Prenom<span>*</span></label>
                  <input id="prenom" type="text" name="prenom" required/>
                </div>
                <div class="item">
                  <p>Vol</p>
                  <select>
                    <option selected value="" disabled selected></option>
                      { this.state.vols.map(
                          (item, index) => <option value={"vol"+index} >{item.idVol}</option>
                      )}
                  </select>
                </div>
                <div class="btn-block">
                  <button type="submit" href="/">SUBMIT</button>
                </div>
              </form>
            </div>
          </body>);
    }
}

export default Home;
