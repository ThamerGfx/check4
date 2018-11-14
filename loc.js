import React, {Component} from "react";

class Loc extends Component {
    render(props) {
        return(
            <div className="loc">
                <img src={this.props.pic} alt=""/>
                <h2>{this.props.locname}</h2>
            </div>
        );
    }

}
export default Loc;