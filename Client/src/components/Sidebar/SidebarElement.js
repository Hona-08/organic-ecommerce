import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const SidebarContainer= styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99; 
    max-width: 21.875rem;
    width: 100%;
    height: 100%;
    pointer-events: cursor;
    background: var(--White); 
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s ease;
    border-bottom-left-radius: 3.125rem;
    border-bottom-right-radius: 3.125rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    
    @media screen and (min-width: 64rem){
        display: none;
    }
`;
export const Icon= styled.div`
    background-color: transparent;
    width: 17.5rem;
    height: 2.083rem;
    border: none;
    cursor: pointer;
    padding: 0.75rem 1.875rem 0;
    margin-top: 0.875rem;
    text-align: left;

    @media screen and (min-width: 64rem){
        display: none;
    }
`;
export const SidebarWrapper= styled.div`
    padding: 0 1.875rem;
    flex: 1;
    width: 17.5rem;
    height: 43.458rem;
    overflow-y: auto;
    color: var(--White);
    @media screen and (min-width: 64rem){
        display: none;
    }
`;
// export const Overlay= styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height:100%;
//     background: var(--Gray);
//     z-index: 999; 
// //     /* overflow: hidden; */
// `;
export const SidebarMenu= styled.ul`
    list-style: none;
    padding: 0;

    @media screen and (min-width: 64rem){
        display: none;
    }
`;
export const SidebarLink= styled(LinkS)`
    margin-bottom: 1rem;
    font-family: 'Lobster Two', cursive;
    font-weight: 500;
    font-size: 1.345rem;
    color: var(--Black);
    cursor: pointer;

    @media screen and (min-width: 64rem){
        display: none;
    }
    &:active,:hover{
        color: var(--Bright_Blue);
    }
    &:active,:hover::before{
        opacity: 1;
        transform: scaleX(1);
    }
`;
export const SidebarRoute= styled(LinkR)`
    margin-bottom: 1rem;
    font-family: 'Lobster Two', cursive; 
    font-weight: 500;
    font-size: 1.345rem;
    color: var(--Black);
    cursor: pointer;
    text-decoration: none;

    @media screen and (min-width: 64rem){
        display: none;
    }
    &:hover{
        color: var(--Bright_Blue);
    }
    &:hover::before{
        opacity: 1;
        transform: scaleX(1);
    }
`;