import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: ["Hi, I'm Victor!", "Developer", "Nerd/Geek"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img src="https://media.licdn.com/dms/image/D4E03AQG9ouVWyzsTPA/profile-displayphoto-shrink_200_200/0/1666104189317?e=1677715200&v=beta&t=ogGCNlndCGZ_tMXsSVslsVpiGgTDOp0Ol19u7gATgcE" alt="profile" className="relative rounded-full h-32 w-32 object-cover" />
        <div className="z-20">
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Computer Scientist</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#F7AB0A"/>
            </h1>
            <div className="pt-5">
                <Link href="#about">
                    <button className="hero-button">About</button>
                </Link>
                <Link href="#experience">
                    <button className="hero-button">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="hero-button">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="hero-button">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}