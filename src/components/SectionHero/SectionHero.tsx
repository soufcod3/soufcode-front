import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import rightImg from "images/about-hero-right.png";
import { SearchIcon } from "@heroicons/react/outline";

export interface SectionHeroProps {
  className?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  heading = "Discover, collect, and sell extraordinary NFTs ",
  subHeading = "Discover the most outstanding NTFs in all topics of life. Creative your NTFs and sell them",
}) => {
  return (
    <div
      className={`nc-SectionHero relative ${className} text-center`}
      data-nc-id="SectionHero"
    >
      <div className="flex justify-center">
        <div className="w-screen max-w-full xl:max-w-xl space-y-5 lg:space-y-7">
          <h2 className="!leading-tight font-semibold text-neutral-900  dark:text-neutral-100 mb-5">
            {heading}
          </h2>
          <span className="text-base xl:text-lg text-neutral-6000 dark:text-neutral-400 max-w-lg">
            {subHeading}
          </span>
          {/* <div className="pt-7 flex justify-center space-x-4">
            <ButtonPrimary href="/articles">
              <span className="">Voir les articles</span>
            </ButtonPrimary>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
