import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import GithubChart from './components/GithubChart'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Blog />
            <Testimonials />
            <GithubChart />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
