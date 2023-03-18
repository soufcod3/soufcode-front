import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link } from "react-router-dom";
import Badge from "shared/Badge/Badge";
import { _getImgRd, _getTagNameRd, _getTitleRd } from "contains/fakeData";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";

export interface Card3Props {
  className?: string;
  article: any
}

const Card3: FC<Card3Props> = ({ className = "h-full", article }) => {
  return (
    <div
      className={`nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group ${className}`}
      data-nc-id="Card3"
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-5 mb-4">
          <Badge name={'PHP'} />
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl`}
            >
              <Link
                to={article.slug}
                className="line-clamp-2 capitalize"
                title={"title"}
              >
                {article.title}
              </Link>
            </h2>
            <div className="hidden sm:block sm:mt-2">
              <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                {article.preview}
              </span>
            </div>
          </div>
          <PostCardMeta />
        </div>
      </div>

      <div
        className={`block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0`}
      >
        <Link
          to={article.slug}
          className={`block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 `}
        >
          <NcImage src={article.preview_img && 'http://localhost:1338' + article.preview_img.data.attributes.url} containerClassName="absolute inset-0" />
        </Link>
      </div>
    </div>
  );
};

export default Card3;
