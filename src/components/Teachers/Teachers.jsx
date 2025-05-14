import './Teachers.css'
import TeachersItem from './TeachersItem'
import AOS from 'aos'
import 'aos/dist/aos.css'
import teacher_image from '../../../public/img/trainer-1.png'
import teacher_image2 from '../../../public/img/trainer-2.png'
import teacher_image3 from '../../../public/img/trainer-3.png'
import { useEffect } from 'react'
function Teachers() {
  const teachers = [
    {
      id: 1,
      dataAos: "fade-up",
      dataAosDelay: 100,
      teacherImg: teacher_image,
      teacherName: "Walter White",
      teacherRank: "Web Development",
      teacherDescription:
        "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
      teacherSocialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      dataAos: "fade-up",
      dataAosDelay: 200,
      teacherImg: teacher_image2,
      teacherName: "Sarah Jhinson",
      teacherRank: "Marketing",
      teacherDescription:
        "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
      teacherSocialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      dataAos: "fade-up",
      dataAosDelay: 300,
      teacherImg: teacher_image3,
      teacherName: "William Anderson",
      teacherRank: "Content",
      teacherDescription:
        "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
      teacherSocialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className="teachers">
      <div className="container">
        <div className="row gy-4">
          {teachers.map((teacher) => (
            <TeachersItem key={teacher.id} {...teacher} />
          ))}
        </div>
      </div>
    </section>
    // End of team section
  );
}

export default Teachers;


