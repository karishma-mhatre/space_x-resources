import React, { Component } from 'react';
import Header from '../Header/Header'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

class Missions extends Component {
    state = {
        isLoading: true,
        isError: false,
        missions: []
    }

    componentDidMount = () => {
        axios.get("https://api.spacexdata.com/v3/missions").then(response => {
            console.log(response);
            this.setState({
                isLoading: false,
                missions: response.data
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
            container = this.state.missions.map((mission, index) =>
                <Card key={index}>
                    <Card.Header>
                        {mission.mission_name}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {mission.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>Payloads</ListGroupItem>
                            {
                                mission.payload_ids.map((payload) => (
                                    <ListGroupItem>
                                        <Card.Link href={`/payload/${payload}`}>
                                            {payload}
                                        </Card.Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Card>
            );
        }
        return (
            <>
                <Header title="Missions"></Header>
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

export default Missions;