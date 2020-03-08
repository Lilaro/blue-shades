import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


export default () => {
  const resp = useStaticQuery(graphql`
      query {
        googlePlacesPlace {
          data {
            result {
              reviews {
                author_name
                rating
                text
              }
            }
          }
        }  
      }
    `)

    const filteredReviews = resp.googlePlacesPlace.data.result.reviews.filter((review) => {
      return review.rating > 2
    })
    const reviews = filteredReviews.map((review) => {
       return <>
          <h4>
            {review.author_name} - {review.rating} stars
          </h4>
          <p>{`${review.text.substring(0, 250)} ...`}</p>
          </>
    })

    return (
      <div>
        {reviews}
      </div>      
    )
}