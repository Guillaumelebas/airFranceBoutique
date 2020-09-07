import * as React from "react";

class Home extends React.Component {
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
        
    }
}

export default Home;
