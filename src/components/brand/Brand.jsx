import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Brand = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="gpt4-brand section-padding"
      variants={{
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : ""}
      transition={{ duration: 0.6 }}
    >
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div ref={ref}>
        <img src={shopify} alt="shopify" />
      </div>
    </motion.div>
  );
};

export default Brand;
