import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="gpt4-blog section-padding" id="blog">
      <motion.div
        className="gpt4-blog-heading"
        variants={{
          hid: { opacity: 0, x: -200 },
          vis: { opacity: 1, x: 0 },
        }}
        initial="hid"
        animate={isInView ? "vis" : ""}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="gradient-text">
          A lot is happening, We are blogging about it.
        </h1>
      </motion.div>
      <div className="gpt4-blog-container" ref={ref}>
        <div className="gpt4-blog-container-groupA">
          <Article
            variants={{
              hid: { opacity: 0, y: 100 },
              vis: { opacity: 1, y: 0 },
            }}
            initial="hid"
            animate={isInView ? "vis" : ""}
            transition={{ duration: 0.6, delay: 0.6 }}
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt4-blog-container-groupB">
          <Article
            variants={{
              hid: { opacity: 0, y: 100 },
              vis: { opacity: 1, y: 0 },
            }}
            initial="hid"
            animate={isInView ? "vis" : ""}
            transition={{ duration: 0.6, delay: 0.9 }}
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            variants={{
              hid: { opacity: 0, y: 100 },
              vis: { opacity: 1, y: 0 },
            }}
            initial="hid"
            animate={isInView ? "vis" : ""}
            transition={{ duration: 0.6, delay: 0.7 }}
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            variants={{
              hid: { opacity: 0, y: 100 },
              vis: { opacity: 1, y: 0 },
            }}
            initial="hid"
            animate={isInView ? "vis" : ""}
            transition={{ duration: 0.6, delay: 1 }}
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            variants={{
              hid: { opacity: 0, y: 100 },
              vis: { opacity: 1, y: 0 },
            }}
            initial="hid"
            animate={isInView ? "vis" : ""}
            transition={{ duration: 0.6, delay: 0.8 }}
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
