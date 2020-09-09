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
        /*VolService.getVols()
            .then(
                (vols) => this.setState({vols: vols})
            );*/
        fetch(`${BASE_URL}/vol`)
            .then((response) => response.json() )
            .then( (r) => {this.setState({vols: r.data})} );
        // .then((response) => this.setState({vols:response.data}) );
    }

    renderInput(){
        var views = [];
        var url_string = window.location.href;
        var url = new URL(url_string);
        var nbPassager = url.searchParams.get("nbPassager");
        for(var i = 0; i < nbPassager; i++){
            views.push(
                <p>TESTTETETST</p>
            );
        }

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