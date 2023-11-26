import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import { iconImages } from '@/data/data'
type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">
        Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current profieciency</h3>
        <div className="grid grid-cols-4 gap-5">
            {iconImages.map((item,index) => (
              <Skill 
              src={item.src}
              alt={item.alt}
              mastery={item.mastery}
              key={index}
              />
            ))}
        </div>
    </motion.div>
  )
}

export default Skills