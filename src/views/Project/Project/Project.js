import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, 
    Col, 
    Row, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalHeader,
    ButtonGroup,
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FormGroup,
    Label,
    Input, 
} from 'reactstrap';

class Projects extends Component {

    constructor(props){
        super(props);

        this.state = {
            modal: false,
            dropdownOpen: new Array(6).fill(false),
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });

        this.setState({
          modal: !this.state.modal,
          dropdownOpen: newArray,
        });
    }

    render(){
        return(
            <div className="animated fadeIn">
                <Col col="6" sm="2" md="2" className="mb-3 mb-xl-40">
                    <Button onClick={this.toggle} 
                    style={{
                        height: 50,
                        width: 200,
                        alignItems: 'center',
                    }}
                    color="primary">
                        <p style={{fontSize: 20 }}><b>Add New Project</b></p>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Create Project</ModalHeader>
                            <ModalBody>
                                    <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                        <Label htmlFor="name">What's your project name?</Label>
                                        <Input type="text" id="name" placeholder="Enter your project name" required />
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                        <Label htmlFor="ccnumber">When will your project will be due?</Label>
                                        <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                        </FormGroup>
                                    </Col>
                                    </Row>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>

                    </Button>
                </Col>

                <Row className="align-items-center">
                    <Col col="4" sm="1" md="2" className="mb-3 mb-xl-0">
                        <ButtonGroup vertical color="primary">
                            <ButtonDropdown isOpen={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }} >
                                <DropdownToggle caret>
                                ...
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Dropdown Link</DropdownItem>
                                    <DropdownItem>Dropdown Link</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                            <Link to={'/project/board'}>
                                <Button 
                                style={{
                                    height: 240,
                                    width: 220
                                }}
                                color="primary" size="lg">
                                    
                                    <p style={{fontSize: 22 }}><b>Project 1</b></p>
                                    <hr/>
                                    <p style={{fontSize: 20, textAlign: 'left' }}>  Developer</p>
                                    <p style={{fontSize: 20, textAlign: 'left' }}>  Have 4 Board</p>
                                    <p style={{fontSize: 18, textAlign: 'right' }}>  Jan, 10th 2020</p>
                                </Button>
                                </Link>
                            </ButtonGroup>
                    </Col>
                    <Col col="4" sm="1" md="2" className="mb-3 mb-xl-0">
                        <Button 
                        style={{
                            height: 210,
                            width: 200
                        }}
                        color="primary" size="lg">
                            <p style={{fontSize: 22 }}><b>Ini Project</b></p>
                            <hr/>
                            <p style={{fontSize: 20, textAlign: 'left' }}>  UI/UX Designer</p>
                            <p style={{fontSize: 20, textAlign: 'left' }}>  Have 6 Board</p>
                            <p style={{fontSize: 18, textAlign: 'right' }}>  Jan, 10th 2020</p>
                        </Button>
                    </Col>
                    <Col col="4" sm="1" md="2" className="mb-3 mb-xl-0">
                        <Button 
                        style={{
                            height: 210,
                            width: 200
                        }}
                        color="primary" size="lg">
                            <p style={{fontSize: 22 }}><b>Cula</b></p>
                            <hr/>
                            <p style={{fontSize: 20, textAlign: 'left' }}>  Backend</p>
                            <p style={{fontSize: 20, textAlign: 'left' }}>  Have 2 Board</p>
                            <p style={{fontSize: 18, textAlign: 'right' }}>  Jan, 10th 2020</p>
                        </Button>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Projects;