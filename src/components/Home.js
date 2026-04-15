import React, { useEffect, useState } from "react";
import './About.css';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const skillWords = [
  "Full Stack Developer",
  "AI/ML & Generative AI| LLM's",
  "Cloud | AWS | Docker",
  "Data Analyst",
  "Always building | Always learning",
];

const Home = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section id="home" className="home-wrap reveal">
      <div className="home-shell reveal" style={{ "--delay": "120ms" }}>
        <article className="home-content-panel">
          <p className="home-kicker">LET&apos;S BUILD SOMETHING TOGETHER 🤝</p>
          <h1 className="home-title">
            Hi, I&apos;m <span>Monish </span> 👋
          </h1>
          <p className="home-skill-typing" aria-live="polite">
            <span className="skill-typing-text">{animatedSkill}</span>
            <span className="typing-cursor">|</span>
          </p>
          <p className="home-description">
            Passionate about Full Stack Development, AI/ML, and Data Analytics. I
            design and build modern web apps with strong back-end architecture and
            practical machine intelligence.
          </p>

          <div className="home-icons">
            <a href="https://github.com/MONISH-KANNA-M" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/monish-kanna-m-54b06a290/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} />
            </a>
            <a href="https://x.com/MonishKanna24" target="_blank" rel="noopener noreferrer" aria-label="X Profile">
              <FaXTwitter size={32} />
            </a>
            <a href="https://www.instagram.com/monish_k2418" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
              <FaInstagram size={32} />
            </a>
          </div>

          <div className="home-actions">
            <a href="#about" className="home-scroll-btn" aria-label="Scroll to about section">
              <span>Explore</span>
              <FaArrowDown size={16} />
            </a>
          </div>
        </article>
        
      </div>
    </section>
  );
};

export default Home;
