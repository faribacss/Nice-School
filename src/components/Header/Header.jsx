import "./Header.css";
import { motion } from "framer-motion";
function Header() {
  return (
    <section className="header">
      <div className="hero-body">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Learning Today, <br /> Leading Tomorrow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We are team of talented designers making websites with Bootstrap
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <button className="started-btn">Get Started</button>
        </motion.div>
      </div>
    </section>
    // End Header
  );
}

export default Header;
