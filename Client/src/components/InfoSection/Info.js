import React from 'react';
import { 
    InfoBox,
    InfoInner,
    InfoContainer,
    InfoContent,
    InfoLeftBox,
    InfoLeft,
    Img,
    Span,
    InfoCenterBox,
    InfoCenter,
    Image,
    InfoRightBox,
    InfoRight,
    Imaage
} from './InfoElement.js';
import Widerange from '../images/widerange.png'
import Certified from '../images/CertifiedOrganic.png'
import Chemicalfree from '../images/pesticide.png'

const Info = () => {
  return(
    <InfoBox>
      <InfoInner>
        <InfoContainer>
            <InfoContent>
              <InfoLeftBox>
                <InfoLeft>
                  <Img src={Widerange} alt='imgone' />
                  <Span>Wide range of Organic Products</Span>
                </InfoLeft>
              </InfoLeftBox> 
              <InfoCenterBox>
                <InfoCenter>
                  <Image src={Certified} alt='imgtwo' />
                  <Span>Certified Organic </Span>
                </InfoCenter>
              </InfoCenterBox>    
              <InfoRightBox>
                <InfoRight>
                  <Imaage src={Chemicalfree} alt='imgthree' />
                  <Span>Free of Chemicals/pesticides/additives </Span>
                </InfoRight>
              </InfoRightBox>    
            </InfoContent>
        </InfoContainer>
      </InfoInner>
  </InfoBox>
  );
}
export default Info;
