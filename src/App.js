import React, { useEffect, useRef } from 'react';
import Navbar from './components/Naver.js'; 
import Home from './components/Home.js';
import About from './components/About.js';
import Skill from './components/Skills.js';
import Project from './components/Project.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import {
  FaCode,
  FaDatabase,
  FaMicrochip,
  FaServer,
  FaCloud,
  FaLaptopCode,
  FaCogs,
  FaTerminal,
  FaFileCode,
  FaTools,
  FaNetworkWired,
} from 'react-icons/fa';
import { SiPostgresql, SiRedis, SiNginx } from 'react-icons/si';
import './App.css';

const ambientTechIcons = [
  { Icon: FaCode, top: '12%', left: '8%', size: 24, delay: '0s', duration: '15s' },
  { Icon: FaDatabase, top: '24%', left: '90%', size: 23, delay: '1.2s', duration: '16s' },
  { Icon: FaMicrochip, top: '36%', left: '7%', size: 22, delay: '2.1s', duration: '14.5s' },
  { Icon: FaServer, top: '50%', left: '92%', size: 24, delay: '0.7s', duration: '17s' },
  { Icon: FaCloud, top: '65%', left: '10%', size: 22, delay: '2.8s', duration: '16.5s' },
  { Icon: FaLaptopCode, top: '78%', left: '89%', size: 25, delay: '1.9s', duration: '15.5s' },
  { Icon: FaCogs, top: '84%', left: '16%', size: 22, delay: '3.1s', duration: '17.5s' },
  { Icon: FaCode, top: '18%', left: '84%', size: 20, delay: '0.9s', duration: '14.8s' },
  { Icon: FaTerminal, top: '14%', left: '30%', size: 20, delay: '1.6s', duration: '16.8s' },
  { Icon: FaFileCode, top: '31%', left: '18%', size: 20, delay: '2.4s', duration: '15.9s' },
  { Icon: FaTools, top: '43%', left: '82%', size: 21, delay: '0.4s', duration: '17.2s' },
  { Icon: FaNetworkWired, top: '58%', left: '20%', size: 22, delay: '2.8s', duration: '16.4s' },
  { Icon: SiPostgresql, top: '67%', left: '86%', size: 20, delay: '1.1s', duration: '15.7s' },
  { Icon: SiRedis, top: '76%', left: '24%', size: 20, delay: '3s', duration: '16.9s' },
  { Icon: SiNginx, top: '88%', left: '78%', size: 20, delay: '2.2s', duration: '17.4s' },
];

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries, entryObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          entryObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let animationFrameId = 0;
    let particles = [];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shapeTypes = ['square', 'diamond', 'circle'];

    const randomBetween = (min, max) => Math.random() * (max - min) + min;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.max(34, Math.min(92, Math.floor((width * height) / 24000)));
      particles = Array.from({ length: targetCount }, () => ({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        size: randomBetween(7, 22),
        angle: randomBetween(0, Math.PI * 2),
        spin: randomBetween(-0.003, 0.003),
        vx: randomBetween(-0.06, 0.06),
        vy: randomBetween(-0.06, 0.06),
        alpha: randomBetween(0.13, 0.3),
        hue: Math.random() > 0.5 ? randomBetween(184, 198) : randomBetween(24, 34),
        shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      }));
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.angle += particle.spin;

        if (particle.x < -30) particle.x = width + 30;
        if (particle.x > width + 30) particle.x = -30;
        if (particle.y < -30) particle.y = height + 30;
        if (particle.y > height + 30) particle.y = -30;

        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.angle);
        context.globalAlpha = particle.alpha;
        context.shadowBlur = 16;
        context.shadowColor = `hsla(${particle.hue}, 95%, 70%, 0.38)`;
        context.fillStyle = `hsla(${particle.hue}, 95%, 70%, 0.18)`;
        context.strokeStyle = `hsla(${particle.hue}, 95%, 75%, 0.5)`;
        context.lineWidth = 1;

        if (particle.shape === 'square') {
          context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          context.strokeRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        } else if (particle.shape === 'diamond') {
          context.rotate(Math.PI / 4);
          context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          context.strokeRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        } else {
          context.beginPath();
          context.arc(0, 0, particle.size * 0.46, 0, Math.PI * 2);
          context.fill();
          context.stroke();
        }

        context.restore();
      });

      if (!reducedMotion) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    setupCanvas();
    render();

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-gradient" />
        <div className="ambient-grid" />
        <canvas ref={canvasRef} className="ambient-canvas" />
        <div className="ambient-icon-layer">
          {ambientTechIcons.map(({ Icon, top, left, size, delay, duration }, index) => (
            <span
              key={`ambient-icon-${index}`}
              className="ambient-tech-icon"
              style={{
                top,
                left,
                '--icon-delay': delay,
                '--icon-duration': duration,
              }}
            >
              <Icon size={size} />
            </span>
          ))}
        </div>
      </div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
