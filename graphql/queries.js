import {  gql } from '@apollo/client';


export const GET_NETFLIX = gql`
   query getNetflix {
      netflix_shows {
      cast_members
      country
      date_added
      description
      director
      duration
      listed_in
      rating
      release_year
      title
      type
    }
  }
`;