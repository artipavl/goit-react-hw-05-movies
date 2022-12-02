import { MovieItam } from 'components/MovieItam/MovieItam';
import { useLocation } from 'react-router-dom';
import { List } from './Style';

const SearchMovieList = ({ data }) => {
  const location = useLocation();

  return (
    <List>
      {data.map(movie => (
        <li key={movie.id}>
          <MovieItam movie={movie} location={location} />
        </li>
      ))}
    </List>
  );
};

export default SearchMovieList;
