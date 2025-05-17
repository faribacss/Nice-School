function TeachersItem({
  teacherImg,
  teacherName,
  teacherRank,
  teacherDescription,
  teacherSocialLinks,
  dataAos,
  dataAosDelay
}) {
  return (
    <div
      className="col-lg-4 col-md-6 d-flex align-items-stretch teacher-item"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div className="member">
        <div className="member-img">
          <img src={teacherImg} className="img-fluid" alt="teacher-img" />
        </div>

        <div className="member-content">
          <div className="teacher-info">
            <h4>{teacherName}</h4>
            <span>{teacherRank}</span>
            <p>{teacherDescription}</p>
          </div>
          <div className="social-links">
            <a href={teacherSocialLinks.twitter} className="twitter">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href={teacherSocialLinks.facebook} className="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href={teacherSocialLinks.instagram} className="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href={teacherSocialLinks.linkedin} className="linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachersItem
