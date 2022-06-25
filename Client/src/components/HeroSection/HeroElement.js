import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const HeroContainer = styled.div`
    background: var(--White);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.875rem;
    height: 36.875rem;
    z-index: 1;
    box-sizing: border-box;

    @media (max-width: 22.4rem){ //mobile device     
        position: absolute;
        top: 6%;
        height: 25rem;
        width: 100%;
        margin-top: 1.125rem;
        padding: 0 0.15rem;
    }
    @media (max-width: 40rem){ //mobile device     
        margin-top: -1.563rem;
        padding: 0 0.29rem;
    }
    @media (max-width: 17.5rem){ //mobile device     
        margin-top: 0;
        padding: 0 0.10rem;
    }
`;
export const HeroBg= styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
`;
export const VideoBg= styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    overflow: hidden;
    background: var(--White);
    border-bottom-left-radius: 3.125rem;
    border-bottom-right-radius: 3.125rem;

    @media (max-width: 42rem){ 
        height: 40%; 
        width: 100%;
    }
    @media (max-width: 54rem){ 
        height: 70%; 
        width: 100%;
    }
    @media (max-width: 17.5rem){ 
        height: 60%;
        width: 100%;
        margin-top: 1.25rem;
    }
`;
export const HeroContent= styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    display: flex;
    text-align: left;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 54rem){ //mobile device 
       top: -12%;
    } 
    @media (max-width: 42rem){ //mobile device 
        display: block;
        position: relative;
        height: 245px;
        top: 41%;
        justify-content: center;
        align-items: center;
        overflow-x: hidden; 
    } 
`;
export const HeroContentInner= styled.div`
    margin: 1.25rem 7.348rem;
    color: var(--White);

    @media (max-width: 54rem){ //mobile device 
        margin-top: 0.625rem;
        width: 40rem;
    }
    @media (max-width: 64rem){
        margin: 1.25rem 7.188rem;
    }
    @media (max-width: 42rem){ //mobile device 
        color: var(--Black);
        margin: 30px 30px 0;
    }
`;
export const HeroHeading= styled.h1`
    font-weight: 200;
    margin: 0 0 0.635rem;
    color: var(--white);

    @media (max-width: 55rem){
        font-size: 1.7em;
        margin-bottom: 0.375rem;
    }
    @media (max-width: 43rem){ //mobile device 
        display: none;
    }
`;
export const HeroSubHeading= styled.h2`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-weight: 400;
    font-size: 2.6rem;
    margin: 0.125rem 0;
    color: var(--white);
    line-height: 1.5;

    @media (max-width: 55rem){
        font-size: 1.426em;
        line-height: 1.9;
    }
    @media (max-width: 43rem){ //mobile device 
        display: none;
    }
`;
export const HeroText= styled.p`
    font-weight: 300;
    margin-bottom: 1.3rem;
    font-size: 1.7rem;
    margin-top: 1rem;
    
    /* font-family: 'Oswald', sans-serif; */

    @media screen and (max-width: 54rem){
        margin-top: 0.438rem;
        margin-bottom: 1.563rem;
    }
    @media (max-width: 43rem){ //mobile device 
        display: none;
    }
`;
export const ArrowForward= styled(ArrowForwardIcon)`
    margin-left: 0.188rem;
    margin-top: 0.138rem;
    font-size: 1.875rem;
    justify-content: center;
`;
export const ArrowRight= styled(KeyboardArrowRightIcon)`
    margin-left: 0.25rem;
    margin-top: 0.175rem;
    font-size: 1.875rem;
    justify-content: center;
`;
export const HeroMobileTitle= styled.div`
    @media screen and (min-width:43rem) {
        display: none;
    }
    @media screen and (max-width: 42rem){
        font-size: 2.5em;
        display: block;
        margin-bottom: 10px;
    }
    @media screen and (max-width: 17.5rem){
        font-size: 2em;
        display: block;
        margin-bottom: 10px;
    }
`;
export const HeroMobileText= styled.div`
    @media screen and (min-width:43rem) {
        display: none;
    }
    @media screen and (max-width: 42rem){
        font-family: 'Dosis', sans-serif;
        display: block;
        padding-bottom: 10px;
    }
    @media screen and (max-width: 17.5rem){
        font-size: 0.758em;
        text-align: left;
    }
`;
export const P= styled.p`
    @media screen and (max-width: 42rem){
        margin: 0;
        font-size: 1.2em;
        line-height: 1.7;
    }
`;
