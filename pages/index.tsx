import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Head >
            <title>Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />
        
        <section id="hero" className="snap-start">
            <Hero />
        </section>
        
        <section id="about" className="snap-center">
          <About />
        </section>
        
        <section id="work-experience" className="snap-center">
          <WorkExperience />
        </section>
        
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>
        
        <section id="contact-me" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" 
                  src="" alt="" />
              </div>
            </footer>
        </Link>
    
    </div>
    )
  }
  