import React from "react"
import '../styles/styles.scss'
import Header from "../components/header"
import TitleCard from "../components/titleCard"
import SocialMenu from "../components/socialMenu"


const IndexPage = () => (
  <>
  <div className="container">
  <Header />
  <SocialMenu/>
  <TitleCard/>
  </div>
  </>
)

export default IndexPage
