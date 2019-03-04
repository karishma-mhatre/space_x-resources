import React, { Component } from 'react';

class Payload extends Component {
    render() {
        console.log("payload rendered");
        return (
            <>
            <h1>Payload</h1>
            <h2>{this.props.match.params.id}</h2>
            </>
        );
    }
}

export default Payload;