import React from "react";
import {
  MemberSection,
  Container,
  Header,
  PageTitle,
  H2,
  Form,
  ContentContainer,
  FormGroup,
  Label,
  Input,
  P,
  ButtonL,
} from "./MemberElement.js";
import useMemberForm from "./useMemberForm";
import ValidateMemberLogic from "./ValidateMemberLogic";
import Axios from "axios"; //package axios, it is a very simple way to replicate fetch function where you can make https request

const Member = () => {
  const { handleInputs, values, handleSubmit, errors } =
    useMemberForm(ValidateMemberLogic);

  return (
    <MemberSection>
      <Container>
        <Header>
          <PageTitle>Become a member</PageTitle>
          <H2>
            Don't want to miss out on exclusive discounts, offers, launches and
            events?
          </H2>
        </Header>
        <Form onSubmit={handleSubmit} ValidateMemberLogic>
          <ContentContainer>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                class="input"
                value={values.username}
                onChange={handleInputs}
                placeholder="Type your fullname"
              />
              {errors.username && <P>{errors.username}</P>}
              {/* errors.username is true pass whatever is after that */}
            </FormGroup>
            <FormGroup>
              <Label>Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                class="input"
                value={values.address}
                onChange={handleInputs}
                placeholder="Type your Address"
              />
              {errors.username && <P>{errors.username}</P>}
              {/* errors.username is true pass whatever is after that */}
            </FormGroup>
            <FormGroup>
              <Label>Email*</Label>
              <Input
                type="email"
                name="email"
                id="email"
                class="input"
                value={values.email}
                onChange={handleInputs}
                placeholder="your@email.com"
                required=""
              />
              {errors.email && <P>{errors.email}</P>}
            </FormGroup>
            <FormGroup>
              <Label>Password*</Label>
              <Input
                type="password"
                name="password"
                id="password"
                class="input"
                value={values.password}
                onChange={handleInputs}
                placeholder="Your password"
                required=""
              />
              {errors.password && <P>{errors.password}</P>}
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password*</Label>
              <Input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                class="input"
                value={values.confirmpassword}
                onChange={handleInputs}
                placeholder="Your password"
                required=""
              />
              {errors.confirmpassword && <P>{errors.confirmpassword}</P>}
            </FormGroup>
            <ButtonL type="submit">Create Account</ButtonL>
          </ContentContainer>
        </Form>
      </Container>
    </MemberSection>
  );
};

export default Member;
