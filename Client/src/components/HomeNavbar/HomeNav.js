import React, { useEffect } from "react";
import {
  Header,
  Container,
  HeaderMeta,
  Logo,
  Img,
  HeaderMetaRight,
  Button,
  MobileIcon,
  HeaderNav,
  NavMenu,
  NavItem,
  NavLinks,
  NavRoute,
} from "./HomeNavbarElement.js"; //importing its style
import logo from "../images/Finallogo.png";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { animateScroll as scroll } from "react-scroll";
import { bool, func } from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userAction.js";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Nav = ({ open, setOpen, show, setShow }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, success } = userLogin;
  //passing or defining values here

  const toggleHome = () => {
    //for scrolling to the top when logo is clicked
    scroll.scrollToTop();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Header>
        <Container>
          <HeaderMeta>
            <MobileIcon open={open} onClick={() => setOpen(!open)}>
              {" "}
              {/* triggering open function */}
              <MenuIcon />
            </MobileIcon>
            <Logo>
              <Link to="/">
                <Img src={logo} onClick={toggleHome} alt="logo" />
              </Link>
            </Logo>
            <HeaderMetaRight>
              {/* <Button>
                <SearchOutlinedIcon />
              </Button> */}
              {userInfo ? (
                // <div class="dropdown">
                //   <button
                //     class="btn btn-secondary dropdown-toggle"
                //     type="button"
                //     id="dropdownMenuButton1"
                //     data-bs-toggle="dropdown"
                //     aria-expanded="false"
                //   >
                //     {userInfo.name}
                //   </button>
                //   <ul
                //     class="dropdown-menu"
                //     aria-labelledby="dropdownMenuButton1"
                //   >
                //     {userInfo.isAdmin && (
                //       <li>
                //         <Link class="dropdown-item" to="/admin/product">
                //           Product
                //         </Link>
                //       </li>
                //     )}
                //     <li>
                //       <a class="dropdown-item" href="#" onClick={handleLogout}>
                //         Logout
                //       </a>
                //     </li>
                //   </ul>
                // </div>
                <NavDropdown title={userInfo.name} id="adminmenu">
                  {/* <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer> */}
                  {userInfo.isAdmin && (
                    <LinkContainer to="/admin/product">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                  )}
                  {userInfo.isAdmin && (
                    <LinkContainer to="/admin/order">
                      <NavDropdown.Item>Order</NavDropdown.Item>
                    </LinkContainer>
                  )}
                  {/* <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer> */}
                  <LinkContainer to="/#" onClick={handleLogout}>
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <Button show={show} onClick={() => setShow(!show)}>
                  <PermIdentityOutlinedIcon />
                </Button>
              )}

              {userInfo&&userInfo.isAdmin ? (
                ""
                ):(
                <Button>
                <LinkContainer to="/cart">
                  <ShoppingCartOutlinedIcon />
                </LinkContainer>
              </Button>
                )}
            </HeaderMetaRight>
          </HeaderMeta>
        </Container>
        <HeaderNav>
          <NavMenu>
            <NavItem>
              <NavRoute to="/shopall">Shop All </NavRoute>
            </NavItem>
            <NavItem>
              <NavLinks
                to="category"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Shop By Category{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="concern"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Shop By Concern
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                {" "}
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavRoute
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                {" "}
                Contact{" "}
              </NavRoute>
            </NavItem>
          </NavMenu>
        </HeaderNav>
      </Header>
    </>
  );
};
Nav.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
Nav.propTypes = {
  show: bool.isRequired,
  setShow: func.isRequired,
};
export default Nav;
