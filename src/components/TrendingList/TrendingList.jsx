import { Link, useLocation } from 'react-router-dom';
import { List } from './style';

const TrendingList = ({data}) => {
  const location = useLocation();

  return (
    <List>
      {data.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`} state={location}>
            {movie.original_title || movie.name}
          </Link>
        </li>
      ))}
    </List>
  );
};

export default TrendingList;