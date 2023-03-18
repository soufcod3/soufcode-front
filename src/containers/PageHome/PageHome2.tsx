import React from "react";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import { Helmet } from "react-helmet";
import SectionLargeSlider from "./SectionLargeSlider";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionGridFeatureNFT2 from "./SectionGridFeatureNFT2";
import SectionMagazine8 from "components/SectionMagazine8";
import SectionSliderCardNftVideo from "components/SectionSliderCardNftVideo";
import SectionSliderCollections2 from "components/SectionSliderCollections2";
import SectionHero from "components/SectionHero/SectionHero";
import Badge from "shared/Badge/Badge";

import Vector1 from "images/Vector1.png";
import SectionLatestPosts from "containers/BlogPage/SectionLatestPosts";
import ButtonPrimary from "shared/Button/ButtonPrimary";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Ciscryp || NFT Marketplace Template</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      {/* <BgGlassmorphism /> */}

      <div className="container relative mt-5 mb-5 sm:mb-24 lg:mt-20 lg:mb-5">
        {/* SECTION HERO */}
        {/* SECTION HERO */}
        <SectionHero
          className="pb-5"
          heading={
            <>
              <p className="text-xl">Bienvenue sur mon blog 👋🏼</p>
              <span className="text-3xl md:text-4xl xl:text-5xl">
                Ici je partage mes <span className="text-green">découvertes</span> en
              </span>
            </>
          }
          subHeading={<div className="flex justify-center">
            <Badge
              href={"/"}
              className="mx-3 text-lg cursor-pointer"
              color="gray"
              name={"Développement web"}
            />
            <Badge
              href={"/"}
              className="mx-3 text-lg cursor-pointer"
              color="blue"
              name={"DevOps"}
            />
            <Badge
              href={"/"}
              className="mx-3 text-lg cursor-pointer"
              color="purple"
              name={"UX/UI"}
            />
          </div>}
        />
        <SectionLatestPosts className="pt-16 lg:pt-28" homeDisplay={true} />
      </div>

      {/* SECTION LAERGE SLIDER */}


    </div>
  );
}

export default PageHome;
