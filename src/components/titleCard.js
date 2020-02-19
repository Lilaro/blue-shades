import React from 'react'

const TitleCard = () => {

    let cardContent;
        if (window.location.pathname === "/about") {
            cardContent = <p className="about">
                            We opened up our shop in what feels like<br/>
                            the heart of Worcester, Park Ave., where west<br/>
                            meets central Worcester. It was hard to find<br/>
                            single origin coffee in Worcester, or those<br/>
                            gooey, caramelized liege waffles you can<br/>
                            only find at ski resorts in the US. Or those<br/>
                            delectable, memory-making snacks in<br/>
                            various hubs around the world. So, here we<br/>
                            are--we're grateful we get to bring tasty<br/>
                            and unique foods made with real ingredients<br/>
                            to Worcester.
                          </p>
        } else if (window.location.pathname === "/menu") { 
            cardContent = <><p>Our Rotating Menu of Street Snacks</p>
                            <ul className="menu-list">
                                <li>Grilled Cheese: Homemade italian bread and your choice of cheese</li>
                                <li>Waffle Sandwiches: with turkey or cheese</li>
                                <li>Toast: Avocado, Egg</li> 
                                <li>Dumplings: Shrimp</li>
                                <li>Sliders: Egg with your choice</li> 
                                <li>Ramen: Hong Kong style</li>
                            </ul>
                            <p>Menu specials come up daily.</p></>
        } else {
            cardContent = <div className="home-content">
                            <p>
                                A single-origin coffee and liege waffle
                                shop in Worcester. With street snacks from 
                                around the world!
                            </p>
                        </div>
        }
    

    return (
        <>
        <div className="titleCard">
            <div className="text-container">
                <h1>Blue Shades</h1>
                <p className="card-content">{cardContent}</p>
                <div className="card-footer">
                    <p className="address">
                        256 Park Avenue<br/>
                        Worcester, Massachusetts 01609<br/>
                        United States<br/>
                    </p>
                    <p className="contactInfo">
                        (774) 420-2718<br/>
                        Email: yumefoods@gmail.com<br/>
                    </p>
                    <p className="hours">
                        Come on in.<br/>
                        Our hours:<br/>
                        Monday-Saturday (except Tuesday) 8:30AM-7:00PM<br/>
                        Sunday 10:30AM-3:00PM<br/>
                        Closed Tuesdays<br/>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TitleCard
