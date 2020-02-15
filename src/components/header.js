import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
  <div className="container">
    <div className="navigation">
      <nav>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </nav>
    </div>
  </div>
</header>
)

export default Header
