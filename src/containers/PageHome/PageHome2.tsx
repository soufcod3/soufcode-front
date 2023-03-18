import React from "react";
import { Helmet } from "react-helmet";
import SectionHero from "components/SectionHero/SectionHero";
import Badge from "shared/Badge/Badge";
import SectionLatestPosts from "containers/BlogPage/SectionLatestPosts";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Blog de soufcode</title>
      </Helmet>

      <div className="container relative mt-5 mb-5 sm:mb-24 lg:mt-20 lg:mb-5">
        <SectionHero
          className="pb-5"
          heading={
            <>
              <p className="text-xl">Bienvenue sur mon blog 👋🏼</p>
              <span className="text-3xl md:text-4xl xl:text-5xl">
                Ici je partage mes <span className="text-green">découvertes</span> en
              </span>
            </>
          }
          subHeading={<div className="flex justify-center">
            <Badge
              href={"/"}
              className="mx-3 text-lg cursor-pointer"
              color="gray"
              name={"Développement web"}
            />
            <Badge
              href={"/"}
              className="mx-3 text-lg cursor-pointer"
              color="blue"
              name={"DevOps"}
            />
            <Badge
              href={"/"}
              className="mx-3 text-lg cursor-pointer"
              color="purple"
              name={"UX/UI"}
            />
          </div>}
        />
        <SectionLatestPosts className="pt-16 lg:pt-28" homeDisplay={true} />
      </div>

    </div>
  );
}

export default PageHome;
