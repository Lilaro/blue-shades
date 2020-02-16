import { Link } from "gatsby"
import React from "react"

const Header = () => (
  
    <div className="navigation">
      <nav>

        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}

      </nav>
    </div>

)

export default Header
