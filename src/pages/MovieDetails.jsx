import { getMovieDetails } from 'Api/Api';
import MovieDetalsInformation from 'components/MovieDetalsInformation/MovieDetalsInformation';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(
        ({
          id,
          genres,
          release_date,
          poster_path,
          original_title,
          overview,
          popularity,
        }) =>
          setData({
            id,
            genres,
            release_date,
            poster_path,
            original_title,
            overview,
            popularity,
          })
      )
      .catch(setError);
  }, [movieId]);

  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }

  if (!data) {
    return;
  }

  return (
    <div>
      <MovieDetalsInformation data={data} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
