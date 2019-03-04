import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log("payload rendered");
        return (
            <>
            <h2>{this.props.title}</h2>
            </>
        )
    }
}

export default Header;