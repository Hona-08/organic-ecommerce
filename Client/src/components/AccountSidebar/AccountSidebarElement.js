import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const ASidebarContainer= styled.div`
    position: fixed;
    right: -100%;
    z-index: 9999;
    top: 0;
    background: var(--Very_Light_Gray);
    height: 740px;
    padding: 19px 30px;
    max-width: 61.995rem;
    width: 100%;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
`;
export const Header= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    width: 360px;
`;
export const Icon= styled.div`
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
`;
export const Text= styled.p`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 0.8rem;
    font-weight: 200; 
`;
export const Hr= styled.hr`
    position: relative;
    width: 38%;
    background-color: var(--Very_Light_Gray);
    bottom: 10px;
    right: 284px;
`;
export const Form= styled.form`
    width: 366px;
    height: 315px;
    padding-top: 25px;
    background: transparent;
`;
export const FormGroup= styled.div`
    width: 366px;
    height: 130px;
    margin-bottom: 5px;
`;
export const P= styled.p`
    color: var(--Red);
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 3px;
`;
export const Label= styled.label`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    text-align: left;
    display: block;
    margin-bottom: 18px;
    margin-left: 15px;
`;
export const Input = styled.input`
    width: 240px;
    height: 58px;
    padding:  0 20px;
    background: var(--White);
    border: 1px solid rgba(0,0,0,.5);
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
    color: var(--Black) ;
`;
export const FormRecovery= styled.div`
    width: 240px;
    height: 18px;
`;
export const Route= styled(LinkR)`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    text-decoration: none;
    padding-left: 20px;

    &:link, :active, :focus, :visited{
        color: var(--Black);
    } 
`;
export const FormButtonLogin= styled.button`
    width: 366px;
    height: 58px;
    color: var(--White);
    background: var(--Black);
    border: 0.063rem solid var(--Black);
    border-radius: 1.25rem;
    display: inline-block;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 0.8rem;
    font-weight: 200;
    padding: 0 1.25rem;
    line-height: 60px;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
    text-align: center;

    &:link, :active, :focus, :visited{
        color: var(--White);
    }  
`;
export const FormButtonCreate= styled(LinkR)`
    width: 366px;
    height: 58px;
    color: var(--Black);
    background: var(--White);
    border: 0.063rem solid var(--White);
    border-radius: 1.25rem;
    display: inline-block;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 0.8rem;
    font-weight: 200;
    padding: 0 1.25rem;
    line-height: 60px;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
    text-align: center;

    &:link, :active, :focus, :visited{
        color: var(--Black);
    }  
`;