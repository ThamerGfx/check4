import React, {Component} from "react";

class Prog extends Component {

    bgcolor = {background:this.props.bgcolor}
    txtcolor = {color:this.props.txtcolor}
    titrecol = {color:this.props.titrecol}
    desccol = {color:this.props.desccol}
    render(props) {
        return(
            <div className="prog" style={this.bgcolor}  >
                <h3 className="titre" style={this.titrecol}>{this.props.titre}</h3>
                <hr className="hr"></hr>
            <div className="desc" style={this.desccol}>
                <h5>{this.props.desc}</h5>
            </div>
            <div className="savoir" style={this.txtcolor}>
                <h4>{this.props.savoir}</h4>
            </div>

            </div>
        );
    }

}
export default Prog;