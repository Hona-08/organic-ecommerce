import React, {useState} from 'react'
import Stline from '../images/Line.png'
import Circle from '../images/CircleF.png'
import Phone from '../images/telephone.png'
import MobilePhone from '../images/phone-call.png'
import Gmail from '../images/gmail.png'
import { 
  ContactBody,
  ContactSection,
  ContactContainer,
  ContactLeft,
  CircleImg,
  H2Left,
  Text,
  H2Right,
  RightText,
  Block,
  P,
  H3Container,
  H3,
  Details,
  Items,
  Img,
  ItemsText,
  Enquiry,
  EnquiryContainer,
  Heading,
  FormData,
  FormDataCompartments,
  FormComponent,
  FormComponentInner,
  FormComponentSpecific,
  Input,
  ComponentMessage,
  NormalButton
} from './ContactElement.js';

const Contact = () => {
  const [userData, setUserData] = useState({    //total fields are saved here as objects  //initial data jancha user variable ko //setUser= updated function/modeified function
    name: "", location: "", email:"", number: "", message: ""  //whenever the user is typing whatever is writtened will be save in the corresponding property ma will be stored 
  });

  let name, value;       //taking variable as a name and we havenot written const here because it will be changing 

  const handleContactInputs = (e) => {   //e: event object
    console.log(e);
    name = e.target.name;      
    value= e.target.value;      // whatever user is writing tyo milyo

    setUserData({...userData, [name]:value}); //spread operator used to make an exact copy of an existing array, here it is used to required every data of user by creating an object   
    //square bracket is used here to get dynamic data  
  }
  return (
    <ContactBody>
    <ContactSection>
      <ContactContainer>
        <ContactLeft>
          <CircleImg src={Circle} alt="Img"/>
        </ContactLeft>
        <H2Left>
          <Text>NICE TO MEET YOU.</Text> 
        </H2Left>
        <H2Right>
          <RightText>HERE TO MEET YOUR NEEDS.</RightText> 
        </H2Right>
        <Block img src= {Stline} />
        <P>We are happy to answer any questions you have.  <br/> You are just one step away from gathering  <br/>  the answer. </P>
        <H3Container>
          <H3>FEEL FREE TO CONNECT WITH US</H3>
        </H3Container>
        <Details>
          <Items>
            <Img src= {Phone} />
            <ItemsText> Telephone Number 025 - 55555</ItemsText>
          </Items>
          <Items>
            <Img src= {MobilePhone} />
            <ItemsText> Mobile Number 981111111</ItemsText>
          </Items> 
          <Items>
            <Img src= {Gmail} />
            <ItemsText> Queries/Feedback : sayyestoorganic@gmail.com</ItemsText>
          </Items>
        </Details>
        <Enquiry/>
          <EnquiryContainer>
            <Heading>Hello Tw Bhanus</Heading>
            <FormData>
              <FormDataCompartments>
                <FormComponent> 
                  <FormComponentInner> 
                    <FormComponentSpecific>
                      <Input 
                      id='name'
                      type="text" 
                      name='name'
                      placeholder="YOUR NAME" 
                      maxlength="100" 
                      aria-label="YOUR NAME" 
                      value={userData.name} 
                      onChange={handleContactInputs}
                      />
                    </FormComponentSpecific>
                  </FormComponentInner> 
                </FormComponent>

                <FormComponent> 
                  <FormComponentInner> 
                    <FormComponentSpecific>
                      <Input 
                      id="location"
                      type="text" 
                      name="location"
                      placeholder="YOUR LOCATION"
                      maxlength="100" 
                      aria-label="YOUR NAME" 
                      value={userData.location} 
                      onChange={handleContactInputs} 
                      />
                    </FormComponentSpecific>
                  </FormComponentInner> 
                </FormComponent>
                <FormComponent> 

                  <FormComponentInner> 
                    <FormComponentSpecific>
                      <Input 
                      id="email"
                      type="email" 
                      name="email"  
                      placeholder="YOUR EMAIL" 
                      required="true" 
                      maxlength="250" 
                      value={userData.email} 
                      onChange={handleContactInputs}
                      />
                    </FormComponentSpecific>
                  </FormComponentInner> 
                </FormComponent>
                
                <FormComponent> 
                  <FormComponentInner> 
                    <FormComponentSpecific>
                      <Input 
                      id="number"
                      type="number" 
                      name="contact"
                      placeholder="YOUR NUMBER" 
                      maxlength="50" 
                      aria-label="YOUR CONTACT" 
                      value={userData.contact} 
                      onChange={handleContactInputs}
                      /> 
                    </FormComponentSpecific>
                  </FormComponentInner> 
                </FormComponent>
              </FormDataCompartments>
            </FormData> 
            <ComponentMessage>
              <Input style={{height: '153px'}}
              id="message"
              type="text" 
              name="message"
              maxlength="1000" 
              placeholder="MESSAGE" 
              value={userData.message} 
              onChange={handleContactInputs}
              />
            </ComponentMessage>
            <NormalButton to='/'>
              SUBMIT
            </NormalButton>
          </EnquiryContainer>
      </ContactContainer>
    </ContactSection>
    </ContactBody>
  );
}
export default Contact;