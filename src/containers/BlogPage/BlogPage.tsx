import React from "react";
import { Helmet } from "react-helmet";
import SectionAllPosts from "./SectionAllPosts";

const BlogPage: React.FC = () => {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      <Helmet>
        <title>Tous les articles</title>
      </Helmet>

      {/* ======== ALL SECTIONS ======== */}
      <div className="container relative">
        <SectionAllPosts className="py-16 lg:py-28" />
      </div>
    </div>
  );
};

export default BlogPage;
