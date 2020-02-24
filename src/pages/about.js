import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import TitleCard from '../components/titleCard'
import SocialMenu from '../components/socialMenu'

const AboutPage = () => {
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

export default AboutPage



// <p>
// We opened up our shop in what feels like the heart of Worcester,
// Park Ave where west meets central Worcester. It was hard to
// find single origin coffee in Worcester, or those gooey,
// caramelized liege waffles you can only find at ski resorts in
// the US. Or those delectable, memory-making snacks in various
// hubs around the world.  So, here we are--we're grateful we get
// to bring tasty and unique foods made with real ingredients to Worcester.
// </p>