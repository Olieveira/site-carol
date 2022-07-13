import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Container } from 'reactstrap';
import Image from 'next/image';


const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md" style={{ backgroundImage: `linear-gradient(to right, #1d1a1a, #957653)`, }}>
                <Container>
                    <NavbarBrand href='/'>Studio Caroline Vitória</NavbarBrand>

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
                                <NavLink href="sobre">Sobre</NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>

                </Container>

            </Navbar>
        </div >
    );
}

export default Menu;