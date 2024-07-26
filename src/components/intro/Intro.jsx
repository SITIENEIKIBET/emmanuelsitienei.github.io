import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/Emma.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>Welcome, recruiters! 🌟</p>

Meet Emmanuel Sitienei, your go-to Data Analytics Engineer and Business Intelligence Developer!, a multi-faceted ICT Professional Currently honing my skills as a Business Intelligence Developer and  Data Analyst Intern at ICT Authority, I invite you to explore my portfolio bursting with innovation.My experience as a Data Analyst has helped me collaborate with fellow Data Professionals from all over the world
With over 3 years of expertise and a stellar portfolio boasting 10+ impactful projects, I excel in the art of transforming complex data into actionable insights. Proficient in a plethora of tools including SQL, Python, Power BI, Microsoft Fabric, Azure Synapse Analytics, Azure Data Factory, Azure Cloud, GCP, Apache Kafka, Apache Airflow, Apache Flink,  MySQL, SQL Server, MongoDB, Apache Cassandra.
<p>Personal Website Tech Stack:HTML, CSS, JavaScript, React,Figma, SCSS, REDUX, Nodejs,Nodemailer. I'm ready to collaborate with you to bring your visions to life.</p>
<p>Let's connect, innovate, and shape the future of data analytics together. Thank you for stopping by! 🚀. "Remember that it's not the Data that Matters to an Organization But the Understanding of the Data Itself!"</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro