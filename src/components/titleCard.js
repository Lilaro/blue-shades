import React from 'react'
import logo from '../images/logo.png'

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
                                shop in Worcester, MA. With street snacks from 
                                around the world!
                            </p>
                        </div>
        }
    

    return (
        <>
        <div className="titleCard">
            <a href='/'>
                <img className='logo' src={logo} />
            </a>
            <div className="text-container">
                <div className="card-content">{cardContent}</div>
                <div className="card-footer">
                    <p className="address">
                        <a className="address-link" target="_blank" href="https://www.google.com/maps/place/Blue+Shades/@42.2647453,-71.8214347,17z/data=!3m1!4b1!4m5!3m4!1s0x89e4068e704987af:0x14f968ed1342c6fc!8m2!3d42.2647453!4d-71.819246">
                            256 Park Avenue<br/>
                            Worcester, Massachusetts 01609<br/>
                            United States<br/>
                        </a>
                    </p>
                    <p className="contactInfo">
                        (774) 420-2718<br/>
                        yumefoods@gmail.com<br/>
                    </p>
                    <p className="hours">
                        Come on in:<br/>
                        Mon-Sat (except Tues) 8:30AM-7:00PM<br/>
                        Sun 10:30AM-3:00PM<br/>
                        Closed Tuesdays<br/>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TitleCard
