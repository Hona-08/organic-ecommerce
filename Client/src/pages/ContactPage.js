import React from 'react'
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Nav from '../components/HomeNavbar/HomeNav';
import About from '../components/AboutSection/About';

const ContactPage = () => {
  return (
    <>
      <ScrollToTop />
      <Nav/> 
      <Contact />
      <About />
      <Footer />
    </>
  );
};

export default ContactPage;