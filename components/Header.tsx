import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
    return (
        <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
            <motion.div 
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center">
                {/* Social Icons */}
                <SocialIcon url="https://twitter.com/"  fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://youtube.com/" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://facebook.com/" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://instagram.com/" fgColor="gray" bgColor="transparent" />

            </motion.div>
            
            <Link href="#contact-me">
                <motion.div 
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className="flex flw-row items-center cursor-pointer">
                    <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </motion.div>
            </Link>


        </header>
    )
}

export default Header