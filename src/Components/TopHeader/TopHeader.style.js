import styled, { css } from "styled-components"; 


export const TopHeaderContainer = styled.div`
    height: 3rem; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    padding: 0 5rem;
    background-color: #ccc;

    @media (max-width: 1200px) {
        justify-content: center; 
    }
`
export const TopHeaderLeft = styled.div`
    display: flex; 
    align-items: center; 
    font-size: 0.8rem;

    @media (max-width: 1200px) {
        display: none;
    }
    
`
export const Phone = styled.div`
    display: flex; 
    align-items: center; 
    margin-right: 1rem ;

    span {
        margin-left: 0.3rem; 
    }
`
export const Email = styled.div`
    display: flex; 
    align-items: center; 

    span {
        margin-left: 0.3rem; 
    }
`
export const TopHeaderMiddle = styled.div`
    margin-right: 4rem;

    span {
        text-decoration: underline; 
        margin-right: 4px;
    }

    a {
        background-color: orange; 
        padding: 2px;
        border-radius: 5px;
        cursor: pointer;
    }
`
export const TopHeaderRight = styled.div`
    > * {
        margin-right: 1rem;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`