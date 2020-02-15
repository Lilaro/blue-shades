import React from 'react'
import Header from "../components/header"
import TitleCard from "../components/titleCard"

const MenuPage = () => {
    return (
      <>
      <div className="container">
        <Header />
        <TitleCard>
        <div>
          Menu Items  
        </div>
        </TitleCard>
        </div>
      </>
    )
}

export default MenuPage