import * as React from "react";
import volService from "../services/vol-service"
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            vols: []
        };
    }

    componentDidMount() {
        this.volService.getVols()
            .then(
                (vols) => this.setState({vols: vols})
            );
    }

    render() {
<<<<<<< HEAD
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
                    <option value="vol1" >DTW-JFK(300)</option>
                    <option value="vol1">CDG-JFK(1000)</option>
                    <option value="vol1">CDG-DTW(700)</option>
                  </select>
                </div>
                <div class="btn-block">
                  <button type="submit" href="/">SUBMIT</button>
                </div>
              </form>
            </div>
          </body>);
        
=======
        return (<h1>Bonjour, {this.props.name}</h1>);
>>>>>>> c7fc5b5fc5e9d41a40e6c9d72c85f29fb4a93560
    }
}

export default Home;
