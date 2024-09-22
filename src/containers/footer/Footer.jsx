import "./footer.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Footer() {
  const ref1 = useRef(null);
  const isInView01 = useInView(ref1, { once: true });
  return (
    <div className="gpt4-footer section-padding">
      <motion.div
        className="gpt4-footer-heading"
        variants={{
          hid: { opacity: 0, y: 200 },
          vis: { opacity: 1, y: 0 },
        }}
        initial="hid"
        animate={isInView01 ? "vis" : ""}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <h1 className="gradient-text">
          Do you want to step in to the future before others
        </h1>
      </motion.div>
      <motion.div
        className="gpt4-footer-btn"
        variants={{
          hid: { opacity: 0, y: 200 },
          vis: { opacity: 1, y: 0 },
        }}
        initial="hid"
        animate={isInView01 ? "vis" : ""}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button>Request Early Access</button>
      </motion.div>
      <div className="gpt4-footer-links">
        <motion.div
          className="gpt4-footer-links-logo"
          variants={{
            hid: { opacity: 0, y: 50 },
            vis: { opacity: 1, y: 0 },
          }}
          initial="hid"
          animate={isInView01 ? "vis" : ""}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 ref={ref1}>GPT-4</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </motion.div>
        <motion.div
          className="gpt4-footer-links-div"
          variants={{
            hid: { opacity: 0, y: 50 },
            vis: { opacity: 1, y: 0 },
          }}
          initial="hid"
          animate={isInView01 ? "vis" : ""}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </motion.div>
        <motion.div
          className="gpt4-footer-links-div"
          variants={{
            hid: { opacity: 0, y: 50 },
            vis: { opacity: 1, y: 0 },
          }}
          initial="hid"
          animate={isInView01 ? "vis" : ""}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </motion.div>
        <motion.div
          className="gpt4-footer-links-div"
          variants={{
            hid: { opacity: 0, y: 50 },
            vis: { opacity: 1, y: 0 },
          }}
          initial="hid"
          animate={isInView01 ? "vis" : ""}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4>Get In Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </motion.div>
      </div>
      <motion.div
        className="gpt4-footer-copyright"
        variants={{
          hid: { opacity: 0, y: 50 },
          vis: { opacity: 1, y: 0 },
        }}
        initial="hid"
        animate={isInView01 ? "vis" : ""}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p>© 2021 GPT-4. All rights reserved.</p>
      </motion.div>
    </div>
  );
}

export default Footer;
