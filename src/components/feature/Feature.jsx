import "./feature.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function Feature({ title, text, del, dur, hidden, visible }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="gpt4-features-container-feature"
      ref={ref}
      variants={{
        hidden: hidden,
        visible: visible,
      }}
      initial="hidden"
      animate={isInView ? "visible" : ""}
      transition={{ duration: dur, delay: del }}
    >
      <div className="gpt4-features-container-feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt4-features-container-feature-text">
        <div>
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Feature;
