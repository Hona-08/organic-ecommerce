import styled from "styled-components";
import { Link as LinkR} from 'react-router-dom'

export const FooterSection= styled.div`
    position: relative;
    width: 100%;
    height: 13.563rem;
    display: block;
    top: 1.125rem;
`;
export const FooterBox= styled.div`
    margin: 0.625rem 4.75rem 1.25rem;
    width: 75rem;
    height: 13.563rem;
`;
export const FooterContainer= styled.div`
    position: relative;
    max-width: 90rem;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 3.75rem;
    left: 7.5rem;
    margin-top: 3.125rem;
    background-color: var(--Black);
    border-radius: 2.5rem;
`;
export const FooterFlex= styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 1.875rem;
`;
export const FooterContent= styled.div`
    width: 20.406rem;
    height: 8.521rem;
    padding-top: 2.5rem;
`;
export const Title= styled.h3`
    font-family: 'Mochiy Pop P One',sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    color: var(--White);
    cursor: grab;
    text-align: center;
    justify-content: center;
`;
// export const Links= styled(LinkS)`
//     display: flex;
//     font-family: 'Dosis', sans-serif;
//     font-size: 1.3rem;
//     font-weight: 400;
//     text-decoration: none;
//     margin-top: 0.313rem;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     cursor: pointer;

//     &:active, :focus, :visited{
//         color: var(--White);
//     } 
// `;
export const Route= styled(LinkR)`
    display: flex;
    font-family: 'Dosis', sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    text-decoration: none;
    margin-top: 0.313rem;
    align-items: center;
    justify-content: center;

    &:link, :active, :focus, :visited{
        color: var(--White);
    } 
`;
export const Img= styled.img`
    display: block;
    text-align: center;
    width: 5.463rem;
    margin: 0 auto 2rem;
`;
