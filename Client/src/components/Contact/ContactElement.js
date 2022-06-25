import styled from "styled-components";

export const ContactBody= styled.div`
    min-height: 200vh;
`;

export const ContactSection= styled.div`
    position: absolute; 
    width: 100%;
    height: 978.750px;
    padding-top: 60px;
    background-color: var(--Extra_LG); 
`;
export const ContactContainer= styled.div`
    position: absolute;
    width: 980px;
    height: 1830.670px;
    margin-left: 112px; 
`;
export const ContactLeft= styled.div`
    position: relative;
    justify-self: start;
    left: -105px;
    width: 380px;
`;
export const CircleImg= styled.img`
    width: 247px;
    height: 240px;
    -o-object-fit: contain;
    object-fit: cover;
    overflow: hidden;
`;
export const H2Left= styled.div`
    position: relative; 
    width: 250px;
    height: 188px;
    margin-bottom: 33px;
    bottom: 188px;
    left: 3px;
`;
export const Text= styled.h2`
    height: auto;
    position: absolute; 
    font-family: 'Oswald', sans-serif; 
    font-weight: 700; 
    font-size: 58px;
    line-height: 1.3;
    margin-bottom: 0;
    top: -4px;
`;
export const H2Right= styled.div`
    position: relative;
    width: 370px;
    height: 183px;
    margin-bottom: 33px;
    margin-top: 0;
    left: 820px;
    bottom: 400px;
    justify-self: start;
    text-align: start;
`;
export const RightText= styled.h2`
    height: auto;
    position: absolute; 
    font-family: 'Oswald', sans-serif; 
    font-weight: 700; 
    font-size: 55px;
    line-height: 1.3;
    text-align: right;
`;
export const Block= styled.img`
    position: absolute;
    width: 52px;
    height: 64px;
    top: 265px;
`;
export const P= styled.p`
    position: relative;
    width: 560px;
    height: 75px;
    bottom: 364px;
    margin-bottom: 27px;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.7;
`;
export const H3Container= styled.div`
    position: relative;
    bottom: 370px;
    width: 419px;
    height: 28px;
    margin-top: 39px;
    margin-bottom: 39px;
`;
export const H3= styled.span`
    font-family: 'Open Sans', sans-serif; 
    font-size: 24.63px;
    font-weight: 900;
    line-height: normal;
    color: var(--Black);
`;
export const Details= styled.div`
    display: grid;
    grid-template-rows: repeat(3,1fr);
    position: relative;
    bottom: 389px;
    width: 360px;
    height: 56px;
    justify-self: start;
    align-self: start;
`;
export const Items= styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 590px;
    height: 56px;
    margin: 0; 
`;
export const Img= styled.img`
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 2.5rem;
    height: auto;
    object-fit: contain;
    margin-right: 20px;
`;
export const ItemsText= styled.p`
    font-family: 'Oswald', sans-serif; 
    padding-top: 2rem;
    font-weight: 200; 
    font-size: 24px;
`;
export const Enquiry= styled.div`
    width: 1950px;
    height: 1060px;
    position: relative;
    background-color: var(--White);
    right: 155px;
    bottom: 190px;
`;
export const EnquiryContainer= styled.div`
    width: 700px;
    height: 640px;
    position: absolute;
    bottom: 380px; 
    justify-content: center;
    align-items: center;
    left: 330px;
    background-color: var(--Very_Light_Gray);
    border-radius: 2.25rem;
`;
export const Heading= styled.h1`
    width: 630px;
    height: auto;
    margin-top: 28px;
    margin-bottom: 20px;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 300;
    font-size: 2.5rem;
    position: relative;
    left: 110px;
`;
export const FormData= styled.div`
    width: 630px;
    height: 650px;
    position: relative;
    left: 65px;
`;
export const FormDataCompartments= styled.div`
    display: grid;
    grid-template-rows: 1fr;
    height: auto;
    width: 100%;
    grid-template-columns: repeat(2,1fr);
`;
export const FormComponent= styled.div`
    position: static;
    display: grid;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows: repeat(5) 1fr;
    grid-template-columns: 100%;
`;
export const FormComponentInner = styled.div`
    display: flex;
    min-height: 25px;
    flex-direction: column;
    margin-top: 42px;
    margin-bottom: 1px;
`;
export const FormComponentSpecific= styled.div`
    position: relative;
    height: 40px;
    width: 260px;
`;
export const Input= styled.input`
    width: 100%;
    height: 43px;
    padding-left: 22px;
    padding-top: 3px;
    padding-right: 3px;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid var(--Black);
    box-shadow: var(--White, 0 0 0 transparent);
    margin: 0;
    border-color: var(--Black);
    background-color: var(--White);
    border-radius: 15px;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    color: var(--Black);
`;
export const ComponentMessage= styled.div`
    height: 170px;
    width: 578px;
    position: relative;
    bottom: 440px;
    margin-top: 12px;
    left: 65px;
`;
export const NormalButton= styled.div`
    color: var(--White);
    background: var(--Black);
    border: 0.063rem solid var(--Black);
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 0.8rem;
    font-weight: 200;
    padding: 0 1.25rem;
    height: 3.593rem;
    line-height: 60px;
    max-width: 9.75rem;
    bottom: 410px;
    left: 16.798rem; 
    text-transform: capitalize;
    position: relative;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    text-decoration: none;

    &:active, :focus, :visited{
        color: var(--White);
    } 
`;