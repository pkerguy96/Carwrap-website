import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { expertises } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";

const ExperienceCard = ({ expertise }) => (
  <VerticalTimelineElement
    className={"lolipop"}
    contentStyle={{
      background: `url(${expertise.image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "300px",
      position: "relative",
      transition: "color 0.3s", // Add a transition for a smooth effect
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    iconStyle={{ background: expertise.image }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={expertise.image}
          alt={expertise.title}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div
      className="fadeverticalelement"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",

        backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity as desired
      }}
    ></div>

    <div
      key={expertise.id}
      className="flex justify-center text-center  uppercase text-xl tracking-wide sm:tracking-wider		 h-full"
    >
      <h1>{expertise.title}</h1>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {expertises.map((expertise, index) => (
            <ExperienceCard key={index} expertise={expertise} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");
