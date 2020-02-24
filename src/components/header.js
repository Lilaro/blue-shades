import { Link } from "gatsby"
import React from "react"

const Header = () => (
  
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
      </nav>
    </div>

)

export default Header
