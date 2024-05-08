import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/header.tsx"
import Nav from "./components/nav.tsx"
import About from "./components/about.tsx"
import Experience from "./components/experience.tsx"
import Projects from "./components/projects.tsx"
import "./styles/header.css"
import "./styles/nav.css"
import "./styles/about.css"
import "./styles/experience.css"
import "./styles/projects.css"
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div id="home" />
    
    <nav>
      <Nav />
    </nav>

    <section id="header">
      <Header />
    </section>

    <section id="aboutSection">
      <About />
    </section>

    <section id ="experienceSection">
      <Experience />
    </section>

    <section id ="projectSection">
      <Projects />
    </section>
  </React.StrictMode>,
)