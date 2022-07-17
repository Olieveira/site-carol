import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Jumbotron, Carousel, NavbarBrand, NavLink, NavbarToggler, Collapse, Nav, NavItem, Accordion, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Container, Row, Col } from 'reactstrap';

import Image from 'next/image';
import logo from '.././src/Logo.png';
import Img from 'react-image';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md" style={{ backgroundImage: `linear-gradient(to right, #1d1a1a, #957653)`, marginBottom: 25 }}>
                <Container fluid>
                    <Row style={{alignItems: 'center'}}>
                        <Col  style={{justifyContent: 'left', alignItems: 'center'}}>
                        <div style={{minWidth: '100px', width: '200px', padding: '10px 0'}}>
                            <Image
                                src={logo}
                                width={'50px'}
                                height={'20px'}
                                layout={'responsive'}
                                alt={'Studio Caroline Vitória'}
                                placeholder={'blur'}
                            />
                            </div>
                        </Col>
                        <NavbarToggler onClick={toggle} />
                        <Col>
                            <Collapse  style={{justifyContent: 'right'}} isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar style={{color: '#2c2521', fontWeight: 'bold'}}>

                                    <NavItem className='text-right, link-hd'>
                                        <NavLink href="/">Página Inicial</NavLink>
                                    </NavItem>

                                    <NavItem className='link-hd'>
                                        <NavLink href="sobre">Sobre</NavLink>
                                    </NavItem>

                                    <NavItem className='link-hd'>
                                        <NavLink href="contatos">Contatos</NavLink>
                                    </NavItem>

                                    <style>{`.link-hd={
                                        color: '#2c2521';
                                        font-Weight: 'bold';
                                    }`}

                                    </style>

                                </Nav>

                            </Collapse>
                        </Col>
                    </Row>
                </Container>

            </Navbar>
        </div >
    );
}

export default Menu;