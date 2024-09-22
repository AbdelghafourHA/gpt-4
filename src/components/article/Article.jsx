/* eslint-disable react/prop-types */
// import { useRef } from "react";
import "./article.css";
import { motion } from "framer-motion";

const Article = ({
  imgUrl,
  date,
  title,
  variants,
  initial,
  animate,
  transition,
}) => {
  return (
    <motion.div
      className="gpt4-blog-article"
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className="gpt4-blog-article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt4-blog-article-content">
        <div>
          <p>{date} </p>
          <h3>{title} </h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </motion.div>
  );
};

export default Article;
