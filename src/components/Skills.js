import React from "react";
import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import re from '../assets/react.png';
import node from '../assets/programing.png';
import mongo from '../assets/mongodb.svg';
import ex from '../assets/ex.png';
import py from '../assets/python.png';
import fig from '../assets/figma.png';
import boot from '../assets/bootstrap.png';

import './Skills.css';

const skillItems = [
  { name: 'HTML5', image: html, percent: '95%' },
  { name: 'CSS3', image: css, percent: '95%' },
  { name: 'JavaScript', image: js, percent: '90%' },
  { name: 'React', image: re, percent: '95%' },
  { name: 'Node.js', image: node, percent: '90%' },
  { name: 'Express.js', image: ex, percent: '90%' },
  { name: 'MongoDB', image: mongo, percent: '95%' },
  { name: 'Python', image: py, percent: '95%' },
  { name: 'Figma', image: fig, percent: '90%' },
  { name: 'Bootstrap', image: boot, percent: '95%' },
];

const Skill = () => (
  <section id="skills" className="ski reveal">
    <div className="skillsintro reveal" style={{ "--delay": "80ms" }}>
      <h1 className="skills-title">
        My technical stack includes various technologies and tools
      </h1>
      <br />
      <h2 className="skills-subtitle">
        Explore the technologies I utilize to drive innovation in my projects.
      </h2>
      <br />
      <a
        className="skills-btn"
        href="https://www.linkedin.com/in/monish-kanna-m-54b06a290/?originalSubdomain=in"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect Me
      </a>
    </div>
    <div className="cardlay reveal" style={{ "--delay": "160ms" }}>
      {skillItems.map((skill) => (
        <div className="cards" key={skill.name}>
          <img src={skill.image} alt={skill.name} />
          <h3 className="card-title">{skill.name}</h3>
          <div className="progress" role="progressbar" aria-label={`${skill.name} proficiency`}>
            <div className="progress-bar" style={{ width: skill.percent, backgroundColor: '#fcae28' }}>{skill.percent}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skill;
