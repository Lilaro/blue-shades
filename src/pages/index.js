import React from "react"
import '../styles/styles.scss'
import Header from '../components/header'
import TitleCard from '../components/titleCard'
import SocialMenu from '../components/socialMenu'
import {useStaticQuery, graphql} from 'gatsby'


const IndexPage = ({data}) => (
    <>
      <div className="container-1">
        <div><Header className="navigation" /></div>
        <div><TitleCard className="titleCard"/></div>
        <div><SocialMenu className="socialMenu"/></div>
      </div>
      <div className="container-2">

        {data.allInstaNode.edges.map(img => (
          <div className="ig-img" key={img.node.id}>
            <img src={img.node.preview}></img>
          </div>))}
        
      </div>  
    </>
 
)

export default IndexPage

// export const imgs = ({data}) => {
//   return data.allInstaNode.edges.map(img => (
//     <div className="ig-img" key={img.node.id}>
//       <img src={img.node.preview}></img>
//     </div>
//   )), console.log(imgs)
// }

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
