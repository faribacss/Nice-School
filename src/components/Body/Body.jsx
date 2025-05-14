import "./Body.css";
import CountUpBox from "./CountUpBox";
import right from "../../../public/img/about.png";
import { Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Body() {
  useEffect(() => {
    AOS.init({
      duration: 800, // زمان انیمیشن‌ها (ms)
      once: true, // فقط یکبار انیمیشن اجرا شه
    });
  }, []);
  return (
    <>
      <section className="section-body">
        <Row>
          <div className="right col-lg-6 col-sm-12" data-aos="fade-up">
            <h1 className="title-body">
              Voluptatem dignissimos provident quasi corporis
            </h1>
            <p className="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-body">
              <li>
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>
            <div className="btn-body" data-aos="fade-up">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12" data-aos="fade-up">
            <img src={right} alt="right" className="img-right" />
          </div>
        </Row>
      </section>
      <section className="count">
        <div className="container-count">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <CountUpBox id="students" label="Students" targetNumber={1232} />
            </div>
            <div className="col-lg-3 col-md-6">
              <CountUpBox id="teachers" label="Trainers" targetNumber={24} />
            </div>
            <div className="col-lg-3 col-md-6">
              <CountUpBox id="courses" label="Courses" targetNumber={64} />
            </div>
            <div className="col-lg-3 col-md-6">
              <CountUpBox id="events" label="Events" targetNumber={42} />
            </div>
          </div>
        </div>
      </section>
    </>
      // End Count
  );
}

export default Body;
