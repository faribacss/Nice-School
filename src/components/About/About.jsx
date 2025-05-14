import "./About.css";
import AboutItem from "./AboutItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
    const aboutItems = [
      {
        id: 1,
        icon: "bi-clipboard-data",
        title: "Corporis voluptates officia eiusmod",
        description:
          "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      },
      {
        id: 2,
        icon: "bi-gem",
        title: "Ullamco laboris ladore pan",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      },
      {
        id: 3,
        icon: "bi-inboxes",
        title: "Labore consequatur incidid dolore",
        description:
          "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
      },
    ];
    useEffect(() => {
        AOS.init({
            duration: 800, // زمان انیمیشن‌ها (ms)
            once: true, // فقط یکبار انیمیشن اجرا شه
        });
    }, []);
    return (
      <section className="why-us">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-md-6 col-xl-3"
              aos-init
              aos-animate="fade-up"
              data-aos-delay="110"
            >
              <div className="why-box">
                <h3>Why Choose Our Products?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <div className="text-center d-flex justify-content-center align-items-center read-more-btn">
                  <a href="#" className="btn-get-started">
                    Read More
                  </a>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>

            {aboutItems.map((item) => (
              <AboutItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      // End About
    );
}

export default About;