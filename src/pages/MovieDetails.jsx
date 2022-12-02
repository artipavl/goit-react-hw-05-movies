import { getMovieDetails } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId).then(data => setData(data));
  }, [movieId]);

  if (data.length < 1) {
    return;
  }

  const genres = data.genres.map(genre => genre.name).join(', ');

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.original_title}
          width="150"
        />
        <div>
          <h2>{data.original_title}</h2>
          <p>User Score: {data.popularity}</p>
          <b>Overview</b>
          <p>{data.overview}</p>
          <b>Ganres</b>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <h3>Additinal information</h3>
        <ul>
          <li>
            <Link to="cast">cast</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
