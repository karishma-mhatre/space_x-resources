import React, { Component } from 'react';
import Header from '../Header/Header';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import launchpad from '../../assets/images/spacex-launchpad.jpg';
import mission from '../../assets/images/spacex-mission.jpeg';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    render() {
        return (
            <>
                <Header title="SpaceX Resources"></Header>
                <Container>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={launchpad} width="inherit" />
                        <Card.Body>
                            <Card.Title>
                                Launchpads
                            </Card.Title>
                            <Card.Text>
                                Get information about all the launchpads of SpaceX.
                            </Card.Text>
                            <Button variant="info" href="/launchpads">Get Launchpads</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={mission} width="inherit" />
                        <Card.Body>
                            <Card.Title>
                                Missions
                            </Card.Title>
                            <Card.Text>
                                Get information about all the missions of SpaceX including the payloads of each mission.
                            </Card.Text>
                            <Button variant="info" href="/missions">Get Missions</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                </Container>
            </>
        )
    }
}

export default Home;