import * as React from "react";
import {VolService} from "../services/vol-service";
const BASE_URL = 'http://localhost:4000';

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

    render() {
        return (
                <form method="GET" action="/recap">
                    <div className="row uniform">
                        <div className="12u$">
                            <div className="select-wrapper">
                                <select name="category" id="category">
                                    { this.state.vols.map(
                                        (item, index) => <option value={"vol"+index} >{item.idVol}</option>
                                    )}
                                </select>
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