import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Morse Code Translator',
      description: 'A firmware project that converts text to Morse code and displays it on LEDs using an LPC17xx microcontroller. Built with ARM assembly and C, implementing bit-shifting algorithms and interrupt handling.',
      technologies: ['ARM Assembly', 'C', 'LPC17xx', 'Interrupts'],
      link: 'https://github.com/joseph27choi/morse-code'
    },
    {
      title: 'Water Irrigation Automator',
      description: 'An STM32F401RE-based embedded system for automatic irrigation control. Features sensor-based logic, PWM control, non-blocking firmware design, and modular HAL-based architecture.',
      technologies: ['STM32', 'C', 'HAL', 'Sensors', 'PWM'],
      link: 'https://github.com/joseph27choi/Water-Irrigation-Automator'
    },
    {
      title: 'Pedestrian Input Intersection',
      description: 'A traffic light controller with pedestrian input using a state machine design. Implemented in VHDL with 16 states, traffic light sequencing, and request handling logic.',
      technologies: ['VHDL', 'State Machines', 'Digital Logic', 'Quartus II'],
      link: 'https://github.com/joseph27choi/Pedestrian-Input-Intersection'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-divider"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-link">
                <span>View on GitHub</span>
                <span className="arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
