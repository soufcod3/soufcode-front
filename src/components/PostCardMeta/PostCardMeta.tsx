import React, { FC } from "react";
import Badge from "shared/Badge/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Category, FetchedCategory } from "interfaces";

export interface PostCardMetaProps {
  className?: string,
  hiddenAvatar?: boolean,
  fetchedCategories?: FetchedCategory[],
  publishedAt?: string
  timer?: number
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  fetchedCategories,
  publishedAt,
  timer
}) => {

  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm ${className}`}
      data-nc-id="PostCardMeta"
    >
      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
        {publishedAt}
      </span>
      <span className="mx-2 font-semibold">·</span>
      <span className="text-neutral-700 dark:text-neutral-300">
        <FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;{timer} min
      </span>
      {
        fetchedCategories && fetchedCategories.map((fetchedCategory, idx) => {
          const category: Category = fetchedCategory.attributes
          return <Badge key={idx} className="mx-3" color={category.color} name={category.name} />
        })
      }
    </div>
  );
};

export default PostCardMeta;
