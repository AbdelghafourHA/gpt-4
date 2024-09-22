import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/header.jpg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Header() {
  const ref = useRef(null);
  const ref01 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView01 = useInView(ref01, { once: true });
  return (
    <header className="gpt4-header section-padding">
      <div className="gpt4-header-text">
        <motion.h1
          ref={ref}
          className="gradient-text"
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Let’s Build Something Amazing With GPT-4 OpenAI
        </motion.h1>
        <motion.p
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </motion.p>
        <motion.div
          ref={ref}
          className="gpt4-header-text-email"
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>
        </motion.div>
        <motion.div
          ref={ref}
          className="gpt4-header-text-people"
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </motion.div>
      </div>
      <motion.div
        ref={ref01}
        className="gpt4-header-img"
        variants={{
          hidden: { opacity: 0, x: 300, scale: 0.7 },
          visible: { opacity: 1, x: 0, scale: 1 },
        }}
        initial="hidden"
        animate={isInView01 ? "visible" : ""}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <img src={ai} alt="ai" />
      </motion.div>
    </header>
  );
}

export default Header;
