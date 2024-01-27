"use client";
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { useQuery } from "@apollo/client";
import { GET_NETFLIX } from "../../graphql/queries";

// const List = () => {
//   const { data, loading, error, fetchMore } = useQuery(GET_NETFLIX);
//   const [netflixShows, setNetflixShows] = useState([]);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     const updateShows = () => {
//       if (data) {
//         setNetflixShows(data);
//       }
//     };

//     // Check if data is available before updating shows
//     if (!loading && !error) {
//       updateShows();
//     }
//   }, [data, loading, error]);

//   const handleLoadMore = () => {
//     fetchMore({
//       variables: {
//         offset: netflixShows.netflix_shows?.length // Assuming you have an offset variable in your query
//       },
//       updateQuery: (prev, { fetchMoreResult }) => {
//         if (!fetchMoreResult || fetchMoreResult.netflix_shows?.length === 0) {
//           setHasMore(false);
//           return prev;
//         }
//         return {
//           netflix_shows: [
//             ...prev.netflix_shows,
//             ...fetchMoreResult.netflix_shows
//           ]
//         };
//       }
//     });
//   };

//   if (loading )
//     return (
//       <p style={{textAlign:"center", 
//       backgroundColor:"green",
//       padding:"2px",
//       color:"white"}}>
//         Loading ....
//       </p>
//     );
//   if (error)
//     return (
//       <p className="text-white flex items-center justify-center">
//         Oops! Something went wrong ....
//       </p>
//     );

//   return (
//     <Container>
//       <Typography style={{
//         border:"1px solid black",
//         textAlign:"center",
//         backgroundColor:"red",
//         marginTop:"5px",
//         padding:"2px",
//         color:"white"
//       }}>InfiniteScroll</Typography>
//       <InfiniteScroll
//         dataLength="8000"
//         next={handleLoadMore}
//         hasMore={hasMore}
//         loader={<p>Loading...</p>}
//       >
//         <Grid container spacing={3}>
//           {netflixShows.netflix_shows?.map((show,index) => (
//             <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">{show.title}</Typography>
//                   <Typography variant="body2">{show.description}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </InfiniteScroll>
//     </Container>
//   );
// };

// export default List;



const List = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NETFLIX);
  const [netflixShows, setNetflixShows] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const updateShows = () => {
      if (data) {
        setNetflixShows(data.netflix_shows); // Assuming this is the correct property in your response
      }
    };

    // Check if data is available before updating shows
    if (!loading && !error) {
      updateShows();
    }
  }, [data, loading, error,netflixShows]);

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: netflixShows.length // Assuming you have an offset variable in your query
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || !fetchMoreResult.netflix_shows || fetchMoreResult.netflix_shows.length === 0) {
          setHasMore(false);
          return prev;
        }
        return {
          netflix_shows: [
            ...prev.netflix_shows,
            ...fetchMoreResult.netflix_shows
          ]
        };
      }
    });
  };

  if (loading)
    return (
      <p style={{ textAlign: "center", backgroundColor: "green", padding: "2px", color: "white" }}>
        Loading ....
      </p>
    );
  if (error)
    return (
      <p className="text-white flex items-center justify-center">
        Oops! Something went wrong ....
      </p>
    );

  return (
    <Container>
      <Typography style={{
        border: "1px solid black",
        textAlign: "center",
        backgroundColor: "red",
        marginTop: "5px",
        padding: "2px",
        color: "white"
      }}>InfiniteScroll</Typography>
      <InfiniteScroll
        dataLength={netflixShows.length}
        next={handleLoadMore}
        hasMore={hasMore}
        loader={<p style={{ textAlign: "center", backgroundColor: "green", padding: "2px", color: "white" }}>Loading...</p>}
      >
        <Grid container spacing={3}>
          {netflixShows.map((show, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{show.title}</Typography>
                  <Typography variant="body2">{show.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default List;