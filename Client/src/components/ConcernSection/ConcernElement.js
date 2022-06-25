import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const ConcernSection= styled.div`
    width: 100%;
    height: 35.777rem;
    position: relative;
    top: 4.688rem;
    margin-top: 1rem;
    border-top-left-radius: 3.525rem;
    border-top-right-radius: 3.525rem;
    padding-bottom: 20px;
    /* background-color: var(--Very_Light_Gray); */
`;
export const Container= styled.div`
    box-sizing: border-box;
    padding: 0 3.75rem;
    width: 100%;
    height: 35.777rem;
`;
export const Header= styled.div`
    text-align: center;
    max-width: 43.75rem;
    margin: 0 auto;
    padding-top: 2.5rem;
    padding-bottom: 2.688rem;
`;
export const Title= styled.h2`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 100;
    font-size: 2rem;
    font-stretch: normal;
    line-height: 1.1;
    margin: 0 0 0.625rem;
`;
export const Text= styled.div`
    font-family: 'Indie Flower', cursive;
    font-size: 1.5rem;
    font-weight: 300;
    font-style: normal;
    line-height: 1.56;
    text-align: center;
`;
export const ConcernBox= styled.div`
    width: 100vw;
    height: 393.90px;
    position: relative;
    left: 50.45%;
    margin-left: -50vw;
    margin-right: -50vw;
`;
export const SpecificConcern= styled.div`
    width: 100vw;
    height: 24.619rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;
export const ConcernInner= styled.div`
    padding: 0 0.425rem;
`;
export const Link= styled(LinkR)`
    text-decoration: none;
    cursor: pointer;
`;
export const ConcernImg= styled.img`
    width: 14.875rem;
    height: 17.375rem;
    border-radius: 1.688rem;
    margin-bottom: 1.25rem;
    margin-top: 1.6rem;
    background-color: var(--Gray);
    border-top-left-radius: 3.525rem;
    border-top-right-radius: 3.525rem;
`;
export const ConcernContent= styled.div`
    padding: 0 1.25rem;
    text-align: center;
`;
export const ConcernText= styled.div`
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
`;
export const Span= styled.span`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 200;
    color: var(--Black);
    cursor: grab;
`;
export const Route= styled(LinkR)`
    display: flex;
    font-family: 'Dosis', sans-serif;
    font-size: 1rem;
    text-decoration: none;
    margin-top: 5px;
    align-items: flex-start;
    justify-content: center;

    &:link, :active, :focus, :visited{
        color: var(--Black);
    } 
`;
export const StLine= styled.hr`
    width: 91%;
    background-color: var(--Very_Light_Gray);
`;