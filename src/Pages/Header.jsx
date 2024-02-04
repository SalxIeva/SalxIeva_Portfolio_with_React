import React from "react";
import NavBar from "../components/Navbar/NavBar";

// should contain navBar
// have to be able to navigate between different sections/pages of portfolio. (maybe add <Link> or <NavLink> and use react router)
// make sure it is responsive and appears correctly on all pages
function Header() {
    return (
        <div>
        <header>
            <NavBar />
      
        </header>
        </div>
    )
}
// export header
export default Header;