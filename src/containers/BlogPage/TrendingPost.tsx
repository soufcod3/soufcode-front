import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Badge from "shared/Badge/Badge";
import NcImage from "shared/NcImage/NcImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Category, FetchedCategory } from "interfaces";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export interface TrendingPostProps {
  className?: string;
  article: any;
  homeDisplay?: boolean
}

const TrendingPost: FC<TrendingPostProps> = ({ className = "h-full", article, homeDisplay }) => {

  const fetchedCategories = article.categories.data

  return (
    <div
      className={`nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
      data-nc-id="Card3Small"
    >
      <div className="relative space-y-2">
        <div
          className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm ${className} p-0`}
          data-nc-id="PostCardMeta"
        >
          <span className="text-neutral-700 dark:text-neutral-300">
            <FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;{article.timer} min
          </span>
          {
            fetchedCategories && fetchedCategories.map((fetchedCategory: FetchedCategory, idx: number) => {
              const category: Category = fetchedCategory.attributes
              return <Badge key={idx} className="mx-3" color={category.color} name={category.name} />
            })
          }
        </div>
        <Link
          to={homeDisplay ? `articles/${article.slug}` : article.slug}
          className="line-clamp-2 capitalize"
          title={article.title}
        >
          <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
            {article.title}
          </h2>
          <p>{article.preview}</p>
        </Link>
      </div>
      <Link
        to={homeDisplay ? `articles/${article.slug}` : article.slug}
        title={article.title}
        className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`}
      >
        <div className={`w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`}>
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
            src={'http://localhost:1338' + article.main_img.data.attributes.url}
          />
        </div>
      </Link>
    </div >
  );
};

export default TrendingPost;
