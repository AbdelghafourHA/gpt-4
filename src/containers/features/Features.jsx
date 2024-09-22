import "./features.css";
import Feature from "../../components/feature/Feature";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featuresData = [
  {
    dur: 0.6,
    del: 0.1,
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    dur: 0.6,
    del: 0.2,
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    dur: 0.6,
    del: 0.3,
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    dur: 0.6,
    del: 0.4,
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="gpt4-features section-padding" id="features">
      <div className="gpt4-features-heading" ref={ref}>
        <motion.h1
          className="gradient-text"
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          transition={{ duration: 0.6 }}
        >
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </motion.h1>
        <motion.p
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Request Early Access to Get Started
        </motion.p>
      </div>
      <div className="gpt4-features-container">
        {featuresData.map((item, index) => {
          return (
            <Feature
              key={index}
              title={item.title}
              text={item.text}
              del={item.del}
              dur={item.dur}
              hidden={{ opacity: 0, x: 150 }}
              visible={{ opacity: 1, x: 0 }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Features;
