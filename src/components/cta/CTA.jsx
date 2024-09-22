import { useRef } from "react";
import "./cta.css";
import { motion, useInView } from "framer-motion";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="gpt4-cta"
      ref={ref}
      variants={{
        hid: { opacity: 0, y: 100, scale: 0.7 },
        vis: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hid"
      animate={isInView ? "vis" : ""}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="gpt4-cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt4-cta-button">
        <button>Get Started</button>
      </div>
    </motion.div>
  );
};

export default CTA;
