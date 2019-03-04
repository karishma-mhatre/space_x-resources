import React, { Component } from 'react';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import axios from 'axios';
import './launchpad.css'

class LaunchPads extends Component {
    state = {
        isLoading: true,
        isError: false,
        launchpads: []
    }

    componentDidMount = () => {
        axios.get("https://api.spacexdata.com/v3/launchpads").then(response => {
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
        let content;
        if (this.state.isLoading) {
            content = <Alert variant="dark">Loading</Alert>
        } else if (this.state.isError) {
            content = <Alert variant="danger">Sorry. Could not load.</Alert>
        }
        else {
            let launchpads = this.state.launchpads.map((launchpad, index) =>{
                let launchpadStatusColor;
                switch(launchpad.status) {
                    case "active":
                        launchpadStatusColor = "lightgreen";
                    break;
                    case "retired":
                        launchpadStatusColor = "red";
                    break;
                    case "under construction":
                        launchpadStatusColor = "yellow";
                    break;
                    default: 
                        launchpadStatusColor = "yellow";
                }
                return (<Card key={index}>
                    <Card.Header>
                        {launchpad.location.name}
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>
                            Status: {launchpad.status} <span className="status-dot" style={{backgroundColor: launchpadStatusColor}}></span>
                        </Card.Subtitle>
                        <Card.Text>
                            {launchpad.details}
                        </Card.Text>
                    </Card.Body>
                </Card>)
                }
            );

            content = <CardColumns>{launchpads}</CardColumns>
        }
        return (
            <>
                <Header title="LaunchPads"></Header>
                <Container>
                        {
                            content
                        }
                </Container>
            </>
        )
    }
}

export default LaunchPads;