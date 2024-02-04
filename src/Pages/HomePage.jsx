import React from "react";
import Hero from "../components/Hero/";
import backgroundImage from '../assets/IMG_5650.jpg';

function HomePage() {
    return (
        <div>
            <Hero backgroundImage={backgroundImage}>
        <h1>Developer based in London</h1>
        <h2>Details, creativity and passion brings all the right people together.</h2>
      </Hero>
        </div>
    )
}

export default HomePage;