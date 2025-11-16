import './Experience.css';

const experiences = [
  {
    company: 'Kinectrics',
    role: 'Software Developer Intern',
    period: 'May 2024 – Aug 2024',
    location: 'Toronto, ON',
    description: [
      'Built Python/Django pipelines for real-time telemetry ingestion with automated integrity checks.',
      'Aligned multi-sensor data streams using sampling and synchronization concepts from embedded systems.',
      'Created Python tools for anomaly detection, reducing manual diagnostic workload.',
      'Decoded UART sensor packets to support debugging of embedded field devices.',
      'Assisted in firmware update testing for grid sensors, validating data integrity and device stability.'
    ]
  },
  {
    company: 'Kenna',
    role: 'Web Application Developer',
    period: 'Sept 2023 – Dec 2023',
    location: 'Mississauga, ON',
    description: [
      'Refactored legacy Node.js services using event-driven design to improve concurrency and throughput.',
      'Implemented monitoring and logging tools to identify API performance bottlenecks.',
      'Integrated backend with hardware simulators to test device communication protocols.',
      'Developed scripts to emulate sensor data streams for firmware integration workflows.',
      'Built an OpenAI-powered chatbot with Redis vector embeddings for low-latency semantic search.'
    ]
  },
  {
    company: 'Personal Projects',
    role: 'Embedded Systems Developer',
    period: 'Ongoing',
    location: 'Waterloo, ON',
    description: [
      'Designed an STM32-based water irrigation automator with PWM motor control, servo routing, and UART interface.',
      'Developed PID temperature control firmware using ADC feedback and PWM-driven actuators.',
      'Implemented a custom UART bootloader supporting flash erase/write, checksum validation, and vector table remapping.',
      'Programmed ARM Assembly on the LPC1768 for Morse code interpretation via GPIO and timer interrupts.'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="experience">
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-divider"></div>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="experience-item" key={idx}>
            <div className="exp-header">
              <span className="exp-role">{exp.role}</span>
              <span className="exp-company">@ {exp.company}</span>
            </div>
            <div className="exp-meta">
              <span className="exp-period">{exp.period}</span>
              <span className="exp-location">{exp.location}</span>
            </div>
            <ul className="exp-desc">
              {exp.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
