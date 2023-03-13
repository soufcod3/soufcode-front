import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import NcImage from "shared/NcImage/NcImage";

export interface Card3SmallProps {
  className?: string;
  article?: any;
}

const Card3Small: FC<Card3SmallProps> = ({ className = "h-full", article }) => {

  console.log('article', article)

  return (
    <div
      className={`nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
      data-nc-id="Card3Small"
    >
      <Link
        to={article.slug}
        className=" absolute inset-0"
        title={"title"}
      ></Link>
      <div className="relative space-y-2">
        <PostCardMeta/>
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Link
            to={article.slug}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            {article.title}
          </Link>
        </h2>
        <p>{article.content}</p>
      </div>
      <Link
        to={article.slug}
        title={"title"}
        className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`}
      >
        <div className={`w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`}>
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
            src={'http://localhost:1338' + article.preview_img.data.attributes.formats.thumbnail.url}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card3Small;
