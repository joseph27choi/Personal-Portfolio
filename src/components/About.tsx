import './About.css';
import Me from './IMG_3177.jpg'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-divider"></div>
        </div>

        {/* Main Content */}
        <div className="about-main">
          {/* Left: Bio and Image */}
          <div className="about-left">
            <div className="about-bio">
              <p className="about-intro">
                I'm a Computer Engineering student at the University of Waterloo, passionate about embedded systems.
              </p>
              
              <p className="about-description">
                I have accumulated a deep interest in firmware development through my side projects and classes.
              </p>

              <p className="about-interests">
                I am actively seeking new opportunities and am currently looking for a Winter 2026 Embedded Software internship so feel free to reach out!
              </p>
            </div>

          </div>

          {/* Right: Image */}
          <div className="about-image-wrapper">
            <img 
              src={Me}
              alt="Profile" 
              className="about-image"
            />
            <div className="image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
