import styled from 'styled-components'

export const InfoBox = styled.div`
    position: absolute;
    /* min-width: 93.75rem; This will stop the body from getting smaller than the InfoContainer. */ 
    background: var(--White);
    height: 4.932rem;
    width: 100%;
    display: block;
`;
export const InfoInner = styled.div`
    box-sizing: border-box;
    padding: 0.963rem 0;
`;
export const InfoContainer = styled.div`
    position: relative;
    max-width: 90rem;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 2.45rem;
`;
export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    direction: 1tr;
    overflow: hidden;
`;
export const InfoLeftBox= styled.div`
    float: left;
    width: 33.3333%;
`;
export const InfoLeft= styled.div`
    padding: 0 1.25rem;
`;
export const Img= styled.img`
    max-width: 6.25rem;
    width: 2.5rem;
    vertical-align: middle;
    color: var(--Black);
`;
export const Span= styled.span`
    padding-left: 0.625rem;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    text-transform: capitalize;
    vertical-align: middle;
    color: var(--Black);
    overflow: hidden;
`;
export const InfoCenterBox= styled.div`
    float: left;
    width: 33.3333%;
`;
export const InfoCenter= styled.div`
    padding: 0 1.25rem;
`;
export const Image= styled.img`
    max-width: 6.25rem;
    width: 2.5rem;
    vertical-align: middle;
    color: var(--Black);
`;
export const InfoRightBox= styled.div`
    float: left;
    width: 33.3333%;
`;
export const InfoRight= styled.div`
    padding: 0 20px;
`;
export const Imaage= styled.img`
    max-width: 6.25rem;
    width: 2.5rem;
    vertical-align: middle;
    color: var(--Black);
`;
