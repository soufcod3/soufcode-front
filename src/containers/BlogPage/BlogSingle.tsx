import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import Badge from "shared/Badge/Badge";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Comment from "shared/Comment/Comment";
import NcImage from "shared/NcImage/NcImage";
import SocialsList from "shared/SocialsList/SocialsList";
import Textarea from "shared/Textarea/Textarea";
import { Helmet } from "react-helmet";
import { _getImgRd, _getPersonNameRd, _getTitleRd } from "contains/fakeData";
import { Article } from "./SectionLatestPosts";
import axios from "axios";
import Markdown from 'markdown-to-jsx';
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const BlogSingle = () => {

  const { slug } = useParams()
  const [article, setArticle] = useState<Article|null>(null)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/articles?filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    }).then(res => {
      const article = res.data.data[0].attributes
      setArticle(article)
    })
  }, [])

  const date = DateTime.fromISO(article?.publishedAt as string, { locale: 'fr' });
  const publishedAt = date.toFormat('ccc dd MMMM yyyy');

  const categories = article?.categories?.data
  
  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          {
            categories && categories.map((fetchedCategory: any, idx) => {
              const category = fetchedCategory.attributes
              return <Badge key={idx} href="##" color={category.color} name={category.name} />
            })
          }
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            {article?.title}
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            {article?.preview || 'Preview'}
          </span>
          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
              <Avatar
                containerClassName="flex-shrink-0"
                sizeClass="w-8 h-8 sm:h-11 sm:w-11 "
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <a
                    className="block font-semibold"
                    href="/ncmaz/author/the-demo-author-slug"
                  >
                    soufcode
                  </a>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {publishedAt}
                  </span>
                  <span className="mx-2 font-semibold">·</span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    <FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;{article?.timer} min
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-1.5 sm:ml-3">
              <SocialsList />
            </div>
          </div>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert"
      >
        <Markdown>{ '' + article?.content }</Markdown>
      </div>
    );
  };

  const renderTags = () => {
    return (
      <div className="max-w-screen-md mx-auto flex flex-wrap">
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Garden
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Jewelry
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Tools
        </a>
      </div>
    );
  };

  const renderAuthor = () => {
    return (
      <div className="max-w-screen-md mx-auto ">
        <div className="nc-SingleAuthor flex">
          <Avatar sizeClass="w-11 h-11 md:w-24 md:h-24" />
          <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
              ÉCRIT PAR
            </span>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              <a href="/ncmaz/author/the-demo-author-slug">soufcode</a>
            </h2>
            <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
              There’s no stopping the tech giant. Apple now opens its 100th
              store in China.There’s no stopping the tech giant.
              <a
                className="text-primary-6000 font-medium ml-1"
                href="/ncmaz/author/the-demo-author-slug"
              >
                En savoir plus
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderCommentForm = () => {
    return (
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses (14)
        </h3>
        <form className="nc-SingleCommentForm mt-5">
          <Textarea />
          <div className="mt-2 space-x-3">
            <ButtonPrimary>Submit</ButtonPrimary>
            <ButtonSecondary>Cancel</ButtonSecondary>
          </div>
        </form>
      </div>
    );
  };

  const renderCommentLists = () => {
    return (
      <div className="max-w-screen-md mx-auto">
        <ul className="nc-SingleCommentLists space-y-5">
          <li>
            <Comment />
            <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul>
          </li>
          <li>
            <Comment />
            <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };

  const renderPostRelated = (_: any, index: number) => {
    return (
      <div
        key={index}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link to={"/blog-single"} />
        <NcImage
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          src={_getImgRd()}
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <Badge name="Categories" />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{_getTitleRd()}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {_getPersonNameRd()}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">May 20, 2021</span>
          </div>
        </div>
        <Link to={"/blog-single"} />
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16 ">
      <Helmet>
        <title>Single Blog || Ciscryp React Template</title>
      </Helmet>
      {renderHeader()}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12 "
        src={article?.main_img && 'http://localhost:1338' + article.main_img.data.attributes.url}
      />

      <div className="nc-SingleContent container space-y-10">
        {renderContent()}
        {renderTags()}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        {renderAuthor()}
        {/* {renderCommentForm()} */}
        {/* {renderCommentLists()} */}
        <div className="max-w-screen-md mx-auto border-neutral-100 dark:border-neutral-700"></div>
      </div>
      {/* <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24"> */}
        {/* <div className="container "> */}
          {/* <h2 className="text-3xl font-semibold">Related posts</h2> */}
          {/* <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {[1, 1, 1, 1].filter((_, i) => i < 4).map(renderPostRelated)}
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default BlogSingle;
