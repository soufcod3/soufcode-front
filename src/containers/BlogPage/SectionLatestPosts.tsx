import React, { FC } from "react";
import Heading from "components/Heading/Heading";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import WidgetCategories from "./WidgetCategories";
import WidgetPosts from "./WidgetPosts";
import Card3 from "./Card3";
import WidgetNewsLetter from "./WidgetNewsletter";
import { Link } from "react-router-dom";
import Card12 from "./Card12";
import Card3Small from "./Card3Small";

//
export interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
  homeDisplay?: boolean;
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  postCardName = "card3",
  className = "",
  homeDisplay = false
}) => {
  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          {
            homeDisplay ? 
            <Heading>Mes derniers articles 🔬</Heading>
            :
            <Heading>Tous les articles</Heading>
          }

          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {
              homeDisplay ?
                [1, 1, 1].map((_, index) => (
                  <Card3Small key={index} className="" />
                ))
                :
                [1, 1, 1].map((_, index) => (
                  <Card3 key={index} className="" />
                ))
            }
          </div>
          {homeDisplay &&
            <div className="flex flex-col mb-10 mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              {/* <Pagination /> */}
              <Link to={"/articles"}>
                <p className="flex items-center font-bold">Parcourir les articles&nbsp;<i className="las la-arrow-right text-xl"></i></p>
              </Link>
            </div>
          }
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetNewsLetter />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
