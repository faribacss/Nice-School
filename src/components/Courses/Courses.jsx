import "./Courses.css";
import CoursesItem from "./CoursesItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import courseImg_1 from "../../../public/img/course-1.png";
import trainerImg_1 from "../../../public/img/trainer-1-2.png";
import courseImg_2 from "../../../public/img/course-2.png";
import trainerImg_2 from "../../../public/img/trainer-2-2.png";
import courseImg_3 from "../../../public/img/course-3.png";
import trainerImg_3 from "../../../public/img/trainer-3-2.png";




function Courses() {
  const courses = [
    {
      id: 1,
      c_btn: "Web Development",
      c_price: "$ 169",
      c_title: "Website Design",
      c_text:
        "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      c_trainer_name: "Antonio",
      c_trainer_rank_students: "50",
      c_trainer_rank_hearts: "65",
      courseImg: courseImg_1,
      trainerImg: trainerImg_1,
      dataAos: "zoom-in",
      dataAosDelay: "100",
    },
    {
      id: 2,
      c_btn: "Marketing",
      c_price: "$ 250",
      c_title: "Search Engine Optimization",
      c_text:
        "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      c_trainer_name: "Lana",
      c_trainer_rank_students: "35",
      c_trainer_rank_hearts: "42",
      courseImg: courseImg_2,
      trainerImg: trainerImg_2,
      dataAos: "zoom-in",
      dataAosDelay: "200",
    },
    {
      id: 3,
      c_btn: "Content",
      c_price: "$ 180",
      c_title: "Copywriting",
      c_text:
        "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      c_trainer_name: "Brandon",
      c_trainer_rank_students: "20",
      c_trainer_rank_hearts: "85",
      courseImg: courseImg_3,
      trainerImg: trainerImg_3,
      dataAos: "zoom-in",
      dataAosDelay: "300",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <section className="courses">
      <div className="container courses-title" data-aos="fade-up">
        <small>COURSES</small>
        <h1>Popular Courses</h1>
      </div>
      <div className="container">
        <div className="row gy-4">
          {courses.map(course => (
            <CoursesItem key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
