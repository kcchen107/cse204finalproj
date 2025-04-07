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


      <header>
        <h1>KC Tutoring</h1>
      </header>
      <nav>
        <a href="#about">About Us</a>
        <a href="#success">Success Stories</a>
        <a href="#packages">Packages</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <section id="packages">
          <h1>Packages</h1>
          <div className="card">Package 1: Basic Tutoring</div>
          <div className="card">Package 2: Intermediate Tutoring</div>
          <div className="card">Package 3: Advanced Tutoring</div>
        </section>

        <section id="about">
          <h1>About Us</h1>
          <div className="card">
            <h2> Founder Background</h2>
            <p>
              KC Chen is a tutor with 7+ years of experience helping students excel in their academics.
            </p>
            <h2>Mission Statement</h2>
            <p>
              We provide the best tutoring service to ensure students meet their academic goals while positively impacting their lives.
            </p>
            <h2>Guarantee</h2>
            <p>
              We want you to be 100% satisfied with every session and embrace feedback to enhance your experience.
            </p>
          </div>
        </section>


        <section id="success">
          <h1>Hear Success Stories From Our Students</h1>

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


        <Section id="storiesSecond" direction="left">
          <StoriesTWO />
        </Section>


        <Program> </Program>

        {/* 
          Use following code if want packages to slide in from left:
        <Section id="programPackages">
          <Program> </Program>
        </Section> 
        */}


        <section id="packages">
          <h1>Packages</h1>
          <div className="card">Package 1: Basic Tutoring</div>
          <div className="card">Package 2: Intermediate Tutoring</div>
          <div className="card">Package 3: Advanced Tutoring</div>
        </section>

        <Section id="gallery" direction="left">
          <Gallery />
        </Section>

        <section id="quiz">
          <h2>Quiz - See which package best fits your goals</h2>
        </section>

        <section id="contact">
          <h1>Contact Me</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="goal"
              placeholder="Goal of Tutoring"
              value={formData.goal}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </section>


      </main>


    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));



export default App
