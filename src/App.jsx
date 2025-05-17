import "./App.css";
import Navs from "./components/navbar/Navs";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Features from "./components/features/Features";
import Courses from "./components/Courses/Courses";
import Teachers from "./components/Teachers/Teachers";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
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
