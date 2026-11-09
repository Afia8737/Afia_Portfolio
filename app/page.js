const projects = [
  {
    number: '01', category: 'FULL-STACK WEB APP', title: 'BazarDor', subtitle: 'Bangla Grocery Price Tracker', repo: 'https://github.com/Afia8737/bazardor',
    description: 'A Bangla-first grocery price-tracking concept designed to help people browse products, compare market prices, and notice price changes.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Better Auth'], color: 'mint', mark: '৳',
    note: 'Market comparison · Product categories · Price awareness',
  },
  {
    number: '02', category: 'FRONTEND DEVELOPMENT', title: 'DevStack', subtitle: 'Development Stack Explorer', repo: 'https://github.com/Afia8737/my-DevStack-app',
    description: 'A component-based interface for exploring development tools and technology stacks through a clear, structured user experience.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'], color: 'violet', mark: 'DS',
    note: 'Reusable components · Responsive UI · Stack discovery',
  },
  {
    number: '03', category: 'WEB APPLICATION', title: 'FitLog', subtitle: 'Fitness Tracking Web App', repo: 'https://github.com/Afia8737/fitlog',
    description: 'A fitness web-app project focused on page and component organization, with an emphasis on a clear and user-focused interface.',
    stack: ['Next.js', 'JavaScript'], color: 'blue', mark: '↗',
    note: 'Page structure · Component design · User experience',
  },
  {
    number: '04', category: 'E-COMMERCE CONCEPT', title: "Crafter’s Shelf", subtitle: 'Handmade Crafts Marketplace',
    description: 'A storefront concept for handmade crafts, organizing product categories and presenting items in an e-commerce-style interface.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], color: 'peach', mark: '✳',
    note: 'Product browsing · Storefront layout · Categories',
  },
  {
    number: '05', category: 'MACHINE LEARNING · ACADEMIC', title: 'Brain Tumor Detection', subtitle: 'MRI Classification & Segmentation',
    description: 'An academic project exploring deep-learning approaches to classify brain tumor categories from MRI images and segment tumor regions.',
    stack: ['Deep Learning', 'Medical Imaging', 'Computer Vision'], color: 'rose', mark: '⌬',
    note: 'MRI analysis · Classification · Region segmentation',
  },
  {
    number: '06', category: 'COMPUTER VISION · ACADEMIC', title: 'Traffic Sign Recognition', subtitle: 'Detection for Road-Safety Awareness',
    description: 'A computer-vision project focused on detecting and recognizing traffic signs, with the intended goal of supporting driver alerts and road-safety awareness.',
    stack: ['Computer Vision', 'Object Detection'], color: 'amber', mark: '◉',
    note: 'Sign detection · Recognition · Driver-alert concept',
  },
];

const skillGroups = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'DaisyUI'] },
  { title: 'Tools & workflow', items: ['Git', 'GitHub', 'Vercel', 'Vite', 'Component-based UI'] },
  { title: 'Data & research', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Machine Learning', 'Computer Vision', 'Medical Image Analysis'] },
];

