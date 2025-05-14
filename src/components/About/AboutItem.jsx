function AboutItem({icon, title, description}) {
    return (
      <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="150">
        <div className="icon-box d-flex justify-content-center align-items-center flex-column">
          <i className={`bi ${icon}`}></i>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
}

export default AboutItem;