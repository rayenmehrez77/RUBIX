import React from 'react'; 
import { Link } from 'react-router-dom';
import {NavbarContainer,  Title, NavbarLinks, NavbarLink, NavbarIcons, BasketCount,  AccountIcon, SearchIcon, BasketIcon} from "./Navbar.styles"; 

const Navbar = () => {
    return (
        <NavbarContainer>
            <Link to="/">
                <Title>RUBIX</Title> 
            </Link>
            <NavbarLinks>
                <NavbarLink>
                    <Link to="/">Home</Link>
                </NavbarLink>
                <NavbarLink>
                    <Link to="/shop">Shop</Link>
                </NavbarLink>
                <NavbarLink>
                    <Link to="/collections">Collections</Link>
                </NavbarLink>
                <NavbarLink>
                    <Link to="/blogs">Blogs</Link>
                </NavbarLink>
                <NavbarLink>
                    <Link to="/contact">Contact Us</Link>
                </NavbarLink>
            </NavbarLinks> 
            <NavbarIcons>
                <AccountIcon /> 
                <SearchIcon /> 
                <BasketIcon />
                <BasketCount>0</BasketCount>
            </NavbarIcons> 
        </NavbarContainer>
    )
}

export default Navbar
