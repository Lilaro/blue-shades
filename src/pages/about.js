import React from 'react'
import Header from "../components/header"
import TitleCard from "../components/titleCard"
import SocialMenu from "../components/socialMenu"

const AboutPage = () => {
    return (
        <>
        <div className="container">
            <Header />
            <SocialMenu />
            <TitleCard>
            <div>
            <p>
            We opened up our shop in what feels like the heart of Worcester,
            Park Ave where west meets central Worcester. It was hard to
            find single origin coffee in Worcester, or those gooey,
            caramelized liege waffles you can only find at ski resorts in
            the US. Or those delectable, memory-making snacks in various
            hubs around the world.  So, here we are--we're grateful we get
            to bring tasty and unique foods made with real ingredients to Worcester.
            </p>
            </div>
            </TitleCard>
            </div>
        </>
    )
}

export default AboutPage
