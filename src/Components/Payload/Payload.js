import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Payload extends Component {
    state = {
        isLoading: true,
        isError: false,
        payload: null
    }

    componentDidMount = () => {
        let url = "https://api.spacexdata.com/v3/payloads/";
        axios.get(url + this.props.match.params.id).then(response => {
            this.setState({
                isLoading: false,
                payload: response.data
            })
        }, error => {
            this.setState({
                isLoading: false,
                isError: true
            })
        })
    }

    render() {
        let content;
        if (this.state.isLoading) {
            content = <Alert variant="dark">Loading...</Alert>
        } else if (this.state.isError) {
            content = <Alert variant="danger">Sorry. Could not load.</Alert>
        }
        else {
            content = <Tabs defaultActiveKey="PayloadInfo" >
                <Tab eventKey="PayloadInfo" title="Payload Info">
                    <Container className="info-wrapper">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <td>
                                        Parameter
                                </td>
                                    <td>
                                        Value
                                </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>{this.state.payload.payload_id}</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>{this.state.payload.payload_type}</td>
                                </tr>
                                <tr>
                                    <td>Orbit</td>
                                    <td>{this.state.payload.orbit}</td>
                                </tr>
                                <tr>
                                    <td>Manufacturer</td>
                                    <td>{this.state.payload.manufacturer}</td>
                                </tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td>{this.state.payload.nationality}</td>
                                </tr>
                                <tr>
                                    <td>Mass(Kg.)</td>
                                    <td>{this.state.payload.payload_mass_kg}</td>
                                </tr>
                                <tr>
                                    <td>Mass(Lbs.)</td>
                                    <td>{this.state.payload.payload_mass_lbs}</td>
                                </tr>
                                <tr>
                                    <td>Reused</td>
                                    <td>{this.state.payload.reused ? "Yes" : "No"}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Tab>
                <Tab eventKey="orbitParams" title="Orbit Params">
                    <Container className="info-wrapper">
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <td>
                                        Parameter
                                </td>
                                    <td>
                                        Value
                                </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>apoapsis (Km)</td>
                                    <td>{this.state.payload.orbit_params.apoapsis_km}</td>
                                </tr>
                                <tr>
                                    <td>Arg Of Pericenter</td>
                                    <td>{this.state.payload.orbit_params.arg_of_pericenter}</td>
                                </tr>
                                <tr>
                                    <td>Eccentricity</td>
                                    <td>{this.state.payload.orbit_params.eccentricity}</td>
                                </tr>
                                <tr>
                                    <td>Epoch</td>
                                    <td>{new Date(this.state.payload.orbit_params.epoch).toDateString()}</td>
                                </tr>
                                <tr>
                                    <td>Inclination (Deg.)</td>
                                    <td>{this.state.payload.orbit_params.inclination_deg}</td>
                                </tr>
                                <tr>
                                    <td>Lifespan (Yrs.)</td>
                                    <td>{this.state.payload.orbit_params.lifespan_years}</td>
                                </tr>
                                <tr>
                                    <td>Longitude</td>
                                    <td>{this.state.payload.orbit_params.longitude}</td>
                                </tr>
                                <tr>
                                    <td>Mean Anomaly</td>
                                    <td>{this.state.payload.orbit_params.mean_anomaly}</td>
                                </tr>
                                <tr>
                                    <td>Mean Motion</td>
                                    <td>{this.state.payload.orbit_params.mean_motion}</td>
                                </tr>
                                <tr>
                                    <td>Periapsis (Km.)</td>
                                    <td>{this.state.payload.orbit_params.periapsis_km}</td>
                                </tr>
                                <tr>
                                    <td>Period min</td>
                                    <td>{this.state.payload.orbit_params.period_min}</td>
                                </tr>
                                <tr>
                                    <td>Raan</td>
                                    <td>{this.state.payload.orbit_params.raan}</td>
                                </tr>
                                <tr>
                                    <td>Reference System</td>
                                    <td>{this.state.payload.orbit_params.reference_system}</td>
                                </tr>
                                <tr>
                                    <td>Regime</td>
                                    <td>{this.state.payload.orbit_params.regime}</td>
                                </tr>
                                <tr>
                                    <td>Semi Major Axis (Km.)</td>
                                    <td>{this.state.payload.orbit_params.semi_major_axis_km}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Tab>
                <Tab eventKey="customers" title="Customers">
                    <Container className="info-wrapper">
                        <ListGroup>
                            {
                                this.state.payload.customers.map((customer, index) => (
                                    <ListGroupItem key={index}>{customer}</ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Container>
                </Tab>
            </Tabs>
        }
        return (
            <>
                <Header title={`Payload ${this.props.match.params.id}`}></Header>
                {
                    content
                }
            </>
        );
    }
}

export default Payload;