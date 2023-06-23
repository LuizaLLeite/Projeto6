import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Portfolio() {
  return (
    <div>
      <nav id="navbar">
        <ul id="nav-list">
          <li>
            <a href="#welcome-section">Início</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Sobre</a>
          </li>
        </ul>
      </nav>

      <section id="welcome-section" className="welcome-section">
        <h1>Olá, Sou Flávia Queiroz </h1>
        <p>Estudante de Ciência da Computação</p>
      </section>

      <section id="projects" className="projects">
        <h2>Meus Projetos</h2>
        <div class="rounded-full h-4 w-100 bg-purple-300 mb-4"></div>
        <div className="projects-grid">
          <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-variables-by-building-a-city-skyline/step-118">
            <img src="https://raw.githubusercontent.com/LuizaLLeite/Interface-Project/main/PortifolioPessoal/FotoInterface.jpg" alt="" className="project-img" />
            <p className="project-tile">City Skyline</p>
          </a>
          <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-intermediate-css-by-building-a-picasso-painting/step-89">
            <img src="https://raw.githubusercontent.com/LuizaLLeite/Interface-Project/main/PortifolioPessoal/FotoInterface2.jpg" alt="" className="project-img" />
            <p className="project-tile">Building a Picasso Painting</p>
          </a>
          <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-typography-by-building-a-nutrition-label/step-67">
            <img src="https://raw.githubusercontent.com/LuizaLLeite/Interface-Project/main/PortifolioPessoal/FotoInter3.jpg" alt="" className="project-img" />
            <p className="project-tile">Building a Nutrition Label</p>
          </a>
          <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-grid-by-building-a-magazine/step-80">
            <img src="https://raw.githubusercontent.com/LuizaLLeite/Interface-Project/main/PortifolioPessoal/FotoInterface4.jpg" alt="" className="project-img" />
            <p className="project-tile">Building a Magazine</p>
          </a>
          <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-91">
            <img src="https://raw.githubusercontent.com/LuizaLLeite/Interface-Project/main/PortifolioPessoal/FotoInterface5.jpg" alt="" className="project-img" />
            <p className="project-tile">Building a Cafe Menu</p>
          </a>
          <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-forms-by-building-a-registration-form/step-63">
            <img src="https://raw.githubusercontent.com/LuizaLLeite/Interface-Project/main/PortifolioPessoal/FotoInterface6.jpg" alt="" className="project-img" />
            <p className="project-tile">Building a Registration Form</p>
          </a>
        </div>
      </section>
      <section id="contact" className="contact">
        <div id="contact-header">
          <h2>Estou aberta para novas oportunidades e colaborações</h2>
          <p id="contact-p">Entre em contato através:</p>
        </div>
        <div id="contact-links">
          <a
            href="https://github.com/FlaviaVGQ"
            id="profile-link"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media" 
          >
            <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="" class="contact-img" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;