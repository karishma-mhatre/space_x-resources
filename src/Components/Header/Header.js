import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
            <h2 className="header__title">{this.props.title}</h2>
            </div>
        )
    }
}

export default Header;