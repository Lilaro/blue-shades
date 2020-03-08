import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'


export default () => {
    const imgData = useStaticQuery(graphql`
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
    `)

    const filterImgs = imgData.allInstaNode.edges.slice(0, 5).map((img) => {
        return <div className="container" key={img.node.id}>
          <img src={img.node.preview} alt='Instagram Image' className="ig-img"></img>
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>})    
  
  return (
      
    <div>
      {filterImgs}
    </div>

  )
}
