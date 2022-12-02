import { getTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List } from './style';

const TrendingList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Trending todey</h1>
      <List>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={location}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};

export default TrendingList;
