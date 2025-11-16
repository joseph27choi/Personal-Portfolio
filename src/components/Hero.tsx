import './Hero.css';

const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="intro" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Hi, I'm Joseph Choi</h1>
                    <p className="hero-subtitle">
                        I create stuff sometimes.
                    </p>
                    <p className="hero-description">
                        Creating innovative solutions at the intersection of hardware and software.
                        Passionate about building products that make a difference.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
