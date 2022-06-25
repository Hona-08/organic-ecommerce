import React from 'react'
import Nav from '../components/HomeNavbar/HomeNav';
import Footer from '../components/Footer/Footer';
import Member from '../components/Member/Member';
import ScrollToTop from '../components/ScrollToTop';
import About from '../components/AboutSection/About';

const AccountPage = () => {
  return (
    <> 
      <ScrollToTop />
      <Nav /> 
      <Member />
      <About />
      <Footer />
    </>
  );
};

export default AccountPage;