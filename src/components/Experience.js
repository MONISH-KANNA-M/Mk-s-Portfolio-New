import React from 'react';
import './Experience.css';
import { FaBriefcase, FaDatabase } from 'react-icons/fa';

const experienceItems = [
  {
    icon: FaBriefcase,
    role: 'Full Stack Developer',
    period: 'Aug 2025 - Oct 2025',
    company: 'Synapse Logic',
    description:
      'Built responsive web applications, worked on end-to-end features, and contributed to clean front-end and back-end integration for client-facing solutions.',
  },
  {
    icon: FaDatabase,
    role: 'Data Engineering Trainee',
    period: 'Jan 2026 - Apr 2026',
    company: 'Digital Backoffice',
    description:
      'Supported data workflows, handled structured datasets, and contributed to engineering tasks focused on accuracy, reporting, and process improvement.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section reveal">
      <div className="experience-header section-head reveal" style={{ "--delay": "60ms" }}>
        <p className="experience-kicker section-kicker">Professional Journey</p>
 <h2 className="section-title">
          <span>&lt;</span> Experience <span>/&gt;</span>
        </h2>        <p className="section-subtitle">
          From intern to full stack developer - always building, always learning.
        </p>
      </div>

      <div className="experience-timeline">
        {experienceItems.map((item, index) => (
          <article
            className={`experience-item experience-item--${index % 2 === 0 ? 'left' : 'right'} reveal`}
            key={item.role}
            style={{ "--delay": `${120 + index * 90}ms` }}
          >
            <div className="experience-dot" />
            <div className="experience-card">
              <div className="experience-meta">
                <span className="experience-period">{item.period}</span>
                <span className="experience-company">
                  <item.icon className="experience-company-icon" />
                  {item.company}
                </span>
              </div>
              <h3>
                <item.icon className="experience-role-icon" />
                {item.role}
              </h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;