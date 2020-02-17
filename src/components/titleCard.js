import React from 'react'

const TitleCard = () => {

    let cardContent;
        if (window.location.pathname === "/about") {
            cardContent = <p>
                            We opened up our shop in what feels like
                            the heart of Worcester, Park Ave where west
                            meets central Worcester. It was hard to find
                            single origin coffee in Worcester, or those gooey,
                            caramelized liege waffles you can only find at
                            ski resorts in the US. Or those delectable,
                            memory-making snacks in various hubs around the
                            world.  So, here we are--we're grateful we get
                            to bring tasty and unique foods made with real
                            ingredients to Worcester.
                          </p>
        } else if (window.location.pathname === "/menu") { 
            cardContent = <><p>Our Rotating Menu of Street Snacks</p>
                            <ul>
                                Grilled Cheese: Homemade italian bread and your choice of cheese
                                Waffle Sandwiches: with turkey or cheese
                                Toast: Avocado, Egg 
                                Dumplings: Shrimp
                                Sliders: Egg with your choice 
                                Ramen: Hong Kong style
                            </ul>
                            <p>Menu specials come up daily.</p></>
        } else {
            cardContent = <div className="home-content">
                            <h1>Blue Shades</h1>
                            <p>
                                A single-origin coffee and liege waffle
                                shop in Worcester. With street snacks from 
                                around the world!
                            </p>
                            <p>
                                Come on in. 
                                Our hours
                                Monday-Saturday (except Tuesday) 8:30AM-7:00PM
                                Sunday 10:30AM-3:00PM
                                Closed Tuesdays
                            </p>
                            <p>
                                256 Park Avenue
                                Worcester, Massachusetts 01609
                                United States
                            </p>
                            <p>
                                (774) 420-2718
                                Email: yumefoods@gmail.com
                            </p>
                        </div>
        }
    

    return (
        <>
        <div className="titleCard">
            {cardContent}
        </div>
        </>
    )
}

export default TitleCard
