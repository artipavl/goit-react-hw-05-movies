import { getTrending } from 'Api/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending().then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Trending</h1>
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
