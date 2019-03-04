import React, { Component } from 'react';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class LaunchPads extends Component {
    state = {
        isLoading: true,
        isError: false,
        launchpads: []
    }

    componentDidMount = () => {
        axios.get("https://api.spacexdata.com/v3/launchpads").then(response => {
            console.log(response);
            this.setState({
                isLoading: false,
                launchpads: response.data
            })
        }, error => {
            this.setState({
                isLoading: false,
                isError: true
            })
        });
    }

    render() {
        let container;
        if (this.state.isLoading) {
            container = <Alert>Loading</Alert>
        } else if (this.state.isError) {
            container = <Alert>Sorry. Could not load.</Alert>
        }
        else {
            container = this.state.launchpads.map((launchpad, index) =>
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>
                            {launchpad.location.name}
                        </Card.Title>
                        <Card.Subtitle>
                            {launchpad.status}
                        </Card.Subtitle>
                        <Card.Text>
                            {launchpad.details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        }
        return (
            <>
                <Header title="LaunchPad"></Header>
                <Container>
                    <CardColumns>
                        {
                            container
                        }
                    </CardColumns>
                </Container>
            </>
        )
    }
}

export default LaunchPads;