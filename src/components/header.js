import { Link } from "gatsby"
import React from "react"
import igIcon from '../images/instagram.png'
import fbIcon from '../images/facebook.png'

const Header = () => (
  
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
      </nav>
      <div className="socialMenu">
            <a href="https://www.instagram.com/blueshadescoffeewaffles/" target="_blank" rel="noopener noreferrer">
               <img src={igIcon} alt="instagram link icon"/>
            </a>
            <a href="https://www.facebook.com/blueshadescoffee/" target="_blank" rel="noopener noreferrer">
                <img src={fbIcon} alt="facebook link icon"/>
            </a>
        </div>
    </div>

)

export default Header
