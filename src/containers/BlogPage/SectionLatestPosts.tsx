import React, { FC, useCallback, useEffect, useState } from "react";
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
import axios from "axios";

//
export interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
  homeDisplay?: boolean;
}

export interface Article {
  content: string,
  createdAt: string,
  publishedAt: string,
  slug: string,
  title: string,
  updatedAt: string
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  postCardName = "card3",
  className = "",
  homeDisplay = false
}) => {

  const [fetchedArticles, setFetchedArticles] = useState<Partial<Article>[]>([])

  useEffect(() => {
    axios.get('http://localhost:1338/api/articles?populate=*', {
      headers: {
        'Authorization': 'Bearer 696c3d01867d17b577258c37eaa2898775f77879cd6705d96bab6088a02272d594c7015270398f83e4d5b0a079ce341d83bf208670eaa56a16e6da1267875f8f447897e7cd2452e06329f4cd353774e179fa5a1fce4021ad82dbdc40648c06e41a6d0d79a532b7d138d81353547b0fb18fa4822da3e46ce574bb59d3d11b7b4e'
      }
    }).then(res => {
      console.log('fetchArticles', res.data.data)
      setFetchedArticles(res.data.data)
    })
  }, [])

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
              homeDisplay && fetchedArticles ?
                fetchedArticles.map((articleData: any, idx: any) => (
                  <Card3Small key={idx} className="" article={articleData.attributes} />
                ))
                :
                fetchedArticles?.map((articleData: any, idx: any) => (
                  <Card3Small key={idx} className="" article={articleData.attributes} />
                  // <Card3 key={idx} className="" article={article}/>
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
