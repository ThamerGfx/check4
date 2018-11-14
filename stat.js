import React, {Component} from "react";

class Stat extends Component {
    render(props) {
        return(
            <div className="stat">
                <h2>{this.props.nbr}</h2>
                <h4>{this.props.text}</h4>
            </div>
        );
    }

}
export default Stat;