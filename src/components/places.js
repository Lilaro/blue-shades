// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/layout";

// const PlacesPage = ({ resp }) => {
//   const place = resp.googlePlacesPlace;
//   const reviews = place.data.result.reviews.map(r => (
//     <div>
//       {/* <img height="50" width="50" src={r.profile_photo_url} /> */}
//       <strong>
//         {r.author_name} - {r.rating}
//       </strong>
//       <p>{`${r.text.substring(0, 250)} ...`}</p>
//     </div>
//   ));
//   return (
//     <Layout>
//       <h1>{place.name}</h1>
//       {/* <p>total ratings: {place.user_ratings_total}</p> */}
//       <p>average: {place.rating}</p>
//       <h3>Recent Reviews</h3>
//       <div>{reviews}</div>
//     </Layout>
//   );
// };

// export const reviewQuery = graphql`
//   query {
//     googlePlacesPlace {
//       data {
//         result {
//           reviews {
//             author_name
//             rating
//             text
//           }
//         }
//       }
//     }  
//   }
// `;

// export default PlacesPage;