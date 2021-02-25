import React from "react";
import AboutContent from "../components/AboutContent";
import ContactContent from "../components/ContactArea/ContactSection";
import FaqSection from "../components/FAQArea/FaqSection";
import PageBanner from "../components/PageBanner";
import PartnersCarousel from "../components/PartnersCarousel";

const Contact = () => {
  return (
    <>
      <PageBanner
        pageTitle="Contact Us"
        firstText="Home"
        secondText="Contact"
        firstTextLink="/"
      />
      <ContactContent />
    </>
  );
};

export default Contact;
