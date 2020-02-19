// import React from 'react'
// import { graphql } from 'gatsby'

// const Reviews = ({data}) => {
//   const reviews = data.allGooglePlacesReview.map(r => (
//         <div>
//           <strong>
//             {r.author_name} - {r.rating}
//           </strong>
//           <p>{`${r.text.substring(0, 250)} ...`}</p>
//         </div>
//       ));
//     return (
//       <div>
//         <h3>Recent Reviews</h3>
//         {reviews}
//       </div>
//     )

// }

// export const query = graphql`
//   query {
//       allGooglePlacesReview {
//         nodes {
//                 text
//                 author_name
//                 profile_photo_url
//                 rating
//               }
//       }
//   }
// `;

// export const query = graphql`
//   query {
//     googlePlacesPlace {
//       name
//       rating
//       childrenGooglePlacesReview {
//         author_name
//         text
//         rating
//         profile_photo_url
//       }
//       user_ratings_total
//     }
//   }
// `;


// export default Reviews


        // <div id="google-reviews"></div>

        // <a rel="stylesheet" href="https://cdn.rawgit.com/stevenmonson/googleReviews/master/google-places.css"/>
        // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        // <script src="https://cdn.jsdelivr.net/gh/stevenmonson/googleReviews@6e8f0d794393ec657dab69eb1421f3a60add23ef/google-places.js"></script>
        // <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&{process.env.GOOGLE_API_KEY}&signed_in=true&libraries=places"></script>
        
        // <script>
        // jQuery(document).ready(function( $ ) {
        //    $("#google-reviews").googlePlaces({
        //         placeId: 'ChIJr4dJcI4G5IkR_MZCE-1o-RQ' //Find placeID @: https://developers.google.com/places/place-id
        //       , render: ['reviews']
        //       , min_rating: 4
        //       , max_rows:4
        //    })
        // });
        // </script>