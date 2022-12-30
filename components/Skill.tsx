import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
            src="https://www.clutch.com/wp-content/uploads/2018/04/salesforce-commerce-cloud-logo.png"
            className="rounded-full border border-gray-500 
            object-cover h-24 w-24 lg:w-32 lg:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full z-0'>
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl text-black font-bold opacity-100">100%</p>
            </div>
        </div>
    </div>
  )
}