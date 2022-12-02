import { getMovieDetails } from 'Api/Api';
import MovieDetalsInformation from 'components/MovieDetalsInformation/MovieDetalsInformation';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => setData(data))
      .catch(console.error);
  }, [movieId]);

  if (data.length < 1) {
    return;
  }

  return (
    <div>
      <MovieDetalsInformation data={data} />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
