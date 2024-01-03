import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
              <p className="text-uppercase small">
                Some work I would like to showcase
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/Screenshot 2023-12-31 at 11.57.56 PM (1).png" alt="image"/>
              </div>
              <div className="portfolio-info">
                <h5>Full-Stack Invaders</h5>
                <span>space invaders remake</span>
              </div>
              <a className="link-overlay" href="https://github.com/DamarioCodes/full-stack-invaders-game" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/Screenshot 2024-01-01 at 1.38.17 AM.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Front-End form</h5>
                <span>Simple form </span>
              </div>
              <a className="link-overlay" href="https://github.com/DamarioCodes/SimpleForm" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/Screenshot 2024-01-01 at 12.05.41 AM.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>To-do app</h5>
                <span>basic to-do app </span>
              </div>
              <a className="link-overlay" href="https://github.com/DamarioCodes/ToDoApp" />
            </div>
          </div>{" "}
       
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Work
