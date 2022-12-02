import { Link, useLocation } from 'react-router-dom';
import { Box, GoBeck, MovieInformation, MovieInformationBox } from './Style';

const MovieDetalsInformation = ({ data }) => {
  const location = useLocation();
  const genres = data.genres.map(genre => genre.name).join(', ');
  const date = new Date(data.release_date).getFullYear();
  return (
    <Box>
      <GoBeck to={location.state !== null ? location.state : '/'}>
        {'<- Go beck'}
      </GoBeck>
      <MovieInformationBox>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgn-WI1hCtQ9JSNOlgRYW1MHoer_lTeynw&usqp=CAU'
          }
          alt={data.original_title}
          width="150"
        />
        <MovieInformation>
          <h2>
            {data.original_title} ({date})
          </h2>
          <p>User Score: {Math.round(data.popularity)}%</p>
          <b>Overview</b>
          <p>{data.overview}</p>
          <b>Ganres</b>
          <p>{genres.length > 1 ? genres : '-'}</p>
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
