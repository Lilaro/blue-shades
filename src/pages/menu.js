import React from 'react'
import Header from "../components/header"
import TitleCard from "../components/titleCard"
import SocialMenu from "../components/socialMenu"

const MenuPage = () => {
    return (
      <>
        <div className="container">
          <Header />
          <SocialMenu />
          <TitleCard />
        </div>
      </>
    )
}

export default MenuPage