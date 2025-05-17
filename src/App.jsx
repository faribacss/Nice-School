import "./App.css";
import { useState, useEffect } from "react";
import Navs from "./components/navbar/Navs";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Features from "./components/features/Features";
import Courses from "./components/Courses/Courses";
import Teachers from "./components/Teachers/Teachers";
import Footer from "./components/Footer/Footer";


function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 200){
        setShowGoToTop(true);
      }
      else{
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <>
      {showGoToTop && (
        <div className="go-to-top" onClick={handleGoToTop}>
          <a href="#"><i class="bi bi-arrow-up-short"></i></a>
        </div>
      )}
      <Navs />
      <Header />
      <Body />
      <About />
      <Features />
      <Courses />
      <Teachers />
      <Footer />
    </>
  );
}

export default App;
