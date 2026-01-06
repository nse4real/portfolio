import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'featured', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProject = {
    id: 'ai-ml-workflow',
    title: 'AI/ML Data Science Workflow',
    description: 'Production ML pipeline optimized for 4GB VRAM, zero budget, 6-week timeline. 72-page documentation, 15 edge cases, 21 documented failures. 7-hour GPT comparison with cost/quality trade-off analysis.',
    tags: ['ML Engineering', 'Systems Design', 'Production Optimization', 'Documentation'],
    isPrivate: true,
    highlights: [
      'Resource-constrained optimization (4GB VRAM)',
      '15 production edge cases documented',
      'Comparative LLM analysis (7 hours)',
      '72-page technical documentation'
    ]
  };

  const projects = [
    {
      id: 'sentinel2-ndvi',
      title: 'Sentinel-2 NDVI Pipeline',
      description: 'Earth observation mini-pipeline demonstrating remote access to Sentinel-2 COGs, AOI-based clipping, NDVI computation, and reproducible geospatial outputs',
      tags: ['Geospatial', 'Remote Sensing', 'Python', 'GDAL'],
      github: 'https://github.com/nse4real/sentinel2-ndvi-pipeline'
    },
    {
      id: 'object-detection',
      title: 'Object Detection & Segmentation',
      description: 'Comparative implementation of modern object detection and segmentation models (YOLOv8, Mask R-CNN) with architectural analysis',
      tags: ['Computer Vision', 'Deep Learning', 'YOLO', 'Object Detection'],
      github: 'https://github.com/nse4real/object-detection-segmentation-yolo-maskrcnn'
    },
    {
      id: 'urban-eo',
      title: 'Urban EO Risk Analytics',
      description: 'Earth-observation analytics for urban growth and flood risk, built around decision trade-offs, interpretability, and what actually works under time pressure',
      tags: ['Earth Observation', 'Risk Analysis', 'Urban Planning'],
      github: 'https://github.com/nse4real/urban-eo-risk-analytics'
    },
    {
      id: 'grid-supply',
      title: 'GridSupplyForecast-Day1',
      description: 'Time series forecasting for power grid supply optimization',
      tags: ['Forecasting', 'Time Series', 'Energy Analytics'],
      github: 'https://github.com/nse4real/GridSupplyForecast-Day1'
    },
    {
      id: 'ba-pred',
      title: 'British Airways Predictive Modelling',
      description: 'Customer booking prediction using machine learning',
      tags: ['Predictive Analytics', 'Customer Behavior', 'ML'],
      github: 'https://github.com/nse4real/british_airways_predictive_modelling_for_customer_bookings'
    },
    {
      id: 'ba-scrape',
      title: 'British Airways Web Scraping',
      description: 'Automated data extraction for company insights and sentiment analysis',
      tags: ['Web Scraping', 'NLP', 'Sentiment Analysis'],
      github: 'https://github.com/nse4real/bristish_airways_web-scraping_to_get_company_insights'
    },
    {
      id: 'sb-credit',
      title: 'StandardBank Credit Home Loans',
      description: 'Credit risk assessment model for home loan applications',
      tags: ['Credit Risk', 'Financial ML', 'Classification'],
      github: 'https://github.com/nse4real/StandardBank-CreditHomeLoans'
    },
    {
      id: 'emp-join',
      title: 'Employee Joining Classification',
      description: 'Predictive model for employee retention and joining behavior',
      tags: ['HR Analytics', 'Classification', 'Feature Engineering'],
      github: 'https://github.com/nse4real/employee-joining-classification'
    },
    {
      id: 'stars-viz',
      title: 'Stars Dataset Analysis & Visualization',
      description: 'Exploratory data analysis and visualization of astronomical data',
      tags: ['EDA', 'Visualization', 'Astronomy Data'],
      github: 'https://github.com/nse4real/data_analysis_viz_stars_dataset'
    },
    {
      id: 'car-price',
      title: 'EDA Car Price',
      description: 'Comprehensive exploratory analysis of car pricing factors',
      tags: ['EDA', 'Price Analysis', 'Feature Engineering'],
      github: 'https://github.com/nse4real/EDA_carPrice'
    },
    {
      id: 'author-verify',
      title: 'Author Verification from Tweets',
      description: 'NLP-based system to identify authors of unknown tweets',
      tags: ['NLP', 'Author Attribution', 'Text Analysis'],
      github: 'https://github.com/nse4real/Towards-Author-verification-identifying-authors-of-unknown-tweets-'
    },
    {
      id: 'tweet-clean',
      title: 'Data Cleaning Tweets',
      description: 'Tweet preprocessing pipeline for ML applications',
      tags: ['Data Cleaning', 'NLP', 'Text Processing'],
      github: 'https://github.com/nse4real/data_cleaning_tweets'
    }
  ];

  return (
    <>
      <Head>
        <title>NSE4REAL - Data Engineer & ML Specialist</title>
        <meta name="description" content="Data engineer specializing in production ML systems, resource-constrained optimization, and scalable data pipelines." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="portfolio-container">
        {/* Navigation */}
        <nav className={`nav ${isLoaded ? 'loaded' : ''}`}>
          <div className="nav-content">
            <a href="#home" className="nav-logo">Simon Nsenam Udoh</a>
            <div className="nav-links">
              {['about', 'featured', 'projects', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className={`hero ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero-content">
            <div className="hero-label">DATA ENGINEER</div>
            <h1 className="hero-title">
              Building production ML systems
              <br />
              under real-world constraints
            </h1>
            <p className="hero-subtitle">
              I engineer data pipelines and machine learning systems that ship. Specializing in resource-constrained optimization, 
              production edge cases, and trade-off analysis that actually matters.
            </p>
            <div className="hero-cta">
              <a href="#featured" className="btn-primary">View Work</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="data-grid"></div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="section-content">
            <h2 className="section-title">
              <span className="section-number">01.</span> About
            </h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a data engineer who builds ML systems that actually work in production. Not the kind that look 
                  impressive in demos but fall apart under real constraints.
                </p>
                <p>
                  My work focuses on the gap between "it works on my machine" and "it ships to users." That means 
                  optimizing for 4GB VRAM when everyone else assumes unlimited resources. Documenting 15 edge cases 
                  that break your model. Running 7-hour cost comparisons because production budgets are real.
                </p>
                <p>
                  I've worked on everything from power grid forecasting to airline customer prediction, credit risk 
                  assessment to NLP author verification. The common thread: engineering solutions that survive contact 
                  with reality.
                </p>
              </div>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Engineering</h3>
                  <ul>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Production ML</li>
                    <li>Data Pipelines</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>ML/Data Science</h3>
                  <ul>
                    <li>Predictive Modeling</li>
                    <li>NLP</li>
                    <li>Time Series</li>
                    <li>Feature Engineering</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Systems</h3>
                  <ul>
                    <li>Resource Optimization</li>
                    <li>Cost Analysis</li>
                    <li>Edge Case Handling</li>
                    <li>Production Debugging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section id="featured" className="featured">
          <div className="section-content">
            <h2 className="section-title">
              <span className="section-number">02.</span> Featured Work
            </h2>
            <div className="featured-card">
              <div className="featured-badge">CASE STUDY</div>
              <h3 className="featured-title">{featuredProject.title}</h3>
              <p className="featured-desc">{featuredProject.description}</p>
              
              <div className="featured-highlights">
                <h4>Key Engineering Decisions</h4>
                <ul>
                  {featuredProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="featured-tags">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="featured-note">
                <strong>Why this matters:</strong> This project demonstrates production engineering maturity. 
                Most candidates can use an LLM. Few can optimize for 4GB VRAM with $0 budget and document 
                every failure mode. Recruiters: architecture decisions and trade-off analysis available in 
                detailed case study documentation.
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="projects">
          <div className="section-content">
            <h2 className="section-title">
              <span className="section-number">03.</span> Other Projects
            </h2>
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <div key={project.id} className="project-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <div className="section-content">
            <h2 className="section-title">
              <span className="section-number">04.</span> Get In Touch
            </h2>
            <div className="contact-content">
              <p>
                Looking for a data engineer who understands production constraints and ships working systems? 
                Let's talk about your next project.
              </p>
              <a href="mailto:simon.n.udoh@gmail.com" className="btn-primary">Send Email</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-links">
            <a href={`https://github.com/nse4real`} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/simonnudoh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p>Built with Next.js. Deployed on Vercel.</p>
        </footer>
      </div>

      <style jsx>{`
        :root {
          --bg-primary: #0a0e1a;
          --bg-secondary: #111827;
          --bg-tertiary: #1a1f35;
          --text-primary: #e2e8f0;
          --text-secondary: #94a3b8;
          --accent: #00d9ff;
          --accent-dim: #0088aa;
          --border: #1e293b;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Space Mono', monospace;
          line-height: 1.6;
        }

        .portfolio-container {
          min-height: 100vh;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 14, 26, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .nav.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 1rem;
          color: #00d9ff !important;
          text-decoration: none;
          letter-spacing: 0.02em;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-links a {
          color: #e2e8f0 !important;
          text-decoration: none;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s;
          position: relative;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--accent);
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 8rem 3rem 4rem;
        }

        .hero-content {
          max-width: 900px;
          z-index: 10;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .hero.loaded .hero-content {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--accent);
          letter-spacing: 0.2em;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .hero-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 700px;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
        }

        .btn-primary,
        .btn-secondary {
          padding: 1rem 2.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .btn-primary {
          background: var(--accent);
          color: var(--bg-primary);
        }

        .btn-primary:hover {
          background: var(--text-primary);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--accent);
          border: 2px solid var(--accent);
        }

        .btn-secondary:hover {
          background: rgba(0, 217, 255, 0.1);
          transform: translateY(-2px);
        }

        .data-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
        }

        /* Sections */
        section {
          padding: 8rem 3rem;
        }

        .section-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-number {
          color: var(--accent);
          font-size: 1.5rem;
        }

        /* About */
        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skill-category h3 {
          font-family: 'JetBrains Mono', monospace;
          color: var(--accent);
          font-size: 0.9rem;
          margin-bottom: 0.8rem;
          letter-spacing: 0.1em;
        }

        .skill-category ul {
          list-style: none;
        }

        .skill-category li {
          color: var(--text-secondary);
          padding: 0.4rem 0;
          font-size: 0.95rem;
        }

        .skill-category li::before {
          content: '▹';
          color: var(--accent);
          margin-right: 0.5rem;
        }

        /* Featured */
        .featured-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 3rem;
          position: relative;
        }

        .featured-badge {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: var(--accent);
          color: var(--bg-primary);
          padding: 0.4rem 1rem;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .featured-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .featured-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .featured-highlights {
          margin: 2rem 0;
          padding: 2rem;
          background: var(--bg-tertiary);
          border-left: 3px solid var(--accent);
          border-radius: 4px;
        }

        .featured-highlights h4 {
          font-family: 'JetBrains Mono', monospace;
          color: var(--accent);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }

        .featured-highlights ul {
          list-style: none;
        }

        .featured-highlights li {
          color: var(--text-secondary);
          padding: 0.6rem 0;
          font-size: 0.95rem;
        }

        .featured-highlights li::before {
          content: '→';
          color: var(--accent);
          margin-right: 1rem;
          font-weight: bold;
        }

        .featured-note {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(0, 217, 255, 0.05);
          border: 1px solid var(--accent-dim);
          border-radius: 4px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .featured-note strong {
          color: var(--accent);
        }

        .featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 2rem;
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 2rem;
          transition: all 0.3s;
          opacity: 0;
          animation: fadeInUp 0.6s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.1);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-card h3 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .github-link {
          color: var(--text-secondary);
          transition: color 0.3s;
        }

        .github-link:hover {
          color: var(--accent);
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
          background: var(--bg-tertiary);
          color: var(--accent);
          border-radius: 4px;
          border: 1px solid var(--border);
        }

        /* Contact */
        .contact {
          min-height: 60vh;
          display: flex;
          align-items: center;
        }

        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        /* Footer */
        .footer {
          padding: 3rem;
          text-align: center;
          border-top: 1px solid var(--border);
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        .footer p {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .nav-content {
            padding: 1rem 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          section {
            padding: 4rem 1.5rem;
          }

          .hero {
            padding: 6rem 1.5rem 3rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-cta {
            flex-direction: column;
          }

          .section-title {
            font-size: 2rem;
          }

          .featured-card {
            padding: 2rem;
          }

          .featured-badge {
            position: static;
            display: inline-block;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
}
