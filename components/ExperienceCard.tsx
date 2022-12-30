import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 first-letterfirst-line
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Job Title</h4>
            <p className="font-bold text-2xl mt-1">company</p>
            <div className="flex space-x2 my-2">
                tech used
                <img className="f-10 w-10 rounded-full" src="" alt="" />
                <img className="f-10 w-10 rounded-full" src="" alt="" />
                <img className="f-10 w-10 rounded-full" src="" alt="" />
                <img className="f-10 w-10 rounded-full" src="" alt="" />
            </div>
            <p className="uppercase py-5 text-gray-300"> date - present</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>description work</li>
                <li>description work</li>
                <li>description work</li>
            </ul>
        </div>
    </article>
  )
}