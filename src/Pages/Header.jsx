import React from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import backgroundImage from '../assets/IMG_5650.jpg';

// should contain navBar
// have to be able to navigate between different sections/pages of portfolio. (maybe add <Link> or <NavLink> and use react router)
// make sure it is responsive and appears correctly on all pages
function Header() {
    return (
        <div>
        <header>
            <Navbar />
            <Hero backgroundImage={backgroundImage}>
        <h1>Developer based in London</h1>
        <h2>Details, creativity and passion brings all the right people together.</h2>
      </Hero>
      
        </header>
        </div>
    )
}
// export header
export default Header;