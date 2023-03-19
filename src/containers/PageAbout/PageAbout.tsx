import rightImg from "images/about-hero-right.jpg";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import SectionHero from "./SectionHero";
import Heading from "components/Heading/Heading";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>A Propos</title>
      </Helmet>

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Enchanté."
          btnText=""
          subHeading="En pleine reconversion, je me suis fixé le challenge de partager régulièrement mes découvertes sous forme d'articles et de vidéos."
        />

        <div className="nc-SectionFounder relative">
          <Heading
            desc="Vous pouvez me contacter par mail à <a href='mailto:someone@example.com' target='blank'><strong>soufcode@gmail.com</strong></a>"
          >
            Pour me joindre
          </Heading>
        </div>
        
      </div>
    </div>
  );
};

export default PageAbout;
