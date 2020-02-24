import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import TitleCard from '../components/titleCard'
import SocialMenu from '../components/socialMenu'

const MenuPage = () => {
    return (
      <>
        <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <html lang="en" />
        </Helmet>
        </div>
        <div className="container-1">
          <div><Header className="navigation" /></div>
          <div><TitleCard className="titleCard"/></div>
          <div><SocialMenu className="socialMenu"/></div>
        </div>
      </>
    )
}

export default MenuPage