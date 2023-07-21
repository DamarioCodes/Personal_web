const Services = () => {
  return (
    <section id="services" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Approach</h3>
              <p className="text-uppercase small">
                A look at my development goals
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-desktop" />
              </div>
              <div className="feature-content">
                <h5>Clean Code</h5>
                <p>
                 I value writing clean, precise code that allows for easier collaboration and maintainablity in the long-term.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-pricetags" />
              </div>
              <div className="feature-content">
                <h5>Performance Optimization</h5>
                <p>
                I try to implement code that are free of redundancies and I make it my duty to improve inefficiencies where i can.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-chat" />
              </div>
              <div className="feature-content">
                <h5>Communication and Collaboration</h5>
                <p>
                I belive open communication and teamworking is cruical and I welcome collaboration wherever possible.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-mobile" />
              </div>
              <div className="feature-content">
                <h5>Always Learning</h5>
                <p>
                I love to learn and I belive that I will always be honing my skills to become a better engineer.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-target" />
              </div>
              <div className="feature-content">
                <h5>Testing for Perfection</h5>
                <p>
                I value the testing process and ensuring that my works meets all the necessary specifications.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-tools-2" />
              </div>
              <div className="feature-content">
                <h5>Problem Solving</h5>
                <p>
                I belive problem solving is both a systematic and creative process and I use various methods to come up with effective solutions.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
        </div>
      </div>
    </section>
  );
};
export default Services;
