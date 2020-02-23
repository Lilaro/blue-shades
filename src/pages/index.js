import React from "react"
import '../styles/styles.scss'
import Header from '../components/header'
import TitleCard from '../components/titleCard'
import SocialMenu from '../components/socialMenu'
import Reviews from '../components/reviews'
// import Places from '../components/places'
import { graphql} from 'gatsby'


const IndexPage = ({data}) => {
  console.log(data)
  return (
  <>
      <div className="container-1">
        <div><Header className="navigation" /></div>
        <div><TitleCard className="titleCard"/></div>
        <div><SocialMenu className="socialMenu"/></div>
      </div>
      <div className="container-2">

        {data.allInstaNode.edges.slice(0, 5).map(img => (
          <div className="ig-img" key={img.node.id}>
            <img src={img.node.preview}></img>
          </div>))}   
      </div> 
      <div><Reviews className="reviews"/></div>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  allInstaNode {
    edges {
      node {
        id
        likes
        comments
        mediaType
        preview
        original
        timestamp
        caption
        localFile {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        thumbnails {
          src
          config_width
          config_height
        }
        dimensions {
          height
          width
        }
      }
    }
  }
}
`
