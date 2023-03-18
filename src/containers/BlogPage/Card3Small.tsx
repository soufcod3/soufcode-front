import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Badge from "shared/Badge/Badge";
import NcImage from "shared/NcImage/NcImage";
import { DateTime } from "luxon";

export interface Card3SmallProps {
  className?: string;
  article?: any;
}

const Card3Small: FC<Card3SmallProps> = ({ className = "h-full", article }) => {

  const date = DateTime.fromISO(article?.publishedAt, { locale: 'fr' });
  const publishedAt = date.toFormat('ccc dd MMMM yyyy');

  const fetchedCategories = article?.categories.data

  return (
    <div
      className={`nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
      data-nc-id="Card3Small"
    >
      <div className="relative space-y-2">
        <PostCardMeta publishedAt={publishedAt} fetchedCategories={fetchedCategories} timer={article?.timer}/>
        <Link
          to={`articles/${article?.slug}`}
          className="line-clamp-2 capitalize"
          title={article?.title}
        >
          <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
            {article?.title}
          </h2>
          <p>{article?.preview}</p>
        </Link>
      </div>
      <Link
        to={`articles/${article?.slug}`}
        title={article?.title}
        className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`}
      >
        <div className={`w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`}>
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
            src={'http://localhost:1338' + article?.main_img.data.attributes.url}
          />
        </div>
      </Link>
    </div >
  );
};

export default Card3Small;
