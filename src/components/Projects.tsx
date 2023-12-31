import React from 'react'
import {motion} from 'framer-motion'
import { projectData } from '@/data/data'
import Link from 'next/link'
type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#16a5e2]">
            {projectData.map((project,i) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen" key={i}>
                   <Link href={project.url} target='_blank'>
                     <motion.img 
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{once: true}}
                    src={project.img}
                    alt={project.name}
                    className='h-[200px] w-[300px] object-fit sm:hidden lg:block lg:mt-3 xl:h-[200px] xl:w-[300px]'
                    />
                   </Link>
                   
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <Link href={project.url} target='_blank'>
                        <h4 className='text-4xl font-semibold text-center sm:text-2xl xl:text-3xl 2xl:text-4xl'>
                            <span className="underline decoration-[#16a5e2]/50">
                              {project.name}  
                            </span>
                        </h4>    
                        </Link>
                        
                        <ul className="text-lg text-center md:text-left xl:text-lg">
                           {project.list.map((item,index) => (
                            <li  key={index}>{item}</li>
                           ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute left-0 top-[30%] bg-[#16a5e2]/10 h-[500px] -skew-y-12"/>
    </motion.div>
  )
}

export default Projects