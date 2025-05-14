function CoursesItem({
  courseImg,
  c_btn,
  c_price,
  c_title,
  c_text,
  trainerImg,
  c_trainer_name,
  c_trainer_rank_students,
  c_trainer_rank_hearts,
  dataAos,
  dataAosDelay
}) {
  return (
    <div
      className="col-lg-4 col-md-6 d-flex align-items-stretch"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}>
      <div className="course-item">
        <div className="course-item-img">
          <img src={courseImg} className="img-fluid" alt="course-img" />
        </div>
        <div className="course-content">
          <div className="c-content d-flex justify-content-between align-items-center mb-3">
            <p className="c-btn">{c_btn}</p>
            <p className="c-price">{c_price}</p>
          </div>
          <h3 className="c-h3-title">{c_title}</h3>
          <p className="c-p-text">{c_text}</p>
          <div className="trainer d-flex justify-content-between align-items-center">
            <div className="trainer-profile d-flex align-items-center gap-2">
              <img
                src={trainerImg}
                className="img-fluid img-profile"
                alt="trainer-img"
              />
              <span>{c_trainer_name}</span>
            </div>
            <div className="trainer-rank d-flex align-items-center gap-2">
              <i class="bi bi-person">
                <span>{c_trainer_rank_students}</span>
              </i>
              <i class="bi bi-heart">
                <span>{c_trainer_rank_hearts}</span>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesItem;