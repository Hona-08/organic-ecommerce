import React from 'react'
import Responsible from '../images/responsible.png'
import Certified from '../images/certified.png'
import Healthy from '../images/healthy.png'
import { 
    SectionAbout,
    DetailedSection,
    AboutContainer,
    Header,
    H2,
    DetailedText,
    DetailedInner,
    Sections,
    Img,
    SectionTitle,
    SectionText
} from './AboutElement.js';
import { StLine } from '../ConcernSection/ConcernElement'
// import ScrollToTop from '../ScrollToTop/ScrollToTop'

const About = () => {
  return (
    <SectionAbout id='about'>
        <DetailedSection>
            <AboutContainer>
                <Header>
                    <H2>You are what you eat.</H2>
                    <DetailedText>
                        Here is how we make sure every food products you enjoy from us has been sourced, made and delieverd to you in most safiest way possible 
                    </DetailedText>
                </Header>
                <DetailedInner>
                    <Sections>
                        <Img src={Responsible} alt='imgone' />
                        <SectionTitle>Responsibly made</SectionTitle>
                        <SectionText> All our products are organically produced and are free of chemicals and pesticides ensuring the best possible standards and quality for products.</SectionText>
                    </Sections>
                    <Sections>
                        <Img src={Certified} alt='imgtwo' />
                        <SectionTitle>Organic</SectionTitle>
                        <SectionText> All our products are organically produced and are free of chemicals and pesticides ensuring the best possible standards and quality for products.</SectionText>
                    </Sections>
                    <Sections>
                        <Img src={Healthy} alt='imgthree' />
                        <SectionTitle>Highly Nutritional</SectionTitle>
                        <SectionText> All our products are organically produced and are free of chemicals and pesticides ensuring the best possible standards and quality for products.</SectionText>
                    </Sections>
                </DetailedInner>
            </AboutContainer>
            <StLine />
        </DetailedSection>
    </SectionAbout>
  );
}

export default About;