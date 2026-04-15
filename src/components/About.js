import React, { useEffect, useState } from "react";
import './About.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Me from '../assets/Me.jpg';

const skillWords = [
  "Full Stack Developer",
  "AI/ML & Generative AI| LLM's",
  "Cloud | AWS | Docker",
  "Data Analyst",
  "Always building | Always learning",
];


const About = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const currentSkill = skillWords[skillIndex];
    let timer;

    if (!isDeleting && subIndex <= currentSkill.length) {
      timer = setTimeout(() => setSubIndex((previous) => previous + 1), 110);
    } else if (!isDeleting && subIndex > currentSkill.length) {
      timer = setTimeout(() => setIsDeleting(true), 900);
    } else if (isDeleting && subIndex >= 0) {
      timer = setTimeout(() => setSubIndex((previous) => previous - 1), 60);
    } else {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setSkillIndex((previous) => (previous + 1) % skillWords.length);
        setSubIndex(0);
      }, 180);
    }

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, skillIndex]);

  const animatedSkill = skillWords[skillIndex].substring(0, Math.max(subIndex, 0));

  return (
    <section id="about" className="about-wrap reveal">
      <div className="about-header section-head reveal" style={{ "--delay": "60ms" }}>
        <br></br>
        <br></br>
        <h2 className="section-title">
          <span>&lt;</span> About Me <span>/&gt;</span>
        </h2>
        <p className="section-subtitle">Get to know more about me and my background in tech and development.</p>
      </div>

      <div className="about-shell reveal" style={{ "--delay": "120ms" }}>
        <div className="about-photo-wrap">
          <img src={Me} alt="Monish" className="about-photo" onError={(e) => e.target.src = 'fallback.jpg'} />
          <span className="photo-deco square"></span>
          <span className="photo-deco dot"></span>
        </div>

        <article className="about-panel">
          <h3>Hi, I&apos;m Monish Kanna</h3>

          <div className="about-tabs">
            <button
              type="button"
              className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          {activeTab === "about" ? (
            <>
              <p className="about-description">
                I&apos;m a Full Stack Developer and AI/ML enthusiast from Tamil Nadu,
                passionate about building modern digital products with clean architecture
                and meaningful user experiences.
              </p>
              <p className="about-description">
                My journey includes web apps, machine learning systems, and practical
                projects that solve real-world problems. I enjoy turning ideas into
                reliable solutions through collaboration and constant learning.
              </p>

              <p className="skill-typing" aria-live="polite">
                <span className="skill-typing-text">{animatedSkill}</span>
                <span className="typing-cursor">|</span>
              </p>

              <div className="quick-facts">
                <h4>Quick Facts</h4>
                <ul>
                  <li>Based in Coimbatore</li>
                  <li>Strong in MERN + AI stack</li>
                  <li>Focused on practical product building</li>
                  <li>Consistent learner and problem solver</li>
                </ul>
              </div>
            </>
          ) : (
            <div className="education-card">
              <h4>Education</h4>
              <p className="about-description">
                Sri Eshwar College of Engineering
              </p>
              <p className="about-description">
                B.E CSE (AI&ML)
              </p>
              <p className="about-description">
                Present - Final Year
              </p>
            </div>
          )}

          <div className="icons">
            <a href="https://github.com/MONISH-KANNA-M" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/monish-kanna-m-54b06a290/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://leetcode.com/u/MONISH_KANNA_M_2442/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
              <SiLeetcode size={30} />
            </a>
          </div>

          <div className="hero-actions">
            <a href="/resume.pdf" download="Monish_Kanna_CV.pdf">
              <button className="hero-btn">Download CV</button>
            </a>
            <a href="#projects">
              <button className="hero-btn ghost-btn">View Projects</button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
