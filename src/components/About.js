const About = () => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                 A computer science student
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="static/img/about-us.jpg" alt="image" />
              <div className="nav social-icon">
                <a href="https://www.linkedin.com/in/damario-hamilton-809290287/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/DamarioCodes"> 
              <i className="fab fa-github"></i> 
              </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4> Damario Hamilton</h4>
              <h6>
                <span className="theme-color"> Software engineer  </span> 
                
              </h6>
              <p>
                With a strong foundation in programming languages, algorithms, and software development principles, I tackle challenges with enthusiasm and grit. I have experience working on diverse projects, from web development to mobile applications and data analysis.
                Beyond coding, I'm constantly exploring the latest tech advancements, participating in hackathons, and contributing to open-source projects. I believe in the power of software to make a positive impact on society.
                Let's shape the future together!
                Be sure to check out my <a className="port-link" href="#work">Portfolio</a>.
              </p>
              
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Birthday</label>
                    <p>20th December 2001</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>22 Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p> Oh, USA</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>Fl, USA</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>damariohamilton123@gmail.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>352-573-4995</p>
                  </div>
                  <div className="media">
                    <label>School</label>
                    <p>Case Western Reserve University</p>
                  </div>
                  <div className="media">
                    <label>Occupation</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a className="m-btn m-btn-theme" href="#work">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
