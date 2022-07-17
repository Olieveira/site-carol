import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Jumbotron ,Carousel, NavbarBrand, NavLink, NavbarToggler, Collapse, Nav, NavItem, Accordion, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Container } from 'reactstrap';

import Image from 'next/image';
import logo from '.././src/logo.png';
import Img from 'react-image';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md" style={{ backgroundImage: `linear-gradient(to right, #1d1a1a, #957653)`, }}>
                <Container>

                    <Image
                        src={logo}
                        height={"100px"}
                        width={"250px"}
                        alt={'Studio Caroline Vitória'}
                        layout={'responsive'}
                        placeholder={'blur'}
                    />

                    <NavbarToggler onClick={toggle} />

                    <Collapse isOpen={isOpen} navbar>
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

                </Container>

            </Navbar>
        </div >
    );
}

export default Menu;