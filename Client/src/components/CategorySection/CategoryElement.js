import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const CategorySection= styled.div`
    width: 100%;
    height: 66.277rem;
    position: relative;
    top: 5.188rem;
    border-top-left-radius: 3.125rem;
    border-top-right-radius: 3.125rem;
    padding-bottom: 1.25rem; 
    background-color: var(--Very_Light_Gray);
`;
export const Container= styled.div`
    box-sizing: border-box;
    padding: 0 3.75rem;
    width: 100%;
    height: 66.277rem;
`;
export const Header= styled.div`
    text-align: center;
    max-width: 43.75rem;
    margin: 0 auto;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
`;
export const Title= styled.h2`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 100;
    font-size: 1.8rem;
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
export const CategoriesBox= styled.div`
    /* width: 100vw; */
    height: 55.031rem;
    position: relative;
    /* left: 20%; */
    right: -6.5%;
    padding: 0 2.15rem;
`;
export const SpecificCategory= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 87%;
    height: 100%;
    box-sizing: content-box;
    gap: 0.8rem;
`;
export const CategoryInner= styled.div`
    padding: 0 0.625rem;
`;
export const Link= styled(LinkR)`
    text-decoration: none;
    cursor: pointer;
`;
export const CategoryImg= styled.img`
    width: 100%;
    height: 20.869rem;
    border-radius: 2.313rem;
    margin-bottom: 1.25rem;
    object-fit: cover;
`;
export const CategoryContent= styled.div`
    padding: 0 1.25rem;
    text-align: center;
`;
export const CategoryText= styled.div`
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
    margin-top: 0.313rem;
    align-items: center;
    justify-content: center;

    &:link, :active, :focus, :visited{
        color: var(--Black);
    } 
`;