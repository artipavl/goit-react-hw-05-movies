import { Link, useLocation } from 'react-router-dom';
import { Box, GoBeck, MovieInformation, MovieInformationBox } from './Style';

const MovieDetalsInformation = ({
  data: {
    genres,
    release_date,
    poster_path,
    original_title,
    overview,
    popularity,
  },
}) => {
  const location = useLocation();
  const genresMovie = genres.map(genre => genre.name).join(', ');
  const date = new Date(release_date).getFullYear();
  return (
    <Box>
      <GoBeck to={location.state !== null ? location.state : '/'}>
        {'<- Go beck'}
      </GoBeck>
      <MovieInformationBox>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgn-WI1hCtQ9JSNOlgRYW1MHoer_lTeynw&usqp=CAU'
          }
          alt={original_title}
          width="150"
        />
        <MovieInformation>
          <h2>
            {original_title} ({date})
          </h2>
          <p>User Score: {Math.round(popularity)}%</p>
          <b>Overview</b>
          <p>{overview ? overview : '-'}</p>
          <b>Ganres</b>
          <p>{genresMovie.length > 1 ? genresMovie : '-'}</p>
        </MovieInformation>
      </MovieInformationBox>
      <MovieInformationBox>
        <MovieInformation>
          <h2>Additinal information</h2>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                reviews
              </Link>
            </li>
          </ul>
        </MovieInformation>
      </MovieInformationBox>
    </Box>
  );
};

export default MovieDetalsInformation;
