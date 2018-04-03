import React, {Component} from 'react';
import trophy from './trophy.png';
import profiilikuva from './profiilikuva.png';
import {Image, Col, Row, Carousel} from 'react-bootstrap';


class Profile extends Component {

    render() {
        return (
            <div>
                <Row>
                    <h1 align="middle">Profile Name</h1>
                </Row>
                <br/>
                <Row>
                    <Col xs={1}/>
                <Col xs={10} md={12}>
                    <Image responsive="true" src={profiilikuva} circle/>
                </Col>
                    <Col xs={1}/>
                </Row>


                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                        </Row>

                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                        </Row>
                        <Carousel.Caption>
                            <h3>Trophies</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                            <Col xs={4} md={1}>
                                <Image responsive="true" src={trophy} rounded/>
                            </Col>
                        </Row>
                        <Carousel.Caption>
                            <h3>Trophies</h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>;

            </div>


        );
    }
}

export default Profile;