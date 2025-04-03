import React, { useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";
 
export default function App() {
  console.log(motion);
  const [flip, setFlip] = useState(true);
  const [curIndex, setCurIndex] = useState(0); // default shows the 0th text and image
 
  // array to store your text above image, we call it myText here as an example.
  const myText = [
            	"text 1",
            	"text 2",
            	"text 3",
            	"text 4"
  ]
 
  // array to store links to your actual photos.
  const myImage = [
            	"image 1",
            	"image 2",
            	"image 3",
            	"image 4"
  ]
 
  return (
	<div className="App">
  	<motion.div
    	style={{ width: "20rem", height: "10rem" }}
    	transition={{ duration: 0.7 }}
    	animate={{ rotateY: flip ? 0 : 180 }}
  	>
    	<motion.div
      	transition={{ duration: 0.7 }}
      	animate={{ rotateY: flip ? 0 : 180 }}
      	className="Card"
    	>
                                            	<!-- below is basically your front side of the card-->
      	<motion.div
        	transition={{ duration: 0.7 }}
        	animate={{ rotateY: flip ? 0 : 180 }}
        	className="front"
      	>
                                            	<!-- whatever that goes inside your card-->
        	<p>{myText[curIndex]}</p> <!-- this is your caption, on the front side of your card-->
                                            	<img src={myImage[curIndex]}> <!-- this is your image, on the front side-->
      	</motion.div>
                                  <!-- end of front side-->
                                 
                                  <!-- below is the back side of the card-->
      	<motion.div
        	initial={{ rotateY: 180 }}
        	animate={{ rotateY: flip ? 180 : 0 }}
        	// style={{ display: flip ? "none" : "block" }}
        	transition={{ duration: 0.7 }}
        	className="back"
      	>
                                            	<!-- whatever that goes inside your card-->
        	<p>{curIndex > myText.length ? myText[0] : myText[curIndex + 1]}</p>
                                            	<img src={curIndex > myText.length ? myImage[0] : myImage[curIndex + 1]}>
      	</motion.div>
                                  <!--end of back side-->
                                 
                                  
          <button onClick={() => {
                                            	setFlip((prevState) => !prevState);
                                            	curIndex = curIndex + 1;
                                            	}}>
        	Click me
      	</button>
    	</motion.div>
  	</motion.div>
	</div>
  );
}
