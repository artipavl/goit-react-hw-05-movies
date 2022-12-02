import { Link, useLocation } from 'react-router-dom';

const MovieDetalsInformation = ({ data }) => {
  const location = useLocation();
  const genres = data.genres.map(genre => genre.name).join(', ');
  return (
    <div>
      <Link to={location.state !==null ? location.state : '/'}>{"<-Go beck"}</Link>
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
          <p>{genres ? genres : '-'}</p>
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
    </div>
  );
};

export default MovieDetalsInformation;
