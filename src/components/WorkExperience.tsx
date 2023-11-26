import React from "react";
import { motion } from "framer-motion";
import { iconImages } from "@/data/data";
type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">
        Experience
      </h3>
      <div className="w-full flex space-x-5 p-10">
        <article className=" flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-[80%] mx-auto snap-center bg-[#292929] p-5 md:p10 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 ">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className=" md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center"
            src="https://res.cloudinary.com/deuhv7bop/image/upload/v1700821579/bqmisgpwd4xj0ttdkqbx.jpg"
            alt=""
          />
          <div className="flex px-14 py-20 gap-14">
            <div className="flex flex-col">
              <div>
                <h4 className="text-4xl font-light">Frontend Web Developer</h4>
                <p className="font-bold text-2xl mt-1">
                  SpeedDigit Software Solution
                </p>
                <p className="uppercase py-5 text-gray-300">
                  Started Work (01-03-2023) - Currently Working
                </p>
              </div>

              <div className="flex space-x-2 my-2 flex-col">
                <h3>Skills I Use</h3>
                <div className="flex flex-row flex-wrap mt-5 gap-5">
                   {iconImages.map((item, index) => (
                  <img
                    className="h-10 w-10 rounded-full"
                    src={item.src}
                    alt={item.alt}
                    key={index}
                  />
                ))}
                </div>
               
              </div>
            </div>
            <div className="flex">
                <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>
                Developed and maintained React Next JS web templates for
                ThemeForest.
              </li>
              <li>
                Implemented CSS3, Bootstrap 5, and React Bootstrap to create
                visually appealing templates.
              </li>
              <li>
                Used TypeScript and JavaScript to write clean, maintainable
                code.
              </li>
              <li>
                Utilized Git and GitHub for version control and stayed
                up-to-date with the latest React Next JS technologies and
                trends.
              </li>
              <li>
                Published and promoted templates on ThemeForest. Have seven web
                templates published.
              </li>
              <li>Provided excellent customer support to ThemeForest users</li>
            </ul>
            </div>
          
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
