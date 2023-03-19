import React, { FC, useEffect, useState } from "react";
import Card3Small from "./Card3Small";
import WidgetHeading1 from "./WidgetHeading1";
import { FetchedArticle } from "interfaces";
import axios from "axios";
import TrendingPost from "./TrendingPost";

export interface WidgetPostsProps {
  className?: string;
  homeDisplay?: boolean
}

const WidgetPosts: FC<WidgetPostsProps> = ({
  className = "bg-neutral-50 dark:bg-neutral-800",
  homeDisplay = false
}) => {

  const [fetchedArticles, setFetchedArticles] = useState<FetchedArticle[]>([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/articles?sort=publishedAt%3Adesc&filters[isTrending]=1&populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    }).then(res => {
      console.log('fetchArticles', res.data.data)
      setFetchedArticles(res.data.data)
    })
  }, [])

  return (
    <div
      className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetPosts"
    >
      <WidgetHeading1
        title="Les + populaires 🔥"
        viewAll={{ label: "Voir tous", href: "/articles" }}
      />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {fetchedArticles.map((fetchedArticle, index) => {
          const article = fetchedArticle.attributes
          return <TrendingPost
            className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={index}
            article={article}
            homeDisplay={homeDisplay}
          />
        })}
      </div>
    </div>
  );
};

export default WidgetPosts;
