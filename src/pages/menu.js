import React from 'react'
import Header from '../components/header'
import TitleCard from '../components/titleCard'
import SocialMenu from '../components/socialMenu'

const MenuPage = () => {
    return (
      <>
        <div className="container">
          <div><Header className="navigation" /></div>
          <div><TitleCard className="titleCard"/></div>
          <div><SocialMenu className="socialMenu"/></div>
        </div>
      </>
    )
}

export default MenuPage