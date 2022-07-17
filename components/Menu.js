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
                    <Row>
                        <Col style={{maxWidth: 200}} xs sm md>
                            <Image sm={'100px'} md={'700px'} lg={'1000px'} xl={'500px'}
                                src={logo}
                                width={'200px'}
                                height={'100px'}
                                alt={'Studio Caroline Vitória'}
                                placeholder={'blur'}
                                sizes={10}
                            />
                        </Col>
                        <NavbarToggler onClick={toggle} />
                        <Col xs sm md>
                            <Collapse isOpen={isOpen} navbar className=''>
                                <Nav className="mr-auto" navbar>

                                    <NavItem className='text-right'>
                                        <NavLink href="/">Página Inicial</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="sobre">Sobre</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="contatos">Contatos</NavLink>
                                    </NavItem>

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