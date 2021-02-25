import React from "react";
import AboutContent from "../components/AboutContent";
import Features from "../components/Features/Features";
import PageBanner from "../components/PageBanner";
import PartnersCarousel from "../components/PartnersCarousel";
import Services from "../components/Services/Services";
import TeamCard from "../components/TeamCards/TeamCards";

const about = () => {
  return (
    <>
      <PageBanner
        pageTitle="About Us"
        firstText="Home"
        secondText="About Us"
        firstTextLink="/"
      />
      <AboutContent />
      <Features />
      <Services />
      <PartnersCarousel />
      <TeamCard />
    </>
  );
};

export default about;
