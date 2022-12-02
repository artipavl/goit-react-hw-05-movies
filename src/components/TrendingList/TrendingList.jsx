import { getTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data =>
        data.map(({ id, original_title, name }) => ({
          id,
          original_title,
          name,
        }))
      )
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Trending todey</h1>
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={location}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrendingList;
