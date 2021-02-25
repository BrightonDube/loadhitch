import React from "react";
import AboutContent from "../components/AboutContent";
import FaqSection from "../components/FAQArea/FaqSection";
import PageBanner from "../components/PageBanner";
import PartnersCarousel from "../components/PartnersCarousel";

const FAQ = () => {
  return (
    <>
      <PageBanner
        pageTitle="FAQ"
        firstText="Home"
        secondText="FAQ"
        firstTextLink="/"
      />
      <FaqSection />
      <PartnersCarousel />
    </>
  );
};

export default FAQ;
