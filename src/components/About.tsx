import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className="flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase text-gray-500 text-2xl tracking-[20px]">
        About
      </h3>
      <div className="flex items-center">
        <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src="https://res.cloudinary.com/deuhv7bop/image/upload/v1700820557/hbfg7bnarcliiw1b8eb8.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] sm:mt-10"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#16a5e2]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hello, I'm Azizur Rahman, a React.js developer with one year of
          experience. My focus is on crafting practical and responsive web
          applications. I specialize in React.js, Next.js, and state management
          using Context API and Redux. Proficient in TypeScript, I prioritize
          code quality and maintainability. I've contributed to web templates
          for Theme Forest, showcasing my ability to translate design concepts
          into user-friendly interfaces. I'm adept at integrating UI frameworks
          like Bootstrap and Tailwind CSS for visually appealing and
          mobile-friendly applications. With a pragmatic approach, I use Git and
          GitHub for efficient code management. My goal is to contribute to
          projects that prioritize simplicity, functionality, and an excellent
          user experience.
        </p>
      </div>
      </div>
      
    </motion.div>
  );
};

export default About;
