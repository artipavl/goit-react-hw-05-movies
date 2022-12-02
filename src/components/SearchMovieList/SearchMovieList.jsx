import { Link, useLocation } from 'react-router-dom';
import { List } from './Style';

const SearchMovieList = ({ data }) => {
  const location = useLocation();

  return (
    <List>
      {data.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={location}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </List>
  );
};

export default SearchMovieList;
