import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import Layout from "@/src/layouts/Layout";

import Services from "@/src/components/Services";
import dynamic from "next/dynamic";
import ParticlesBackground from "@/src/ParticlesBackground";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index2 = () => {
  return (
    <Layout>
      {/* Home Banner */}
      <section
        id="home"
        className="home-banner-02 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(static/img/bg2.jpg)" }}
      >
        <div id="particles-box" className="particles-box">
      <ParticlesBackground />
    </div>
        <div className="container">
          <div className="row full-screen align-items-center p-100px-tb">
            <div className="col-12">
              <div className="ht-text text-center">
                <h6>Hi!</h6>
                <h1>I'm Damario </h1>
                <div className="nav ht-list justify-content-center">
                  <span>Software engineer</span> <span>Student-mentor</span>{" "}
                  <span> full-stack developer </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="go-to go-to-next">
          <a href="#about">
            <span />
          </a>
        </div>
      </section>
      {/* End Home Banner */}
      {/* about us */}
      <About />
      {/* end about us */}
      {/* fun */}
      <Skills />
      {/* End fun */}
      {/* resume */}
      <Services />
      {/* End resume */}
      {/* Work */}
      <Work />
      {/* End work */}
      {/* Testiminails */}
      <Testiminails />
      {/* End Testiminails */}
      {/* Blog */}
      {/* End Blog */}
      <Contact />
    </Layout>
  );
};
export default Index2;
