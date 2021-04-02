import styled from "styled-components"; 
import {BiSearch} from 'react-icons/bi'; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { MdShoppingBasket } from "react-icons/md"; 


export const NavbarContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    padding: 1rem 2rem; 

    a {
        text-decoration: none;
        color: #000;
    }
` 

// export const SignInSignUp = styled.div`
//     a {
//         font-size: 1rem; 
//     }
// `
export const Title = styled.h1`
    letter-spacing: 3px;
`
export const NavbarLinks = styled.ul`
    display: flex; 
    align-items: center; 
`
export const NavbarLink = styled.li`
    margin-right: 2.5rem; 
    list-style: none; 

    a {
        text-decoration: none; 
        color: #000; 
    }
`
export const NavbarIcons = styled.div`
    position: relative;
    & > * {
        font-size: 2.5rem;  
        margin-right: 1rem; 
        cursor: pointer;
    } 

`
export const AccountIcon = styled(BsFillPersonFill)`
    border-right: 2px solid #000; 
    padding-right: 0.5rem; 
 
`
export const SearchIcon = styled(BiSearch)`
     border-right: 2px solid #000; 
    padding-right: 0.5rem; 
` 
export const BasketIcon = styled(MdShoppingBasket)`
`
export const BasketCount = styled.span` 
    position: absolute; 
    top: 0; 
    right: -10px; 
    font-size: 1rem; 
    background-color: #000; 
    color: #fff;
    padding: 0.3rem; 
    border-radius: 999px; 
    height: 25px; 
    width: 25px;
    display: flex; 
    align-items: center; 
    justify-content: center;
    
`