import React, { Component } from 'react';
import Logo from '../../../assets/img/berkas-png-6.png';
import User from '../../../assets/img/user.png';
import Text from 'react-texty';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Row, UncontrolledTooltip } from 'reactstrap';

class Board extends Component{
    render(){
        return(
            <div className="animated fadeIn">
                <Row className="align-items-center">
                    <Col col="6" sm="4" md="2" className="mb-3 mb-xl-40">
                        <img src={Logo} alt="board"
                        style={{
                            height: 150,
                            width: 150,
                        }}></img>
                        <img src={User} alt="user"
                        style={{
                            height: 50,
                            width: 50,
                        }}></img>
                        <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                         User's Name
                        </UncontrolledTooltip>
                        <img src={User} alt="user"
                        style={{
                            height: 50,
                            width: 50,
                        }}></img>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Board;