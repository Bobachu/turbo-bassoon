import React, { Component } from "react";

export default class Navbar extends Component {
    render(props) {
        return(
            <div style={{borderBottom: '1px solid black'}}>
                <button className={this.props.class1} style={this.props.style1}>
                    {this.props.nav1}
                </button>
                <button>
                    {this.props.nav2}
                </button>
                <button>
                    {this.props.nav3}
                </button>
                <button>
                    {this.props.nav4}
                </button>
                <button>
                    {this.props.nav5}
                </button>
                <button>
                    {this.props.nav6}
                </button>
            </div>
        );
    }
}

// export default Navbar;