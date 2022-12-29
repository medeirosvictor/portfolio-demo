import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{opacity: 1}}
        className="flex relative flex-col text-center md:text-left md:flex-row h-screen
    m-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img
            initial={{
                x: -200, opacity: 0
            }}
            transition={{
                duration: 1.2,
            }}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-large md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            whileInView={{ x: 0, opacity: 1}}
            src="https://media.licdn.com/dms/image/D4E03AQG9ouVWyzsTPA/profile-displayphoto-shrink_200_200/0/1666104189317?e=1677715200&v=beta&t=ogGCNlndCGZ_tMXsSVslsVpiGgTDOp0Ol19u7gATgcE"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
            <p className="text-sm"> Lorem Ipsum </p>
        </div>
    </motion.div>
  )
}