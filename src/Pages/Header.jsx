import React from "react";
import Navbar from './Components/Navbar';

// should contain navBar
// have to be able to navigate between different sections/pages of portfolio. (maybe add <Link> or <NavLink> and use react router)
// make sure it is responsive and appears correctly on all pages
function Header() {
    return (
        <header>
            <Navbar />
        </header>
    )
}
// export header
export default Header;