import { getSearchMovie } from 'Api/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchMovie = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      getSearchMovie(search, 1).then(data => setData(data));
    }
  }, [search]);

  return (
    <div>
      <h1>Trending</h1>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {search && (
        <ul>
          {data.length > 0 &&
            data.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchMovie;
