import React, { FC } from "react";
import Avatar from "shared/Avatar/Avatar";
import { Link } from "react-router-dom";
import { _getPersonNameRd, _getTagNameRd } from "contains/fakeData";
import Badge from "shared/Badge/Badge";

export interface PostCardMetaProps {
  className?: string;
  hiddenAvatar?: boolean;
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none"
}) => {
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm ${className}`}
      data-nc-id="PostCardMeta"
    >
      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
        dim. 12 mars 2023
      </span>
      <Badge className="mx-3" name={'Web dev'} />
    </div>
  );
};

export default PostCardMeta;
