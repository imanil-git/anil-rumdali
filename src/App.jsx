import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" title="half-circle-stroke" />
      <div className="wrapper">
        {/* <!-- dark mode toggler --> */}
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- Navbar --> */}
        <Navbar />

        {/* <!-- hero section --> */}
        <Hero />

        {/* <!-- skills section --> */}
        <Skills />

        {/* <!-- project section --> */}
        <Project />

        {/* <!-- about me section --> */}
        <About />

        {/* <!-- Contact section --> */}
        <Contact />

        {/* <!-- Footer Section --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
