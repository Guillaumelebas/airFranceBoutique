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
        return (<h1>Bonjour, {this.props.name}</h1>);
    }
}

export default Home;
