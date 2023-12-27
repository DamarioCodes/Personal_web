import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Testiminails = () => {
  return (
    <section className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Testimonials</h3>
              <p className="text-uppercase small">
                Some kind remarks from people who I've met on my journey
              </p>
            </div>
          </div>
        </div>
        <Swiper {...sliderProps.testimonial}>
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-1.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                  Damario has shown great potential excited to see what he does next.
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                     anonymous
                  </h6>
                  <span>anonymous</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-2.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                 Damario work ethic is nothing to laugh at, he does his best to produce the best
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                   Anonymous
                  </h6>
                  <span>Anonymous</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-3.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                 We had a project and Damario's skill put it to the next level
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                    Anonymous
                  </h6>
                  <span>groupmate</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-4.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                 Damario changed my life with his exceptional coding skills
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                   Izaiah Caston
                  </h6>
                  <span>Classmate</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testiminails;
