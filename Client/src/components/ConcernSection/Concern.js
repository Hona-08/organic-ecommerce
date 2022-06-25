import React from "react";
import {
  ConcernSection,
  Container,
  Header,
  Title,
  Text,
  ConcernBox,
  SpecificConcern,
  ConcernInner,
  Link,
  ConcernImg,
  ConcernContent,
  ConcernText,
  Span,
  Route,
  StLine,
} from "./ConcernElement.js";
import ChildFood from '../../Image/concern/baby-boy.png';
import Diabetes from '../../Image/concern/diabetes.png';
import Digestion from '../../Image/concern/digestion.png';
import Gluten from '../../Image/concern/gluten-free.png';
import Vegan from '../../Image/concern/vegan.png';
import preg from '../../Image/concern/preg.png';
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const Concern = () => {
  return (
    <ConcernSection id="concern">
      <Container>
        <Header>
          <Title>Shop By Concern</Title>
          <Text>We care about your health, Eat Bright Be Bright!</Text>
        </Header>
        <ConcernBox>
          <SpecificConcern>
            <ConcernInner>
              <Link to="/product/Digestion">
                <ConcernImg src={Digestion} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Digestion</Span>
                  <Route to="/product/Digestion">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Gluten_free">
                <ConcernImg src={Gluten} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Gluten free</Span>
                  <Route to="/product/Gluten_free">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Diabetes">
                <ConcernImg src={Diabetes} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Diabetes</Span>
                  <Route to="/product/Diabetes">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Child_Care">
                <ConcernImg src={ChildFood} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Child Care</Span>
                  <Route to="/product/Child_Care">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Vegan">
                <ConcernImg src={Vegan} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Vegan</Span>
                  <Route to="/product/Vegan">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Pregnancy">
                <ConcernImg src={preg} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Pregnancy</Span>
                  <Route to="/product/Pregnancy">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
          </SpecificConcern>
        </ConcernBox>
      </Container>
      <StLine />
    </ConcernSection>
  );
};
export default Concern;
