import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const App = () => {
  const [successStories, setSuccessStories] = useState([]);
  const [currentStory, setCurrentStory] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    goal: "",
  });

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
        <a href="#about">About Me</a>
        <a href="#success">Success Stories</a>
        <a href="#packages">Packages</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <div className="card">
            <img src="my-photo.jpg" alt="My Photo" style={{ maxWidth: "100px" }} />
            <p>
              I am a passionate tutor with years of experience helping students excel in their academics.
            </p>
          </div>
        </section>

        <section id="success">
          <h2>Success Stories</h2>
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

        <section id="packages">
          <h2>Packages</h2>
          <div className="card">Package 1: Basic Tutoring</div>
          <div className="card">Package 2: Intermediate Tutoring</div>
          <div className="card">Package 3: Advanced Tutoring</div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
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
