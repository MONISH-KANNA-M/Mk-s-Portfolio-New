import React from "react";
import "./Project.css";
import waapickle from "../assets/pickle.webp";
import forever from "../assets/clothing.avif";
import turfEase from "../assets/turf.png";
import tunify from "../assets/tunify.png";
import disasterRelief from "../assets/disastert.webp";
import hireHub from "../assets/hirehub.jpg";
import flexiverse from "../assets/flexi.avif";
import dms from "../assets/dms.avif";
import heartRisk from "../assets/heart.jpg";
import skinCareAI from "../assets/skincare.webp";
import aiAdvisor from "../assets/ai academic.webp";
import mnistMedical from "../assets/mnist.jpg";

const projectGroups = [
  {
    title: "Full Stack Development Projects",
    icon: "🌐",
    projects: [
       {
        name: "FlexiVerse",
        summary: "Adaptive Learning Platform",
        details: "Personalized learning paths with role-based dashboards and progress tracking.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: flexiverse,
      },
      {
        name: "Waapickle",
        summary: "Online Pickle Store (E-commerce website)",
        details: "Product browsing, cart flow, and checkout experience for a niche food store.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: waapickle,
      },
      {
        name: "Forever",
        summary: "Online Clothing E-commerce Website",
        details: "Modern storefront with category filters, product cards, and order journey.",
        stack: ["React", "JavaScript", "CSS", "Firebase"],
        image: forever,
      },
      {
        name: "Turf Ease",
        summary: "Turf Booking System",
        details: "Slot-based booking, availability checks, and booking management workflow.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: turfEase,
        imageClass: "project-thumb-turf",
      },
      {
        name: "Tunify",
        summary: "Music Player App",
        details: "Clean music playback interface with playlists, controls, and smooth listening flow.",
        stack: ["React", "JavaScript", "CSS", "Firebase"],
        image: tunify,
      },
      {
        name: "Disaster Relief Camp Services",
        summary: "Support platform for relief camp services",
        details: "Helps organize shelter, food, medical aid, and camp services during disaster response.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: disasterRelief,
      },
      {
        name: "HireHub",
        summary: "Job Portal Platform",
        details: "Candidate and recruiter workflows with posting, search, and application handling.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: hireHub,
      },
     
      {
        name: "DMS",
        summary: "Document Management System",
        details: "Secure document upload, organization, and retrieval for teams.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: dms,
      },
    ],
  },
    {
    title: "AI / ML & Deep Learning &Gen AI Projects",
    icon: "🤖",
    projects: [
      {
        name: "Heart Attack Risk Prediction",
        summary: "ML-based health prediction system",
        details: "Predictive model to estimate risk from patient indicators and metrics.",
        stack: ["Python", "Pandas", "Scikit-learn", "Flask"],
        image: heartRisk,
      },
      {
        name: "Skin Care AI",
        summary: "Skin analysis and recommendation system",
        details: "Image-driven skin assessment with personalized routine suggestions.",
        stack: ["Python", "OpenCV", "TensorFlow", "Flask"],
        image: skinCareAI,
      },
      {
        name: "AI Academic Advisor System",
        summary: "Smart academic guidance platform",
        details: "Suggests roadmap and subject planning based on profile and goals.",
        stack: ["Python", "NLP", "FastAPI", "SQLite"],
        image: aiAdvisor,
      },
      {
        name: "MNIST Medical Image Classification",
        summary: "Deep learning model using CNN",
        details: "Convolutional model for image pattern recognition and classification.",
        stack: ["Python", "TensorFlow", "Keras", "NumPy"],
        image: mnistMedical,
      },
    ],
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects-container reveal">
      <div className="project-header section-head reveal" style={{ "--delay": "60ms" }}>
 <h2 className="section-title">
          <span>&lt;</span> Projects <span>/&gt;</span>
        </h2>        <p className="section-subtitle">
          A blend of product engineering and intelligent systems designed to
          solve real user problems.
        </p>
      </div>

      {projectGroups.map((group, groupIndex) => (
        <div
          className="project-group reveal"
          style={{ "--delay": `${120 + groupIndex * 60}ms` }}
          key={group.title}
        >
          <h2 className="project-group-title">
            <span>{group.icon}</span> {group.title}
          </h2>
          <div className="project-grid">
              {group.projects.map((project, projectIndex) => (
              <article
                className="project-card reveal"
                key={project.name}
                style={{ "--delay": `${220 + (groupIndex * 6 + projectIndex) * 45}ms` }}
              >
                <div className="project-thumb-frame">
                  <img
                    src={project.image}
                    alt={project.name}
                    className={`project-thumb ${project.imageClass ?? ""}`}
                  />
                </div>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-details">{project.details}</p>
                <div className="project-stack" aria-label={`${project.name} tech stack`}>
                  {project.stack.map((tech) => (
                    <span className="stack-chip" key={`${project.name}-${tech}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/MONISH-KANNA-M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </article>
              ))}
            </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
