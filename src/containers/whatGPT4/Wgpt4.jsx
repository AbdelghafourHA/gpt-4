import "./wgpt4.css";
import Feature from "../../components/feature/Feature";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Wgpt4() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="gpt4-wgpt4 section-margin"
      id="wgpt4"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 300, scale: 0.5 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : ""}
      transition={{ duration: 0.6 }}
    >
      <div className="gpt4-wgpt4-feature">
        <Feature
          title="What is GPT-4?"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt4-wgpt4-heading">
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt4-wgpt4-container">
        <Feature
          title="Chatbots"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </motion.div>
  );
}

export default Wgpt4;
