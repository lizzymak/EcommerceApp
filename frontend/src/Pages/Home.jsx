import React from "react";
import Slideshow from "../components/Slideshow";

const Home =()=>{
    const images = [
        "./src/assets/wings.jpg",
        "./src/assets/jeanStyles.jpg",
        "./src/assets/banner3.jpg",
  ]
    return(
        <div className="home">
            <Slideshow images={images} />

            <div className="intro">
                <h1>Welcome to the Angel Apparel</h1>
                <p>Shop our latest looks.</p>
            </div>
           
        </div>
    )
}

export default Home