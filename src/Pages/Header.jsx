import React from "react";
import Navbar from "../components/Navbar/index.jsx";

// should contain navBar
// have to be able to navigate between different sections/pages of portfolio. (maybe add <Link> or <NavLink> and use react router)
// make sure it is responsive and appears correctly on all pages
function Header() {
    return (
        <div>
        <header>
            <Navbar />
      
        </header>
        </div>
    )
}
// export header
export default Header;