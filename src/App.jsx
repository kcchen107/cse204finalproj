import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Stories from "./stories";
import StoriesTWO from "./storiesTWO";
import { motion, useInView } from "framer-motion";
import Gallery from "./gallery";
import Program from "./program";
import Packages from "./packages";


const App = () => {

  const [api, loadApi] = useState(
  
  );

  const [successStories, setSuccessStories] = useState([]);
  const [currentStory, setCurrentStory] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    goal: "",
  }
  );

  const stories = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];




  const animationVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  });

  const Section = ({ id, children, direction = "left" }) => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });

    return (
      <motion.div
        id={id}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants(direction)}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  };

  // first api start
  useEffect(() => {
    fetch("https://thequoteshub.com/api/")
      .then((response) => response.json())
      .then((data) => setSuccessStories(data));
  }, []);
  //  first api end

  // final api
  // useEffect(() => {
  //   fetch("https://type.fit/api/quotes")
  //     .then((response) => response.json())
  //     .then((data) => loadApi(data[2].text));
  // }, []);
  //  final api end

  const newQuote = () => {
    fetch("https://classes.engineering.wustl.edu/cse330/content/weather_json.php")
      .then((response) => response.json())
      .then((data) => loadApi(data.location.city));
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your request, ${formData.fullName}!`);
    setFormData({ fullName: "", email: "", phone: "", goal: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div>

      <div id="topBar">
        <header>
          <h1 id="academyName">Chen Academy</h1>
        </header>
        <nav id="navBar">
          <a href="#about">About Us</a>
          <a href="#programs">Programs</a>
          <a href="#packages">Packages</a>
          <a href="#success">Success Stories</a>
          <a href="#corevalues">Core Values</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <main>

        <section id="about">
          <h1 id="aboutTitle">About Us</h1>
          <div className="card">

            <div className="card">
              <h2>Mission Statement</h2>
              <p>
                We provide the best tutoring service to ensure students meet their academic goals while positively impacting their lives.
              </p>
            </div>

            <div className="card">
              <h2>Satisfaction Guaranteed</h2>
              <p>
                We want you to be 100% satisfied with every session and embrace feedback to enhance your experience.
              </p>
            </div>


          </div>
        </section>


        <section id="programs">
          <h1>Program Types</h1>
          <h3 id="flipDirections">Our most popular programs are listed below. Click on a program card to view several of the class offerings within the program.</h3>

        </section>
        <Program> </Program>


        <section id="packages">
          <div id="packagesTopBar">
            <h1 id="packagesTitle">Packages</h1>
            <h3 id="packagesDirections">We have packages to address all student needs, from tutoring for one semster to tutoring for multiple school years. Save up to 10% with our Essentials Package and Advanced Package!</h3>
          </div>

          <div className="card">
            <div className="card">1. Basic Package (pay as you go)</div>
            <div className="card">2. Essentials Package (purchase 15 hour bundle)</div>
            <div className="card">3. Advanced Package (purchase 28 hour bundle)</div>
          </div>

          <Packages> </Packages>

        </section>


        <section id="success">
          <h1>Hear Success Stories From Our Students</h1>
          <h3 id="successDirections">Learn about our student experiences by tapping through their quotes.</h3>

          {successStories.length > 0 && (
            <div>
              <blockquote>
                "{successStories[currentStory].text}" -{" "}
                {successStories[currentStory].author || "Anonymous"}

              </blockquote>
              <button onClick={prevStory}>Previous</button>
              <button onClick={nextStory}>Next</button>
            </div>
          )}
        </section>

        <Section id="together" direction="left">
          <div id="stories-container" className="stories-container">
            <Stories stories={stories} />
          </div>
        </Section>


        {/* 
          Use following code if want packages to slide in from left:
        <Section id="programPackages">
          <Program> </Program>
        </Section> 
        */}

        <div id="coolQuote">
          <button id="clickInspo" onClick={newQuote}>
            <h3>We offer our services in various cities and countries. Click to generate an example location.</h3>
          </button>

          <div className="card" id="inspireQuote">
            <h3>{api}</h3>
            {/* this div is for the resulting text from the API */}
          </div>
        </div>


        <section id="corevalues">
          <h1>Core Values Present Across All Programs</h1>
          <h3 id="coreValueDirections">We believe in aiming high, helping students accomplish challenging tasks, and leaving positive impacts. Click to expand the images.
          </h3>
        </section>


        <Section id="gallery" direction="left">
          <Gallery />
        </Section>


        <section id="contact">
          <h1 id="contactTitle">Contact Us</h1>
          <Section id="storiesSecond" direction="left">
            <StoriesTWO />
          </Section>
        </section>


      </main>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));



export default App
