import React from 'react'
import igIcon from '../images/instagram.png'
import fbIcon from '../images/facebook.png'

const SocialMenu = () => {
    return (
        <div className="socialMenu">
            <a href="https://www.instagram.com/blueshadescoffeewaffles/" target="_blank">
               <img src={igIcon} alt="instagram icon"/>
            </a>
            <a href="https://www.facebook.com/blueshadescoffee/" target="_blank">
                <img src={fbIcon} alt="facebook icon"/>
            </a>
        </div>
    )
}

export default SocialMenu