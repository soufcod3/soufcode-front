import React, { FC, useEffect, useState } from "react";
import Heading from "components/Heading/Heading";
import WidgetNewsLetter from "./WidgetNewsletter";
import { Link } from "react-router-dom";
import axios from "axios";
import NcImage from "shared/NcImage/NcImage";
import { _getImgRd, _getPersonNameRd, _getTitleRd } from "contains/fakeData";
import Badge from "shared/Badge/Badge";
import { Article, FetchedArticle } from "interfaces";
import { extractFromArticle } from "utils/extractFromArticle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import WidgetPosts from "./WidgetPosts";

export interface SectionAllPostsProps {
  className?: string;
  postCardName?: "card3";
  homeDisplay?: boolean;
}

const renderPostRelated = (article: Article) => {
  // console.log('post related article', article)

  const { image, categories, publishedAt, timer } = extractFromArticle(article)

  return (
    <div
      key={article.slug}
      className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
    >
      <Link to={article.slug} />
      <NcImage
        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        src={`${process.env.REACT_APP_STRAPI_URL + image.url}`}
      />
      <div>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
      </div>
      <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
        {
          categories.map((category, idx) => <Badge key={idx} name={category.name} color={category.color} />)
        }
        <h2 className="block text-lg font-semibold text-white ">
          <span className="line-clamp-2">{article.title}</span>
        </h2>
        <div className="flex">
          <span className="font-normal truncate">{publishedAt}</span>
          <span className="mx-1.5 font-medium">·</span>
          <span className="text-neutral-700 dark:text-neutral-300">
            <FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;{timer} min
          </span>
        </div>
      </div>
      <Link to={article.slug} />
    </div>
  );
};

const SectionAllPosts: FC<SectionAllPostsProps> = ({
  className = "",
}) => {

  const [fetchedArticles, setFetchedArticles] = useState<FetchedArticle[]>([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/articles?&sort=publishedAt%3Adesc&populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    }).then(res => {
      console.log('fetchArticles', res.data.data)
      setFetchedArticles(res.data.data)
    })
  }, [])

  return (
    <div className={`nc-SectionAllPosts relative ${className}`} >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>Tous les articles</Heading>
          <div className={`grid gap-2 md:gap-8 grid-cols-1`}>
            <div className="mt-10 grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-3">
              {fetchedArticles.map((fetchedArticle) => {
                const article = fetchedArticle.attributes
                return renderPostRelated(article)
              })}
            </div>
          </div>
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
        <WidgetPosts />
        </div>
      </div>
    </div>
  );
};

export default SectionAllPosts;
