import styled from "styled-components";

export const MemberSection= styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 1140px;
    box-sizing: border-box;
    padding-top: 165px;
    padding-bottom: 165px;
    background-color: var(--Baby_Blue);
`;
export const Container= styled.div`
    position: relative;
    left: 120px;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    color: var(--White);
`;
export const Header= styled.div`
    width: 669.750px;
    height: 143.156px;
    margin: 0 245.125px;
    text-align: center;
`;
export const PageTitle= styled.h1`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 200;
    font-size: 3.7rem;
    font-style: normal;
    line-height: 1.03;
    margin-bottom: 45px;
    color: var(--White);
`;
export const H2= styled.h2`
    width: 505px;
    margin-left: 0;
    text-align: center;
    font-family: 'Dosis', sans-serif;
    font-size: 1.2rem;
    position: relative;
    left: 75px;
    line-height: 1.5;
`;
export const Form= styled.form`
    height: 624px;
    width: 1160px;
    margin-top: 75px;
`;
export const ContentContainer= styled.div`
    width: 500px;
    height: 109px;
    margin: 0 330px;
`;
export const FormGroup= styled.div`
    margin-bottom: 20px;
`
export const Label= styled.label`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    text-align: left;
    display: block;
    margin-bottom: 5px;
    margin-left: 15px;
    background-color: transparent;
`;
export const Input = styled.input`
    width: 450px;
    height: 58px;
    padding:  0 20px;
    background: var(--Very_Light_Gray);
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 20px;
    display: inline-block;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    outline: none;
    vertical-align: middle;
    width: 100%;
    min-width: 100px;
    box-sizing: border-box;
`;
export const P= styled.p`
    color: var(--Red);
    font-size: 1rem;
    margin: 0;
`;
export const ButtonL= styled.button` 
    width: 500px;
    height: 58px;
    color: var(--White);
    background: var(--Black);
    border: 0.063rem solid var(--Black);
    border-radius: 1.25rem;
    display: inline-block;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 1rem;
    font-weight: 200;
    padding: 0 1.25rem;
    line-height: 60px;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
    text-align: center;

    &:active, :focus, :visited{
        color: var(--White);
    } 
`;
