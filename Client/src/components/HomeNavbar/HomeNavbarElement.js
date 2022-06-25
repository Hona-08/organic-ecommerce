import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Header= styled.header`
    background: ${({ scrollNav}) => (scrollNav ? '#000':'transparent')};
    padding-top: 0;
    width: 100%;
    height: 6.318rem;
    background-color: var(--White);
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:40rem) {
        height: 5.118rem;
    }
    @media screen and (max-width:30rem) {
        height: 4.8rem;
    }
    @media screen and (min-width:33rem) {
        height: 4.9rem;
    }
    @media screen and (max-width:22rem) {
        height: 3.9rem;
    }
    @media screen and (min-width:41rem) {
        height: 5.918rem;
    }

`;
export const Container= styled.div`
    position: relative;
    height: 4rem;
    padding: 0 3.15rem;
    box-sizing: border-box;
    max-width: 90rem;
    margin-bottom: 0.4rem;

    @media screen and (max-width: 17.5rem){
        padding: 0 1.6rem;
    }
`;
export const HeaderMeta= styled.div`
    height: 3.708rem; 
    align-items: center;
    padding-top: 0.115rem;
    display: flex;
    flex-flow: wrap;
    justify-content: right;

    @media screen and (max-width:40rem) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    /* @media screen and (max-width:23.438rem) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    } */
`;
export const MobileIcon= styled.div`
    display: none;

    @media screen and (max-width:40rem) {
        display: block;
        text-align: left;
        margin-left: 0.625rem;
        transform-origin: 1px;
        transition: all 0.3s linear;
        cursor: pointer;  
        margin-top: 11px;
        z-index: 10;
        margin-left: 0;
    }
`;
export const Logo= styled.div`
    display: block;
    height: 3.708rem; 
    margin: 0;
    text-align: center;
    justify-content: center;
    position: relative;
    left: -42.41rem;

    @media screen and (max-width:40rem) {
        position: relative;
        right: 2rem; 
    }
    @media screen and (max-width:30rem) {
        width: 1.6125rem;
        right: 5.2rem;
        bottom: 0.2rem;
    } 
    @media screen and (max-width:49rem) {
        position: relative;
        right: 7.7rem; 
    } 
    @media screen and (min-width:52rem) {
        position: relative;
        right: 37.7rem; 
    } 
`;
export const Img= styled.img`
    width: 15.8125rem;

    @media screen and (max-width:22rem) {
        width: 12.4rem;
        position: relative;
        left: 1.3rem;
    }
    @media screen and (min-width:33rem) {
        position: relative;
        left: 2.1rem;
    }
    @media screen and (min-width:48rem) {
        position: relative;
        left: 15.7rem;
    }
    /* @media screen and (min-width:51rem) {
        position: relative;
        left: 13rem;
    } */
`;
export const HeaderMetaRight= styled.div`
    display: flex;
    margin-top: 1rem;
    align-items: left;
    justify-content: flex-end;
    z-index: 1;

    @media screen and (max-width:40rem) {
        width: 4rem;
        padding-left: 0.4rem;
    }
    @media screen and (max-width:30rem) {
        position: relative;
        left: 2.8rem;
    } 
    @media screen and (min-width:33rem) {
        position: relative;
        left: 2.5rem;
    }
    @media screen and (max-width:22rem) {
        left: 1.6rem;
        position: relative;
        top: -0.2rem;
    }
    @media screen and (min-width:51rem) {
        position: relative;
        left: 1.3rem;
    }  
    
`;
export const Button= styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 0.325rem;

    @media screen and (max-width:27rem) {
        margin-left: 0rem;
    }
`;
export const ButtonIcon= styled.button`
    background-color: transparent;
    border: none;
`;
export const HeaderNav= styled.div`
    position: relative;
    font-family: 'Arimo', sans-serif;
    font-weight: 400;
    height: 2rem;

    @media screen and (max-width:40rem) {
        display: none;
    }
`;
export const NavMenu= styled.ul`
    display: flex;
    justify-content: center;
    list-style: none; 
    margin: 0;
    height: 2rem;
    padding: 0 2.15rem; 
`;
export const NavItem= styled.li`
    font-size: 0.936rem;
    text-align: justify;
`;
export const NavLinks= styled(LinkS)`
    text-decoration: none;
    display: inline;
    min-width: max-content;
    padding: 0.625rem;
    margin-left: 1.0925rem;
    color: var(--Dark_Gray); 
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: var(--Bright_Blue);
    }
    /* &:hover::before{
        opacity: 1;
        transform: scaleX(1);
    } */
    @media screen and (max-width:48rem){
        margin-left: 0.0525rem;
    }  
    @media screen and (max-width:30rem){
        margin-left: 0.025rem
    }
    &:active, &:focus, &:visited{
        text-decoration: none;
    }     
`;
export const NavRoute= styled(LinkR)`
    text-decoration: none;
    display: inline;
    min-width: max-content;
    padding: 0.625rem;
    color: var(--Dark_Gray); 
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:not(:first-child){
        margin-left: 1.0925rem;
    } 
    &:hover{
        color: var(--Bright_Blue);
    }
    &:hover::before{
        opacity: 1;
        transform: scaleX(1);
    }
    @media screen and (max-width:48rem){
        margin-left: 0.0525rem;
    }  
    @media screen and (max-width:30rem){
        margin-left: 0.025rem
    }  
    &:active, &:focus, &:visited{
        color: var(--Black);
        text-decoration: none;
    }   
`;
