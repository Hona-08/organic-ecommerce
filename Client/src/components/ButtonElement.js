import { Link as LinkR} from 'react-router-dom'
import styled from 'styled-components';

export const Button= styled(LinkR)`
    position: relative;
    border: 0.081rem solid var(--Black);
    border-radius: 1.25rem;
    font-family: 'Chela One', cursive;
    font-size: 1.2rem;
    font-weight: 900;
    padding: 1.063rem 0.75rem;
    height: 4.3rem;
    max-width: 6.875rem;
    line-height: 3.75rem;
    min-width: 8.55rem;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: var(--Black);
    background: var(--White);
    white-space: nowrap;
    cursor: pointer;
    display: flex;

    &:active, &:focus, &:visited{
        color: var(--Black);
        text-decoration: none;
    } 

    &:hover{
        transition: all .1s ease-in;
    }

    @media screen and (max-width: 54rem){
        font-size: 1rem;
        padding: 0.813rem 0.438rem;
    }
    @media screen and (max-width: 42rem){
        display: none;
    }
`;
// Mobile button
export const MobileButton= styled('LinkR')`
    position: absolute;
    border: 0.081rem solid var(--Black);
    border-radius: 1.25rem;
    font-size: 1rem;
    font-weight: 800;
    padding: 0.938rem 0.688rem;
    height: 4.3rem;
    max-width: 6.875rem;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: var(--Black);
    background: var(--White);
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    top: -32%;

    @media screen and (min-width: 44rem){
        display: none;
    }
    &:active, &:focus, &:visited{
        color: var(--Black);
        text-decoration: none;
    } 
`;