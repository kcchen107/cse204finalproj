import React, { useState } from "react";
import "./stories.css";
import { motion } from "framer-motion";

export default function App() {

    console.log(motion);
    const [flip, setFlip] = useState(true);
    const [curIndex, setCurIndex] = useState(0); // default shows the 0th text and image

    // array to store the text above image, call it stories here as an example.
    const stories = [
        "Resilience",
        "Courage",
        "Diligence",
        "Principle",
        "Hard Work",
        "Consistency",
        "Proven Results",
        "Intelligence",
    ]

    // array to store links to your actual photos.
    
    const storiesImages = [
        "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1518963534257-f901d4d46f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
    ]

    const storiesBack = [
        "cat",
        "dog",
        "lizard",
        "kit",
        "mouse",
        "racoon",
        "alligator",
        "dragon"
    ]

    return (
        <div className="App">
            <motion.div
                transition={{ duration: 0.7 }}
                animate={{ rotateY: flip ? 0 : 180 }}
            >
                <motion.div
                    transition={{ duration: 0.7 }}
                    animate={{ rotateY: flip ? 0 : 180 }}
                    className="Card"
                >
                    {/* Start of front side of card */}

                    <motion.div
                        transition={{ duration: 0.7 }}
                        animate={{ rotateY: flip ? 0 : 180 }}
                        className="front"
                    >
                        {/* whatever that goes inside card */}
                        <p>{stories[curIndex]}</p>      {/* this is your caption, on the front side of your card */}
                        
                        <div className="storiesImages">
                        <img src={storiesImages[curIndex]} />     {/* this is your image, on the front side */}
                        </div>
                    
                    </motion.div>

                    {/* End of front side */}


                    {/* Start of back side of card */}

                    <motion.div
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: flip ? 180 : 0 }}
                        // style={{ display: flip ? "none" : "block" }}
                        transition={{ duration: 0.7 }}
                        className="back"
                    >
                        {/* whatever that goes inside your card */}
                        <p>{curIndex > storiesBack.length ? storiesBack[0] : storiesBack[curIndex + 1]}</p>

                    </motion.div>

                    {/* End of back side */}


                    <button className="flipButton" onClick={() => {
                        setFlip((prevState) => !prevState);
                        curIndex = curIndex + 1;
                    }}>
                        Click here to view contact information
                    </button>
                </motion.div>
            </motion.div>

        </div>

    );
};
