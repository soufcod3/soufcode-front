import React, { FC, useEffect, useState } from "react";
import Heading from "components/Heading/Heading";
import Card3 from "./Card3";
import WidgetNewsLetter from "./WidgetNewsletter";
import { Link } from "react-router-dom";
import Card3Small from "./Card3Small";
import axios from "axios";
import { FetchedArticle, FetchedCategory } from "interfaces";
import WidgetPosts from "./WidgetPosts";

export interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
  homeDisplay?: boolean;
}

export interface FetchedCategories {
  data: FetchedCategory[]
}

export interface Article {
  title: string
  preview: string
  main_img: any
  content: string
  slug: string
  createdAt: string
  publishedAt: string
  updatedAt: string
  categories: FetchedCategories
  timer: number
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  className = "",
  homeDisplay = false
}) => {

  const [fetchedArticles, setFetchedArticles] = useState<FetchedArticle[]>([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/articles?sort=publishedAt%3Adesc&pagination[pageSize]=3&populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    }).then(res => {
      console.log('fetchArticles', res.data.data)
      setFetchedArticles(res.data.data)
    })
  }, [])

  return (
    <div className={`nc-SectionLatestPosts relative ${className}`} >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          {
            homeDisplay ?
              <Heading><Link to={"/articles"}>Mes 3 derniers articles</Link></Heading>
              :
              <Heading>Tous les articles</Heading>
          }

          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {
              fetchedArticles &&
                fetchedArticles.map((fetchedArticle: any, idx: any) => {
                  const article: Article = fetchedArticle.attributes
                  return <Card3Small key={idx} article={article} />
                })
              }
          </div>
          {
            homeDisplay &&
            <div className="flex flex-col mb-10 mt-7 md:mt-7 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              {/* <Pagination /> */}
              <Link to={"/articles"}>
                <p className="flex items-center font-bold text-green">Tous les articles&nbsp;<i className="las la-arrow-right text-xl"></i></p>
              </Link>
            </div>
          }
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetPosts homeDisplay />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
