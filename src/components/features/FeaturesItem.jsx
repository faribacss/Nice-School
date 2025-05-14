function FeaturesItem({icon, title, color}) {
    return (
      <div
        className="col-lg-3 col-md-4"
        data-aos="fade-up"
        data-aos-delay="180"
      >
        <div className="feature-item">
          <i className={icon} style={{color: color}}></i>
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
      </div>
    );
}

export default FeaturesItem;