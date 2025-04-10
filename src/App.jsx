import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Stories from "./stories";
import StoriesTWO from "./storiesTWO";
import { motion, useInView } from "framer-motion";
import Gallery from "./gallery";
import Program from "./program";


const App = () => {
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
    "Resilience",
    "Courage",
    "Diligence",
    "Principle",
    "Hard Work",
    "Consistency",
    "Proven Results",
    "Intelligence",
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


  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setSuccessStories(data.slice(0, 5))); // Use 5 success stories
  }, []);

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
          <h1>Chen Academy</h1>
        </header>
        <nav>
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
              <h2>Guarantee</h2>
              <p>
                We want you to be 100% satisfied with every session and embrace feedback to enhance your experience.
              </p>
            </div>


          </div>
        </section>


        <section id="programs">
          <h1>Program Types</h1>
          <h3 id="flipDirections">Flip over card to view a few of our program offerings.</h3>

        </section>
        <Program> </Program>


        <section id="packages">
          <h1 id="packagesTitle">Packages</h1>

          <div className="card">
            <div className="card">Package 1: Basic Tutoring (pay as you go)</div>
            <div className="card">Package 2: Intermediate Tutoring (purchase 15 hour bundle)</div>
            <div className="card">Package 3: Advanced Tutoring (purchase 28 hour bundle)</div>
          </div>

        </section>


        <section id="success">
          <h1>Hear Success Stories From Our Students</h1>
          <h3 id="successDirections">Tap through student stories.</h3>

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


        <section id="corevalues">
          <h1>Core Values Present Across All Programs</h1>
          <h3 id="coreValueDirections">Click to expand image.</h3>
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
