import React from 'react'
import Khalti from '../images/Khalti.png'
import {
    FooterSection,
    FooterBox,
    FooterContainer,
    FooterFlex,
    FooterContent,
    Title,
    Route,
    Img
}from './FooterElement.js'

const Footer = () => {
  return (
    <FooterSection>
        <FooterBox>
            <FooterContainer>
                <FooterFlex>
                    <FooterContent>
                        <Title>Say Yes To Organic</Title>
                        {/* <Links to='about'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            >About
                        </Links> */}
                        {/* <Route to = '/'>Shop All</Route> */}
                        <Route to = '/account'>Account</Route>
                    </FooterContent>
                    <FooterContent>
                        <Title>Service</Title>
                        {/* <Route to = '/'>FAQs</Route> */}
                        <Route to = '/contact'>Contact</Route>
                    </FooterContent>
                    <FooterContent>
                        <Title>Payment</Title>
                        <Img src={Khalti} alt= 'logo'/>
                    </FooterContent>
                </FooterFlex>
            </FooterContainer>
        </FooterBox>
    </FooterSection>
  );
}

export default Footer;