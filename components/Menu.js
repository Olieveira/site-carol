import React from 'react'
import { Img } from 'react-image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import Logo from '../src/logo.png'
import Image from 'next/image';


const Menu = () => {

    return (
        <div>
            <Navbar color="dark" dark expand="md" fixed="top" style={{ backgroundImage: `linear-gradient(to right, #1d1a1a, #957653)`, }}>
                
                <NavbarBrand href="/">
                    <Image src={Logo} width={'135'} height={'55.11'} layout={'responsive'}  />
                </NavbarBrand>

                <Collapse navbar style={{flexGrow: 0}}>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink  href="/">
                                Página Inicial
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="sobre">
                                Sobre
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Menu;