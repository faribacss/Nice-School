import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <a href="#" className="footer-logo">
              Mentor
            </a>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone: </strong>
                <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email: </strong>
                <span>info@example.com</span>
              </p>
            </div>
            <div
              className="social-media d-flex align-items-center gap-3"
            >
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-3 footer-links"
          >
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-2 col-md-3 footer-links"
          >
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-4 col-md-12 news-letter"
          >
            <h4>Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
            <div className="container footer-bottom">
                <div className="copyright">
                    &copy; Copyright <strong>Mentor</strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="#">BootstrapMade</a>
                </div>
            </div>
    </footer>
    // End Footer
  );
}

export default Footer;