function Arrow({ diagonal = false }) { return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Afia Ibnat home"><span className="brand-mark">A.</span><span>AFIA IBNAT<span className="brand-dot">.</span></span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href="#contact">Let’s talk <Arrow diagonal /></a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
          <h1>Building useful<br />things for the <span className="serif-accent">digital world.</span></h1>
          <p className="hero-description">I’m Afia Ibnat, a Computer Science & Engineering graduate who enjoys building thoughtful web experiences and exploring the possibilities of AI and computer vision.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <Arrow diagonal /></a><a className="text-link" href="/Afia-Ibnat-CV.pdf" target="_blank" rel="noreferrer">View my CV <Arrow diagonal /></a></div>
          <div className="hero-meta"><span>BAUET · CSE ’26</span><span className="meta-divider" /><span>Bangladesh</span></div>
        </div>
        <div className="hero-art hero-photo-wrap" aria-label="Portrait of Afia Ibnat">
          <div className="photo-frame-back" />
          <div className="photo-frame"><img src="/afia-profile.jpg" alt="Afia Ibnat wearing a black hijab and a colorful sari" /><div className="photo-caption"><span className="caption-dot" /> AFIA IBNAT <span className="caption-divider">/</span> CSE GRADUATE</div></div>
          <div className="photo-note note-code"><span className="note-icon">✳</span><div><strong>Code with curiosity</strong><small>Web · AI · Computer vision</small></div></div>
          <div className="photo-note note-location"><span className="location-mark">↗</span><div><strong>Based in Bangladesh</strong><small>Open to new opportunities</small></div></div>
          <div className="photo-spark">✳</div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span className="strip-label">MY INTERESTS</span><div>Frontend development <b>✳</b> Full-stack applications <b>✳</b> Machine learning <b>✳</b> Medical image analysis</div></div></section>

      <section className="section-wrap about-section section-pad" id="about">
        <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curiosity is where<br />good work <span className="serif-accent">begins.</span></h2></div>
        <div className="about-content"><p className="about-lead">I’m a CSE graduate from Bangladesh Army University of Engineering & Technology (BAUET), interested in turning ideas into clear, usable digital experiences.</p><p>My work so far spans frontend and full-stack web projects, alongside academic projects in computer vision and medical image analysis. I enjoy learning new tools, breaking problems into manageable pieces, and improving a product one thoughtful detail at a time.</p><div className="about-facts"><div><strong>3.46<span>/4.00</span></strong><small>UNDERGRADUATE CGPA</small></div><div><strong>06</strong><small>FEATURED PROJECTS</small></div><div><strong>2022—26</strong><small>B.SC. CSE · BAUET</small></div></div></div>
      </section>

      <section className="skills-section" id="skills"><div className="section-wrap section-pad"><div className="section-heading"><span className="section-index">02 / TOOLKIT</span><h2>Tools I use to<br /><span className="serif-accent">make it happen.</span></h2></div><div className="skills-grid">{skillGroups.map((group, i) => <article className="skill-group" key={group.title}><div className="skill-group-top"><span>0{i + 1}</span><span>↗</span></div><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div><p className="training-note"><span className="note-star">✳</span> Currently strengthening my full-stack development skills through Programming Hero training.</p></div></section>

      <section className="section-wrap projects-section section-pad" id="projects"><div className="projects-heading"><div className="section-heading"><span className="section-index">03 / SELECTED WORK</span><h2>Small steps.<br /><span className="serif-accent">Real projects.</span></h2></div><p>A mix of web applications and academic explorations. Each project represents a chance to learn, build, and solve a specific problem.</p></div><div className="project-grid">{projects.map(project => <article className="project-card" key={project.number}><div className={`project-visual ${project.color}`}><div className="project-visual-top"><span>{project.category}</span><span>{project.number}</span></div><div className="project-mark">{project.mark}</div><div className="visual-caption">{project.note}</div><span className="visual-decoration decoration-one" /><span className="visual-decoration decoration-two" /></div><div className="project-body"><div className="project-title-row"><div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div><span className="project-arrow"><Arrow diagonal /></span></div><p className="project-description">{project.description}</p><div className="project-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>{project.repo && <a className="project-repo-link" href={project.repo} target="_blank" rel="noreferrer">View source code <Arrow diagonal /></a>}</div></article>)}</div><p className="project-footnote">Web-project source links point to my public GitHub repositories. Academic and concept-project visuals are illustrative and can be replaced with original project results.</p></section>

      <section className="experience-section" id="experience"><div className="section-wrap section-pad experience-layout"><div className="section-heading"><span className="section-index">04 / EXPERIENCE</span><h2>Learning in a<br /><span className="serif-accent">real-world setting.</span></h2></div><article className="experience-card"><div className="experience-date">JULY — AUGUST 2025 <span>·</span> DHAKA, BANGLADESH</div><div className="experience-main"><div><h3>Brain Station 23</h3><p className="role">Software Engineer Intern</p></div><span className="experience-symbol">↗</span></div><ul><li>Worked on a team project to develop an e-commerce platform.</li><li>Contributed to frontend development and collaborated on feature implementation.</li><li>Gained exposure to a professional software development environment.</li></ul><div className="experience-tag">INDUSTRIAL EXPERIENCE</div></article></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><span className="section-index">05 / CONTACT</span><div className="contact-copy"><h2>Have a good project<br />in <span className="serif-accent">mind?</span></h2><p>I’m open to entry-level opportunities, collaborations, and conversations about web development and AI.</p><a className="button button-light" href="mailto:afiaibnat197@gmail.com">Email me <Arrow diagonal /></a></div><div className="contact-details"><a href="mailto:afiaibnat197@gmail.com">afiaibnat197@gmail.com <Arrow diagonal /></a><a href="https://github.com/Afia8737" target="_blank" rel="noreferrer">GitHub / Afia8737 <Arrow diagonal /></a><a href="https://www.linkedin.com/in/afia-ibnat-5401aa266/" target="_blank" rel="noreferrer">LinkedIn / Afia Ibnat <Arrow diagonal /></a><a href="/Afia-Ibnat-CV.pdf" target="_blank" rel="noreferrer">View résumé (PDF) <Arrow diagonal /></a><span>Madaripur, Bangladesh</span></div><div className="contact-watermark">A<span>.</span></div></div></section>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">A.</span><span>AFIA IBNAT<span className="brand-dot">.</span></span></a><span>Designed with intention · Built with code</span><span>© {new Date().getFullYear()} Afia Ibnat</span></div></footer>
    </main>
  );
}
