import "./possibility.css";
import Poss from "../../assets/posibility.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Possibility() {
  const ref1 = useRef(null);
  const isInView01 = useInView(ref1, { once: true });
  return (
    <div className="gpt4-possibility section-padding" id="possibility">
      <motion.div
        className="gpt4-possibility-image"
        variants={{
          hid: { opacity: 0, x: -300 },
          vis: { opacity: 1, x: 0 },
        }}
        initial="hid"
        animate={isInView01 ? "vis" : ""}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <img src={Poss} alt="possibilityImg" />
      </motion.div>
      <motion.div
        className="gpt4-possibility-content"
        variants={{
          hid: { opacity: 0, x: 300 },
          vis: { opacity: 1, x: 0 },
        }}
        initial="hid"
        animate={isInView01 ? "vis" : ""}
        transition={{ duration: 0.6 }}
      >
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 ref={ref1}>Request Early Access to Get Started</h4>
      </motion.div>
    </div>
  );
}

export default Possibility;
