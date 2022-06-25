import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const OverallButton=  styled(LinkR)` 
    color: var(--White);
    background: var(--Black);
    border: 0.063rem solid var(--Black);
    border-radius: 1.25rem;
    display: inline-block;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 0.8rem;
    font-weight: 200;
    padding: 0 1.25rem;
    height: 4.063rem;
    line-height: 60px;
    min-width: 7.75rem;
    top: 2.5rem;
    left: 30.588rem;
    text-transform: capitalize;
    position: relative;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    text-decoration: none;

    &:active, &:focus, &:visited{
        color: var(--Black);
        text-decoration: none;
    } 
`;